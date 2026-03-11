/**
 * generate.ts
 * Reads prompts/queue.yaml, generates pending images via Imagen 4,
 * writes PNGs to output paths, updates queue status.
 *
 * Usage:
 *   node dist/generate.js              # generate up to BATCH_SIZE pending
 *   BATCH_SIZE=5 node dist/generate.js
 *   DRY_RUN=true node dist/generate.js # preview without calling API
 */

import fs from 'fs'
import path from 'path'

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const QUEUE_FILE = process.env.QUEUE_FILE ?? './prompts/queue.yaml'
const BATCH_SIZE = parseInt(process.env.BATCH_SIZE ?? '5', 10)
const DRY_RUN = process.env.DRY_RUN === 'true'
const MODEL = 'gemini-3.1-flash-image-preview'
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`
const ASPECT_RATIO = '1:1'

if (!GEMINI_API_KEY && !DRY_RUN) {
  console.error('GEMINI_API_KEY is required')
  process.exit(1)
}

// ---------------------------------------------------------------------------
// Minimal YAML parser (no deps — only handles our specific queue format)
// ---------------------------------------------------------------------------

interface Prompt {
  id: string
  status: 'pending' | 'done' | 'skip'
  output_path: string
  prompt: string
}

interface Queue {
  prompts: Prompt[]
  raw: string
}

function parseQueue(content: string): Queue {
  const prompts: Prompt[] = []
  const lines = content.split('\n')

  let current: Partial<Prompt> | null = null
  let inPrompt = false
  let promptLines: string[] = []

  for (const line of lines) {
    // New item
    if (line.match(/^  - id:/)) {
      if (current && promptLines.length) {
        current.prompt = promptLines.join(' ').trim()
        prompts.push(current as Prompt)
      }
      current = { id: line.replace('  - id:', '').trim() }
      inPrompt = false
      promptLines = []
      continue
    }

    if (!current) continue

    const statusMatch = line.match(/^    status:\s*(.+)/)
    if (statusMatch) { current.status = statusMatch[1].trim() as Prompt['status']; continue }

    const pathMatch = line.match(/^    output_path:\s*(.+)/)
    if (pathMatch) { current.output_path = pathMatch[1].trim(); continue }

    if (line.match(/^    prompt: >$/)) { inPrompt = true; continue }

    if (inPrompt && line.startsWith('      ')) {
      promptLines.push(line.trim())
      continue
    }

    if (inPrompt && !line.startsWith('      ')) {
      inPrompt = false
    }
  }

  // Last item
  if (current && promptLines.length) {
    current.prompt = promptLines.join(' ').trim()
    prompts.push(current as Prompt)
  }

  return { prompts, raw: content }
}

function markDone(content: string, id: string): string {
  return content.replace(
    new RegExp(`(  - id: ${id}[\\s\\S]*?    status:) pending`),
    '$1 done'
  )
}

// ---------------------------------------------------------------------------
// Imagen 4 API call
// ---------------------------------------------------------------------------

async function generateImage(prompt: string): Promise<Buffer> {
  const response = await fetch(`${API_URL}?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseModalities: ['TEXT', 'IMAGE'],
        imageConfig: { aspectRatio: ASPECT_RATIO },
      }
    })
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Nano Banana API error ${response.status}: ${text}`)
  }

  const data = await response.json() as {
    candidates: Array<{
      content: { parts: Array<{ text?: string; inlineData?: { mimeType: string; data: string } }> }
    }>
  }

  const parts = data.candidates?.[0]?.content?.parts ?? []
  const imagePart = parts.find(p => p.inlineData?.data)
  if (!imagePart?.inlineData) {
    throw new Error(`No image in response: ${JSON.stringify(data)}`)
  }

  return Buffer.from(imagePart.inlineData.data, 'base64')
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  if (!fs.existsSync(QUEUE_FILE)) {
    console.error(`Queue file not found: ${QUEUE_FILE}`)
    process.exit(1)
  }

  let queueContent = fs.readFileSync(QUEUE_FILE, 'utf8')
  const { prompts } = parseQueue(queueContent)

  const pending = prompts.filter(p => p.status === 'pending')
  const batch = pending.slice(0, BATCH_SIZE)

  console.log(`Queue: ${prompts.length} total, ${pending.length} pending`)
  console.log(`Batch size: ${BATCH_SIZE}, processing: ${batch.length}`)

  if (batch.length === 0) {
    console.log('Nothing to generate.')
    process.exit(0)
  }

  let generated = 0
  let failed = 0

  for (const item of batch) {
    console.log(`\n[${item.id}]`)
    console.log(`  Output: ${item.output_path}`)
    console.log(`  Prompt: ${item.prompt.slice(0, 80)}...`)

    if (DRY_RUN) {
      console.log('  [DRY RUN] Skipping API call')
      continue
    }

    // Ensure output directory exists
    const dir = path.dirname(item.output_path)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    try {
      const imageBuffer = await generateImage(item.prompt)
      fs.writeFileSync(item.output_path, imageBuffer)
      console.log(`  ✓ Saved ${imageBuffer.length} bytes`)

      // Mark done in queue
      queueContent = markDone(queueContent, item.id)
      fs.writeFileSync(QUEUE_FILE, queueContent)

      generated++
    } catch (err) {
      console.error(`  ✗ Failed: ${err}`)
      failed++
    }

    // Small delay between requests
    if (batch.indexOf(item) < batch.length - 1) {
      await new Promise(r => setTimeout(r, 1000))
    }
  }

  console.log(`\nDone. Generated: ${generated}, Failed: ${failed}`)

  if (failed > 0) process.exit(1)
}

main().catch(err => {
  console.error('Unhandled error:', err)
  process.exit(1)
})

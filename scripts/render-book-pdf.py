#!/usr/bin/env python3
"""
Typeset the river into a trade-paperback PDF and report the true page count.

Input: chapter-delimited text from scripts/emit-river-chapters.mjs
       (sentinel lines `@@@CHAPTER:<slug>@@@`).
Usage: python3 scripts/render-book-pdf.py [in.txt] [out.pdf] [trim]
       trim = "5.5x8.5" (default) or "6x9"

Requires: reportlab  (local dev tool; not a project JS dependency)
"""
import re
import sys
import unicodedata
from reportlab.lib.units import inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY, TA_CENTER
from reportlab.platypus import BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, PageBreak
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

SRC = sys.argv[1] if len(sys.argv) > 1 else "/tmp/river-chapters.txt"
OUT = sys.argv[2] if len(sys.argv) > 2 else "/tmp/the-river.pdf"
TRIM_NAME = sys.argv[3] if len(sys.argv) > 3 else "5.5x8.5"
TRIM = (6 * inch, 9 * inch) if TRIM_NAME == "6x9" else (5.5 * inch, 8.5 * inch)

# Unicode serif (Times-metric) so names like Zamość / Öcalan and the
# enclosure⇄commons arrow render instead of dropping to blanks.
LIB = "/usr/share/fonts/truetype/liberation/"
FONT, FONT_B, FONT_I = "Times-Roman", "Times-Bold", "Times-Italic"
_cmap = None
try:
    reg = TTFont("BookSerif", LIB + "LiberationSerif-Regular.ttf")
    pdfmetrics.registerFont(reg)
    pdfmetrics.registerFont(TTFont("BookSerif-Bold", LIB + "LiberationSerif-Bold.ttf"))
    pdfmetrics.registerFont(TTFont("BookSerif-Italic", LIB + "LiberationSerif-Italic.ttf"))
    pdfmetrics.registerFont(TTFont("BookSerif-BoldItalic", LIB + "LiberationSerif-BoldItalic.ttf"))
    pdfmetrics.registerFontFamily("BookSerif", normal="BookSerif", bold="BookSerif-Bold",
                                  italic="BookSerif-Italic", boldItalic="BookSerif-BoldItalic")
    FONT, FONT_B, FONT_I = "BookSerif", "BookSerif-Bold", "BookSerif-Italic"
    _cmap = set(reg.face.charToGlyph.keys())
except Exception as e:  # fall back to built-in Times (cp1252 only)
    sys.stderr.write(f"TTF register failed ({e}); using Times-Roman\n")


def sanitize(s):
    """Replace any char the chosen font can't draw, so nothing renders blank."""
    if _cmap is None:
        return s
    out = []
    for ch in s:
        if ch in "\n\t" or ord(ch) in _cmap:
            out.append(ch)
            continue
        repl = unicodedata.normalize("NFKD", ch).encode("ascii", "ignore").decode()
        out.append(repl or {"⇄": "<->"}.get(ch, "?"))
    return "".join(out)


def md_inline(s):
    s = sanitize(s)
    s = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    s = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", s)
    s = re.sub(r"\*(.+?)\*", r"<i>\1</i>", s)
    return s


def prettify(slug):
    return slug.replace("-", " ").title()


styles = getSampleStyleSheet()
body = ParagraphStyle("body", parent=styles["Normal"], fontName=FONT,
                      fontSize=11, leading=14.5, alignment=TA_JUSTIFY,
                      firstLineIndent=0.22 * inch, spaceAfter=0)
body0 = ParagraphStyle("body0", parent=body, firstLineIndent=0)
chap = ParagraphStyle("chap", parent=styles["Normal"], fontName=FONT_B,
                      fontSize=18, leading=22, spaceAfter=24, alignment=TA_CENTER)
orn = ParagraphStyle("orn", parent=styles["Normal"], fontName=FONT,
                     fontSize=11, alignment=TA_CENTER, spaceBefore=8, spaceAfter=8)

page_count = [0]


def on_page(canvas, doc):
    page_count[0] = max(page_count[0], canvas.getPageNumber())
    canvas.setFont(FONT, 9)
    canvas.drawCentredString(TRIM[0] / 2, 0.45 * inch, str(canvas.getPageNumber()))


frame = Frame(0.75 * inch, 0.75 * inch, TRIM[0] - 1.5 * inch, TRIM[1] - 1.55 * inch, id="body")
doc = BaseDocTemplate(OUT, pagesize=TRIM,
                      pageTemplates=[PageTemplate(id="main", frames=[frame], onPage=on_page)])

text = open(SRC, encoding="utf-8").read()
chapters = [c for c in text.split("@@@CHAPTER:") if c.strip()]
story = []
for i, ch in enumerate(chapters):
    head, _, bodytext = ch.partition("@@@\n")
    slug = head.strip()
    if i > 0:
        story.append(PageBreak())
    story.append(Spacer(1, 0.6 * inch))
    story.append(Paragraph(prettify(slug), chap))
    first = True
    for b in re.split(r"\n\s*\n", bodytext.strip()):
        b = b.strip()
        if not b:
            continue
        if b == "---":
            story.append(Paragraph("* * *", orn))
            first = True
            continue
        b = " ".join(line.strip() for line in b.splitlines())
        story.append(Paragraph(md_inline(b), body0 if first else body))
        first = False

doc.build(story)
words = len(re.findall(r"\S+", re.sub(r"@@@CHAPTER:[^@]+@@@", "", text)))
print(f"PAGES={page_count[0]}  TRIM={TRIM_NAME}  CHAPTERS={len(chapters)}  WORDS={words}")

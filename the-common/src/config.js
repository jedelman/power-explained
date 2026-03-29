// Base URL for power-explained article fetches
// Override with VITE_POWER_EXPLAINED_URL env var in Netlify
export const POWER_EXPLAINED_BASE =
  import.meta.env.VITE_POWER_EXPLAINED_URL ||
  'https://jedelman.github.io/power-explained/'

import { createClient } from '@sanity/client'

// The Client Hub password. Leanne sets it in the Studio (Hub Password); it lives in the private document
// "secrets.hubSettings", which needs the Sanity read key (SANITY_API_TOKEN) to read. Until one is set there,
// or if the key is missing, the hub keeps the code it has always used, so nobody is ever locked out.
const PREVIOUS_CODE = 'BHCLIENT26'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

export async function hubPassword(): Promise<string> {
  const token = process.env.SANITY_API_TOKEN
  if (projectId && projectId !== 'your_project_id' && token) {
    try {
      // its own client: no CDN (a new password works at once) and published content only
      const sanity = createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: false, token, perspective: 'published' })
      const saved = await sanity.fetch<string | null>('*[_id == "secrets.hubSettings"][0].password')
      if (saved && saved.trim()) return saved.trim()
    } catch (e) {
      console.error('Client Hub: could not read the password from Sanity', e)
    }
  }
  return process.env.HUB_PASSWORD || PREVIOUS_CODE
}

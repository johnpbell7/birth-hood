import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'your_project_id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Queries
export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  category,
  mainImage,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
}`

export const blogPostQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  category,
  mainImage,
  body,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
}`

export const freebiesQuery = `*[_type == "freebie"] | order(_createdAt asc) {
  _id,
  title,
  description,
  emoji,
  downloadFile {
    asset-> { url }
  },
  externalUrl,
  type
}`

import { client } from './sanity'

const PAGE_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  metaTitle,
  metaDescription,
  sections[]{
    ...,
    _type == "splitSection" => {
      ...,
      image{ ..., asset-> }
    },
    _type == "heroSection" => {
      ...,
      image{ ..., asset-> }
    },
    _type == "imageSection" => {
      ...,
      image{ ..., asset-> }
    },
    _type == "featureGridSection" => {
      ...,
      items[]{
        ...,
        image{ ..., asset-> }
      }
    },
    _type == "richTextSection" => {
      ...,
      body[]{
        ...,
        _type == "image" => { ..., asset-> }
      }
    }
  }
`

export type SanityPage = {
  _id: string
  title: string
  slug: string
  metaTitle?: string
  metaDescription?: string
  sections?: Array<{ _type: string; _key: string; [k: string]: unknown }>
}

export async function getPage(slug: string): Promise<SanityPage | null> {
  if (!client) return null
  return client.fetch(
    `*[_type == "page" && slug.current == $slug && !(_id in path("drafts.**"))][0]{ ${PAGE_FIELDS} }`,
    { slug },
    { next: { revalidate: 60 } },
  )
}

export async function getAllPageSlugs(): Promise<string[]> {
  if (!client) return []
  return client.fetch(
    `*[_type == "page" && defined(slug.current)].slug.current`,
    {},
    { next: { revalidate: 300 } },
  )
}

export type HubResource = {
  _id: string
  title: string
  description?: string
  type: 'pdf' | 'video' | 'audio' | 'external'
  subgroup?: string
  fileUrl?: string
  videoUrl?: string
  externalUrl?: string
  duration?: string
  logoLetter?: string
  order?: number
}

export async function getHubResources(): Promise<HubResource[]> {
  if (!client) return []
  return client.fetch(
    `*[_type == "hubResource"] | order(order asc, title asc) {
      _id,
      title,
      description,
      type,
      subgroup,
      "fileUrl": file.asset->url,
      videoUrl,
      externalUrl,
      duration,
      logoLetter,
      order
    }`,
    {},
    { next: { revalidate: 60 } },
  )
}

export type Freebie = {
  _id: string
  title: string
  description?: string
  emoji?: string
  type?: 'pdf' | 'audio' | 'external'
  fileUrl?: string
  externalUrl?: string
  buttonLabel?: string
  accentColor?: 'pink' | 'black'
}

export async function getFreebies(): Promise<Freebie[]> {
  if (!client) return []
  return client.fetch(
    `*[_type == "freebie"] | order(_createdAt asc) {
      _id,
      title,
      description,
      emoji,
      type,
      "fileUrl": downloadFile.asset->url,
      externalUrl,
      buttonLabel,
      accentColor
    }`,
    {},
    { next: { revalidate: 60 } },
  )
}

export type SiteSettings = {
  siteName?: string
  tagline?: string
  contactEmail?: string
  phone?: string
  social?: {
    instagram?: string
    facebook?: string
    youtube?: string
    tiktok?: string
    calendly?: string
  }
  footerText?: string
  marqueeWords?: string[]
  // Home page
  homeHeroHeadline?: string
  homeHeroSubtitle?: string
  homeHeroCta?: string
  homeHeroCtaHref?: string
  homeServicesEyebrow?: string
  homeServicesHeading?: string
  homeServices?: Array<{ name: string; description?: string; href?: string }>
  homeAboutEyebrow?: string
  homeAboutHeading?: string
  homeAboutBody?: string[]
  homeAboutCredentials?: string[]
  homeAboutCta?: string
  homeAboutCtaHref?: string
  homeTestimonialsEyebrow?: string
  homeTestimonialsHeading?: string
  homeTestimonials?: Array<{ quote: string; attribution?: string }>
  homeFreebiesHeading?: string
  homeFreebiesBody?: string
  homeFreebiesTags?: string[]
  homeFreebiesCta?: string
  homeBookingHeading?: string
  homeBookingBody?: string
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  if (!client) return null
  return client.fetch(
    `*[_type == "siteSettings"][0]`,
    {},
    { next: { revalidate: 60 } },
  )
}

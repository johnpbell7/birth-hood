import { client, isSanityConfigured } from './sanity'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import type { NavItem } from '@/lib/nav'

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
      image{ ..., asset-> },
      image2{ ..., asset-> }
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
    },
    _type == "twoColumnSection" => {
      ...,
      image{ ..., asset-> },
      body[]{
        ...,
        _type == "image" => { ..., asset-> }
      },
      stats[]{ ... }
    },
    _type == "linkListSection" => {
      ...,
      links[]{ ... }
    },
    _type == "courseDatesSection" => {
      ...,
      courses[]{ ... }
    },
    _type == "sessionOutlineSection" => {
      ...,
      sessions[]{
        ...,
        topics[]
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
  try {
    return await client.fetch(
      `*[_type == "page" && slug.current == $slug && !(_id in path("drafts.**"))][0]{ ${PAGE_FIELDS} }`,
      { slug },
      { next: { revalidate: 60 } },
    )
  } catch (e) { console.error('Sanity getPage failed:', e); return null }
}

export async function getAllPageSlugs(): Promise<string[]> {
  if (!client) return []
  try {
    return await client.fetch(
      `*[_type == "page" && defined(slug.current)].slug.current`,
      {},
      { next: { revalidate: 300 } },
    )
  } catch (e) { console.error('Sanity getAllPageSlugs failed:', e); return [] }
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

/** The Hub's tracklist is published even before the audio is uploaded — a
    client should see what is coming — so audio entries come through with or
    without a file and render as "Coming soon". Documents and links still have
    to have something behind them, or they would render as dead links. */
export async function getHubResources(): Promise<HubResource[]> {
  if (!client) return []
  try {
    return await client.fetch(
    `*[_type == "hubResource" && (type == "audio" || defined(file.asset) || defined(videoUrl) || defined(externalUrl))] | order(order asc, title asc) {
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
  } catch (e) { console.error('Sanity getHubResources failed:', e); return [] }
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
  try {
    return await client.fetch(
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
  } catch (e) { console.error('Sanity getFreebies failed:', e); return [] }
}

export type SiteSettings = {
  siteName?: string
  tagline?: string
  contactEmail?: string
  /** Hides the shop behind a "coming soon" panel while it is being finished. */
  shopComingSoon?: boolean
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
  areasCounties?: string[]
  areasTowns?: string[]
  // Home page
  homeHeroTitle?: string
  homeHeroSubtitle?: string
  homeHeroCta?: string
  homeHeroCtaHref?: string
  homeSignatureImage?: SanityImageSource
  homeHeroCollage?: Array<{ image?: SanityImageSource; label?: string; alt?: string }>
  homeWelcomeTitle?: string
  homeWelcomeBody?: string[]
  homeWelcomeImage?: SanityImageSource
  homeServicesEyebrow?: string
  homeServicesHeading?: string
  homeServices?: Array<{ name: string; description?: string; href?: string }>
  homeAboutEyebrow?: string
  homeAboutHeading?: string
  homeAboutImage?: SanityImageSource
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
  try {
    return await client.fetch(
      `*[_type == "siteSettings"][0]`,
      {},
      { next: { revalidate: 60 } },
    )
  } catch (e) { console.error('Sanity getSiteSettings failed:', e); return null }
}

// ── Navigation (main menu) ─────────────────────────────────────────────────
// Returns the CMS-managed menu, or null when unset/empty/unreachable —
// callers fall back to DEFAULT_NAV.
export async function getNavigation(): Promise<NavItem[] | null> {
  if (!client) return null
  try {
    const doc = await client.fetch(
      `*[_type == "navigation"][0]{ items[]{ label, href, children[]{ label, href } } }`,
      {},
      { next: { revalidate: 60 } },
    )
    const items = doc?.items?.filter((i: NavItem) => i?.label)
    return items?.length ? items : null
  } catch (e) { console.error('Sanity getNavigation failed:', e); return null }
}

// ── Shop / paid resources ──────────────────────────────────────────────────
// PUBLIC card data — intentionally excludes the file URL so the paid download
// is never exposed on the page.
export type ShopProduct = {
  _id: string
  title: string
  description?: string
  price: number
  imageUrl?: string | null
  // File extension of the download (e.g. "pdf", "mp3") — used to show a
  // "PDF"/"Audio" tag on the card. Safe to expose; the URL is never included.
  fileExt?: string | null
  // Set for services that are booked rather than downloaded (the Power Hours).
  // A product with a bookingUrl skips the cart entirely and links straight out,
  // so it is unaffected by whether Stripe checkout is switched on.
  bookingUrl?: string | null
  bookingLabel?: string | null
  kind?: 'single' | 'bundle' | null
  sku?: string | null
  /** How many files the buyer gets — a bundle counts what it contains. */
  fileCount?: number | null
  /** Titles of the resources inside a bundle, listed on the card. */
  includes?: { _id: string; title: string }[] | null
  /** Sort position from the Studio. Must stay in the projection: GROQ orders
      the projected result, so leaving it out makes `order(order asc)` a no-op
      and the shop falls back to alphabetical. */
  order?: number | null
}
/** One deliverable file. A bundle flattens to its own files plus the files of
    everything it contains. */
export type ShopFile = { url: string; name: string; label?: string | null }

// SERVER-ONLY — includes the download URLs, used only after payment.
export type ShopProductFull = ShopProduct & {
  files: ShopFile[]
  /** Legacy single-file products. */
  fileUrl?: string | null
  fileName?: string | null
}

export async function getShopProducts(): Promise<ShopProduct[]> {
  if (!client) return []
  try {
    return await client.fetch(
      `*[_type == "product" && active != false]{
        _id, title, description, price, "imageUrl": image.asset->url,
        kind, sku, order,
        "fileExt": coalesce(files[0].asset->extension, file.asset->extension),
        "fileCount": count(files) + count(includes[]->files[]),
        "includes": includes[]->{ _id, title },
        bookingUrl, bookingLabel
      } | order(order asc, title asc)`,
      {},
      { next: { revalidate: 60 } },
    )
  } catch (e) { console.error('Sanity getShopProducts failed:', e); return [] }
}

export async function getShopProductsByIds(ids: string[]): Promise<ShopProductFull[]> {
  if (!client || !ids.length) return []
  try {
    const raw = await client.fetch(
      `*[_type == "product" && active != false && _id in $ids]{
        _id, title, description, price,
        "imageUrl": image.asset->url,
        "fileUrl": file.asset->url,
        "fileName": file.asset->originalFilename,
        "ownFiles": files[]{ label, "url": asset->url, "name": asset->originalFilename },
        "bundledFiles": includes[]->files[]{ label, "url": asset->url, "name": asset->originalFilename }
      }`,
      { ids },
      { cache: 'no-store' },
    )
    type Raw = ShopProductFull & { ownFiles?: ShopFile[]; bundledFiles?: ShopFile[] }
    return (raw as Raw[]).map((p) => {
      const own = (p.ownFiles ?? []).filter((f) => f?.url)
      const bundled = (p.bundledFiles ?? []).filter((f) => f?.url)
      // Legacy products only ever had the single `file`.
      const legacy: ShopFile[] =
        own.length === 0 && p.fileUrl ? [{ url: p.fileUrl, name: p.fileName ?? p.title }] : []
      return { ...p, files: [...legacy, ...own, ...bundled] }
    })
  } catch (e) { console.error('Sanity getShopProductsByIds failed:', e); return [] }
}


/* ── Birth stories ─────────────────────────────────────────────────────── */

export type SanityBirthStory = {
  title: string
  slug: string
  type: string
  baby?: string
  place?: string
  excerpt: string
  pullQuote?: string
  /** Portable Text blocks, flattened to plain paragraphs by the caller. */
  body?: { _type: string; children?: { text?: string }[] }[]
}

export async function getBirthStories(): Promise<SanityBirthStory[]> {
  if (!isSanityConfigured || !client) return []
  try {
    return await client.fetch<SanityBirthStory[]>(
      `*[_type == "birthStory"] | order(order asc, title asc) {
        title, "slug": slug.current, type, baby, place, excerpt, pullQuote, body
      }`,
    )
  } catch (e) { console.error('Sanity getBirthStories failed:', e); return [] }
}

/* ── Reviews ───────────────────────────────────────────────────────────── */

export type SanityReview = {
  name: string
  service: string
  when?: string
  text: string
}

export async function getReviews(): Promise<SanityReview[]> {
  if (!isSanityConfigured || !client) return []
  try {
    return await client.fetch<SanityReview[]>(
      `*[_type == "review"] | order(order asc, name asc) { name, service, when, text }`,
    )
  } catch (e) { console.error('Sanity getReviews failed:', e); return [] }
}

/* ── Page heroes (per-page hero photos & wording) ──────────────────────── */

export type SanityPageHero = {
  page: string
  eyebrow?: string
  heading?: string
  subtitle?: string
  photo1?: { asset?: { url?: string }; alt?: string }
  photo2?: { asset?: { url?: string }; alt?: string }
}

export async function getPageHero(page: string): Promise<SanityPageHero | null> {
  if (!isSanityConfigured || !client) return null
  try {
    return await client.fetch<SanityPageHero | null>(
      `*[_type == "pageHero" && page == $page][0]{
        page, eyebrow, heading, subtitle,
        photo1{ alt, asset-> { url } },
        photo2{ alt, asset-> { url } }
      }`,
      { page },
    )
  } catch (e) { console.error('Sanity getPageHero failed:', e); return null }
}

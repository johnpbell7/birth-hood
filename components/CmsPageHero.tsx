import PageHero from '@/components/PageHero'
import { getPageHero } from '@/lib/sanity-queries'

interface PolaroidImage {
  src: string
  alt: string
}

interface Props {
  /** Which pageHero doc in Sanity overrides this hero (matches the "Page" list). */
  page: string
  eyebrow?: string
  title: React.ReactNode
  subtitle: string
  actions?: React.ReactNode
  img1?: PolaroidImage
  img2?: PolaroidImage
  ctaLabel?: string
  ctaHref?: string
  hideFab?: boolean
}

/** Turns "Meet *Leanne*" into "Meet <em>Leanne</em>" so a CMS heading can carry
    the same pink italic emphasis the hand-written ones use. */
function emphasise(heading: string): React.ReactNode {
  const parts = heading.split(/\*([^*]+)\*/g)
  if (parts.length === 1) return heading
  return (
    <>
      {parts.map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : part))}
    </>
  )
}

function sanityPhoto(
  photo: { asset?: { url?: string }; alt?: string } | undefined,
  fallback: PolaroidImage | undefined,
): PolaroidImage | undefined {
  const url = photo?.asset?.url
  if (!url) return fallback
  return {
    src: `${url}?w=900&auto=format&fit=max`,
    alt: photo?.alt ?? fallback?.alt ?? '',
  }
}

/**
 * PageHero with Sanity overrides. Every field is optional in the CMS — anything
 * Leanne leaves blank falls back to the wording and photos committed here, so
 * she can change one photo without retyping the rest.
 */
export default async function CmsPageHero({ page, eyebrow, title, subtitle, img1, img2, ...rest }: Props) {
  const cms = await getPageHero(page)
  return (
    <PageHero
      eyebrow={cms?.eyebrow?.trim() || eyebrow}
      title={cms?.heading?.trim() ? emphasise(cms.heading.trim()) : title}
      subtitle={cms?.subtitle?.trim() || subtitle}
      img1={sanityPhoto(cms?.photo1, img1)}
      img2={sanityPhoto(cms?.photo2, img2)}
      {...rest}
    />
  )
}

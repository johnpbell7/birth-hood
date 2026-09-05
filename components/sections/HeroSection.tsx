import PageHero from '@/components/PageHero'
import { urlFor } from '@/lib/sanity'

type CmsImage = { asset?: unknown; alt?: string }

type Props = {
  eyebrow?: string
  heading: string
  subheading?: string
  ctaLabel?: string
  ctaHref?: string
  image?: CmsImage
  image2?: CmsImage
}

function polaroid(image: CmsImage | undefined) {
  if (!image?.asset) return undefined
  return { src: urlFor(image as never).width(900).url(), alt: image.alt ?? '' }
}

/** Renders a CMS hero block with the same two-polaroid layout the rest of the
    site uses, so a page built in the Studio matches the hand-built pages. */
export default function HeroSection({ eyebrow, heading, subheading, ctaLabel, ctaHref, image, image2 }: Props) {
  return (
    <PageHero
      eyebrow={eyebrow ?? ''}
      title={heading}
      subtitle={subheading ?? ''}
      img1={polaroid(image)}
      img2={polaroid(image2)}
      {...(ctaLabel && ctaHref ? { ctaLabel, ctaHref } : {})}
    />
  )
}

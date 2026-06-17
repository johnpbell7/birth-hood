import HeroSection from './HeroSection'
import RichTextSection from './RichTextSection'
import SplitSection from './SplitSection'
import FeatureGridSection from './FeatureGridSection'
import CtaBandSection from './CtaBandSection'
import FaqSection from './FaqSection'
import VideoSection from './VideoSection'
import ImageSection from './ImageSection'
import TestimonialsSection from './TestimonialsSection'
import PricingSection from './PricingSection'
import StatsSection from './StatsSection'
import TwoColumnSection from './TwoColumnSection'
import LinkListSection from './LinkListSection'
import CourseDatesSection from './CourseDatesSection'
import SessionOutlineSection from './SessionOutlineSection'
import type { SanityPage } from '@/lib/sanity-queries'

type Section = { _type: string; _key: string; [k: string]: unknown }

export default function PageRenderer({ page }: { page: SanityPage }) {
  if (!page.sections?.length) return null
  return (
    <>
      {page.sections.map((s) => renderSection(s as Section))}
    </>
  )
}

function renderSection(s: Section) {
  const key = s._key
  const props = s as unknown as Record<string, unknown>
  switch (s._type) {
    case 'heroSection':
      return <HeroSection key={key} {...(props as Parameters<typeof HeroSection>[0])} />
    case 'richTextSection':
      return <RichTextSection key={key} {...(props as Parameters<typeof RichTextSection>[0])} />
    case 'splitSection':
      return <SplitSection key={key} {...(props as Parameters<typeof SplitSection>[0])} />
    case 'featureGridSection':
      return <FeatureGridSection key={key} {...(props as Parameters<typeof FeatureGridSection>[0])} />
    case 'ctaBandSection':
      return <CtaBandSection key={key} {...(props as Parameters<typeof CtaBandSection>[0])} />
    case 'faqSection':
      return <FaqSection key={key} {...(props as Parameters<typeof FaqSection>[0])} />
    case 'videoSection':
      return <VideoSection key={key} {...(props as Parameters<typeof VideoSection>[0])} />
    case 'imageSection':
      return <ImageSection key={key} {...(props as Parameters<typeof ImageSection>[0])} />
    case 'testimonialsSection':
      return <TestimonialsSection key={key} {...(props as Parameters<typeof TestimonialsSection>[0])} />
    case 'pricingSection':
      return <PricingSection key={key} {...(props as Parameters<typeof PricingSection>[0])} />
    case 'statsSection':
      return <StatsSection key={key} {...(props as Parameters<typeof StatsSection>[0])} />
    case 'twoColumnSection':
      return <TwoColumnSection key={key} {...(props as Parameters<typeof TwoColumnSection>[0])} />
    case 'linkListSection':
      return <LinkListSection key={key} {...(props as Parameters<typeof LinkListSection>[0])} />
    case 'courseDatesSection':
      return <CourseDatesSection key={key} {...(props as Parameters<typeof CourseDatesSection>[0])} />
    case 'sessionOutlineSection':
      return <SessionOutlineSection key={key} {...(props as Parameters<typeof SessionOutlineSection>[0])} />
    default:
      return null
  }
}

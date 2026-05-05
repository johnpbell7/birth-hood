import heroSection from './heroSection'
import richTextSection from './richTextSection'
import splitSection from './splitSection'
import featureGridSection from './featureGridSection'
import ctaBandSection from './ctaBandSection'
import faqSection from './faqSection'
import videoSection from './videoSection'
import imageSection from './imageSection'
import testimonialsSection from './testimonialsSection'

export const blockTypes = [
  heroSection,
  richTextSection,
  splitSection,
  featureGridSection,
  ctaBandSection,
  faqSection,
  videoSection,
  imageSection,
  testimonialsSection,
]

export const blockReferences = blockTypes.map((b) => ({ type: b.name }))

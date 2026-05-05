import heroSection from './heroSection'
import richTextSection from './richTextSection'
import splitSection from './splitSection'
import featureGridSection from './featureGridSection'
import ctaBandSection from './ctaBandSection'
import faqSection from './faqSection'
import videoSection from './videoSection'
import imageSection from './imageSection'
import testimonialsSection from './testimonialsSection'
import pricingSection from './pricingSection'
import statsSection from './statsSection'

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
  pricingSection,
  statsSection,
]

export const blockReferences = blockTypes.map((b) => ({ type: b.name }))

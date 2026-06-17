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
import twoColumnSection from './twoColumnSection'
import linkListSection from './linkListSection'
import courseDatesSection from './courseDatesSection'
import sessionOutlineSection from './sessionOutlineSection'

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
  twoColumnSection,
  linkListSection,
  courseDatesSection,
  sessionOutlineSection,
]

export const blockReferences = blockTypes.map((b) => ({ type: b.name }))

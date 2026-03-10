/**
 * Sanity Studio hosted at /studio
 * Visit http://localhost:3000/studio to access the CMS
 */
'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}

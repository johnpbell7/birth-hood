import { ReactNode } from 'react'
import PageRenderer from '@/components/sections/PageRenderer'
import { getPage } from './sanity-queries'

/**
 * Wraps a page that has existing static content. If a Sanity `page` doc exists
 * with the matching slug AND has at least one section, render the Sanity version
 * via PageRenderer. Otherwise render the static fallback unchanged.
 *
 * Usage in any app/<page>/page.tsx:
 *
 *   export default async function MyPage() {
 *     return cmsOrStatic('my-slug', <ExistingStaticJSX />)
 *   }
 */
export async function cmsOrStatic(slug: string, fallback: ReactNode): Promise<ReactNode> {
  const page = await getPage(slug)
  if (page?.sections?.length) {
    return <PageRenderer page={page} />
  }
  return fallback
}

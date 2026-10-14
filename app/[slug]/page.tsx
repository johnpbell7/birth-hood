import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageRenderer from '@/components/sections/PageRenderer'
import { getPage } from '@/lib/sanity-queries'
import { OG_IMAGE } from '@/lib/seo'

type Params = { slug: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const page = await getPage(slug)
  if (!page) return {}
  const title = page.metaTitle || page.title
  return {
    title,
    description: page.metaDescription,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      type: 'website',
      siteName: 'birth-hood',
      locale: 'en_GB',
      title: `${title} | birth-hood`,
      description: page.metaDescription,
      url: `/${slug}`,
      images: [OG_IMAGE],
    },
  }
}

export default async function DynamicPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const page = await getPage(slug)
  if (!page || !page.sections?.length) notFound()
  return <PageRenderer page={page} />
}

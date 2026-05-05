import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageRenderer from '@/components/sections/PageRenderer'
import { getPage } from '@/lib/sanity-queries'

type Params = { slug: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const page = await getPage(slug)
  if (!page) return {}
  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription,
  }
}

export default async function DynamicPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const page = await getPage(slug)
  if (!page || !page.sections?.length) notFound()
  return <PageRenderer page={page} />
}

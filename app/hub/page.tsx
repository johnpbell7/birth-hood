import type { Metadata } from 'next'
import HubClient from './HubClient'
import { getHubResources } from '@/lib/sanity-queries'

export const metadata: Metadata = {
  title: 'Client Hub',
  description: 'Password-protected resource library for birth-hood clients.',
  robots: { index: false, follow: false },
}

export default async function HubPage() {
  const resources = await getHubResources()
  return <HubClient sanityResources={resources} />
}

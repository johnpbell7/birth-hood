import type { Metadata } from 'next'
import HubClient from './HubClient'

export const metadata: Metadata = {
  title: 'Client Hub',
  description: 'Password-protected resource library for birth-hood clients.',
  robots: { index: false, follow: false },
}

// The files are not fetched here, so none of them are in the page: HubClient asks /api/hub for them after the password
export default function HubPage() {
  return <HubClient />
}

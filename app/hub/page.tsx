import type { Metadata } from 'next'
import HubClient from './HubClient'

export const metadata: Metadata = {
  title: 'Client Hub',
  description: 'Password-protected resource library for birth-hood clients.',
  robots: { index: false, follow: false },
}

export default function HubPage() {
  return <HubClient />
}

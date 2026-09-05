import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  // 301 redirects from the old Wix URLs to the new structure, so existing
  // Google rankings and inbound links carry over when the domain moves to Vercel.
  // (Individual old /post/<slug> blog URLs should be mapped once we have the list.)
  async redirects() {
    return [
      { source: '/birthdoula', destination: '/birth-doula', permanent: true },
      { source: '/virtualdoula', destination: '/virtual-doula', permanent: true },
      { source: '/postnataldoula', destination: '/postnatal-doula', permanent: true },
      { source: '/aboutleanne', destination: '/meet-leanne', permanent: true },
      { source: '/faq-s', destination: '/faq', permanent: true },
      // The doula feedback page's content now lives on /reviews.
      { source: '/doula-feedback', destination: '/reviews', permanent: true },
      { source: '/t-c-s', destination: '/terms', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default nextConfig

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      // Instagram grid — Behold's cached copies (Instagram's own URLs expire).
      { protocol: 'https', hostname: 'behold.pictures' },
      { protocol: 'https', hostname: 'cdn2.behold.pictures' },
      { protocol: 'https', hostname: '**.cdninstagram.com' },
    ],
  },
  // 301 redirects from the old Wix URLs, so Google rankings and inbound links
  // carry over when the domain moves off Wix. Sources were taken from the live
  // Wix sitemaps (pages-sitemap.xml and blog-posts-sitemap.xml), not guessed,
  // so this covers every URL Wix currently publishes.
  async redirects() {
    return [
      // ── Pages ────────────────────────────────────────────────────────────
      { source: '/birthdoula', destination: '/birth-doula', permanent: true },
      { source: '/virtualdoula', destination: '/virtual-doula', permanent: true },
      { source: '/postnataldoula', destination: '/postnatal-doula', permanent: true },
      { source: '/aboutleanne', destination: '/meet-leanne', permanent: true },
      { source: '/birthtrauma', destination: '/birth-trauma', permanent: true },
      { source: '/doulapodcast', destination: '/podcast', permanent: true },
      { source: '/sessionsoutline', destination: '/session-outlines', permanent: true },
      { source: '/faq-s', destination: '/faq', permanent: true },
      { source: '/t-c-s', destination: '/terms', permanent: true },
      // Wix spells this without a hyphen; keep both so neither 404s.
      { source: '/doulafeedback', destination: '/reviews', permanent: true },
      { source: '/doula-feedback', destination: '/reviews', permanent: true },

      // ── Blog posts ───────────────────────────────────────────────────────
      // Wix served these under /post/<long-slug>; ours are shorter.
      {
        source: '/post/postpartum-haemorrhage-pph-what-do-you-actually-need-to-know',
        destination: '/blog/postpartum-haemorrhage-pph',
        permanent: true,
      },
      {
        source: '/post/what-the-f-is-hypnobirthing-anyway',
        destination: '/blog/what-is-hypnobirthing',
        permanent: true,
      },
      {
        source: '/post/wtf-is-a-doula-and-why-might-you-consider-one',
        destination: '/blog/wtf-is-a-doula',
        permanent: true,
      },
      {
        source: '/post/hormones-and-biiirrrtttthhhh',
        destination: '/blog/hormones-and-birth',
        permanent: true,
      },
      {
        source: '/post/postpartum-affirmations',
        destination: '/blog/postpartum-affirmations',
        permanent: true,
      },
      // Anything else under /post/ lands on the blog index rather than a 404.
      { source: '/post/:slug', destination: '/blog', permanent: true },
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

import Image from 'next/image'
import type { InstagramPost } from '@/lib/instagram'

const STATIC_FALLBACK = [
  { src: '/images/leanne-portrait.jpg', alt: 'Leanne — @birthhooduk', pos: 'center top' },
  { src: '/images/hypnobirthing-class.jpg', alt: 'Hypnobirthing class — @birthhooduk', pos: 'center' },
  { src: '/images/doula-support.jpg', alt: 'Doula support — @birthhooduk', pos: 'center' },
  { src: '/images/yoga-class.jpg', alt: 'Prenatal yoga — @birthhooduk', pos: 'center' },
  { src: '/images/leanne-speaking.jpg', alt: 'Leanne speaking — @birthhooduk', pos: 'center top' },
  { src: '/images/hypnobirthing-class.jpg', alt: 'Supporting families — @birthhooduk', pos: 'center 30%' },
]

export default function InstagramGrid({ posts }: { posts: InstagramPost[] }) {
  if (posts.length === 0) {
    return (
      <div className="insta-grid-v2">
        {STATIC_FALLBACK.map((item, i) => (
          <a key={i} href="https://www.instagram.com/birthhooduk" target="_blank" rel="noopener noreferrer" className="insta-tile">
            <Image src={item.src} alt={item.alt} fill style={{ objectFit: 'cover', objectPosition: item.pos }} />
            <div className="insta-tile-overlay">
              <span className="insta-tile-cta">View on Instagram</span>
            </div>
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className="insta-grid-v2">
      {posts.map((post) => {
        const imgSrc = post.media_type === 'VIDEO' ? (post.thumbnail_url ?? '') : post.media_url
        return (
          <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer" className="insta-tile">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgSrc} alt={post.caption?.slice(0, 80) ?? '@birthhooduk'} className="insta-tile-img" />
            <div className="insta-tile-overlay">
              <span className="insta-tile-cta">View on Instagram</span>
            </div>
          </a>
        )
      })}
    </div>
  )
}

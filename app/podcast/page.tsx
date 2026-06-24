import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import { cmsOrStatic } from '@/lib/cms-page'

export const metadata: Metadata = {
  title: 'Dou-La-La the Birthy Podcast',
  description: 'Dou-La-La, the birthy podcast. Two doulas in honest conversation on birth, busting myths and sharing real talk to help you feel informed and empowered.',
}

const episodes = [
  {
    number: 'Coming soon',
    title: 'New episodes dropping soon',
    desc: 'Subscribe on your favourite podcast platform so you never miss an episode.',
  },
]

function PodcastPageStatic() {
  return (
    <>
      <PageHero
        eyebrow="Honest birth talk"
        title={<>Dou-La-La the <em>Birthy Podcast</em></>}
        subtitle="Two doulas in conversation giving you honest birth talk, myth busting and just generally having a good chat!"
        img1={{ src: '/images/leanne-portrait.jpg', alt: 'Leanne' }}
        img2={{ src: '/images/leanne-speaking.jpg', alt: 'Leanne speaking' }}
        actions={
          <p style={{ fontSize: '0.95rem', color: 'var(--grey-mid)', fontWeight: 300 }}>
            Search <strong>&ldquo;Dou-La-La&rdquo;</strong> on your favourite podcast platform
          </p>
        }
      />

      <MarqueeStrip />

      {/* ABOUT THE PODCAST */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="prose">
              <div className="section-label">About the show</div>
              <h2>Real talk about birth, pregnancy and beyond</h2>
              <p>
                Join me and Meg (Birth Evolution) as we explore all areas of pregnancy,
                birth and the postnatal period. This is honest, unfiltered conversation from two
                doulas who have been in the room, heard the stories and know what really matters.
              </p>
              <p>
                So let&apos;s deep dive into birth — bringing you knowledge, experience and tips
                in a way that supports you, whether you are pregnant, a birth partner or just a
                birth nerd like us!
              </p>
              <p>
                Expect myth-busting, real stories, evidence-based insights and the kind of
                conversation you wish you could have with your midwife but never quite find the
                time for. No topic is off limits.
              </p>
            </div>

            <div>
              <div className="stat-grid">
                <div className="stat-card">
                  <div className="stat-number">2</div>
                  <div className="stat-label">Doulas — me &amp; Meg from Birth Evolution</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">Real</div>
                  <div className="stat-label">Honest, unfiltered conversations about birth</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">Free</div>
                  <div className="stat-label">Available on all major podcast platforms</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">All</div>
                  <div className="stat-label">For parents, partners and birth nerds alike</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LISTEN ON */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <div className="section-label">Listen on</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '3rem', lineHeight: 1.1 }}>
            Find us on your favourite <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>platform</em>
          </h2>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {[
              {
                platform: 'Spotify',
                desc: 'Open Spotify and search "Dou-La-La" to find and subscribe to the podcast.',
                icon: '♫',
              },
              {
                platform: 'Apple Podcasts',
                desc: 'Open Apple Podcasts and search "Dou-La-La" to subscribe and get notified when new episodes drop.',
                icon: '◎',
              },
              {
                platform: 'Amazon Music',
                desc: 'Search "Dou-La-La" on Amazon Music or Audible to listen wherever you are.',
                icon: '◈',
              },
            ].map(item => (
              <div
                key={item.platform}
                className="card"
                style={{ color: 'inherit', display: 'block' }}
              >
                <div style={{
                  width: '44px', height: '44px', background: 'var(--pink-pale)',
                  border: '1px solid rgba(254,127,204,0.3)', borderRadius: '3px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem', color: 'var(--pink-deep)', marginBottom: '1.2rem',
                  fontFamily: 'serif',
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.15rem', fontWeight: 500, marginBottom: '0.6rem' }}>
                  {item.platform}
                </h3>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.87rem', lineHeight: 1.75, fontWeight: 300, marginBottom: '1rem' }}>
                  {item.desc}
                </p>
                <span style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--grey-light)' }}>
                  Search &ldquo;Dou-La-La&rdquo;
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS WE COVER */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-label">What we talk about</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '2.5rem', lineHeight: 1.1 }}>
            Topics we <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>explore</em>
          </h2>
          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {[
              { label: 'Pregnancy & birth', desc: 'Evidence-based information on all things pregnancy, labour and birth — without the fear.' },
              { label: 'Birth myth-busting', desc: 'We call out the myths, misinformation and outdated advice that does more harm than good.' },
              { label: 'Postnatal period', desc: 'The fourth trimester — what no one tells you about life after birth and how to get the support you deserve.' },
              { label: 'Birth stories', desc: 'Real stories from real people — every type of birth, told with honesty and compassion.' },
            ].map(item => (
              <div key={item.label} className="card card-pink">
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                  {item.label}
                </h3>
                <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Subscribe so you never miss an episode"
        body="Search 'Dou-La-La' on Spotify, Apple Podcasts or Amazon Music — honest birth talk, myth busting and real conversations about pregnancy and beyond."
        href="/podcast"
        label="How to find the podcast"
      />
    </>
  )
}

export default async function PodcastPage() {
  return cmsOrStatic('podcast', <PodcastPageStatic />)
}

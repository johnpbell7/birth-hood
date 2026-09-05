import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MarqueeStrip from '@/components/MarqueeStrip'
import CmsPageHero from '@/components/CmsPageHero'
import CtaBand from '@/components/CtaBand'
import AreasCovered from '@/components/AreasCovered'
import { cmsOrStatic } from '@/lib/cms-page'

// Hero wording/photos come from Sanity when set, so pick up edits within a minute.
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Meet Leanne — Doula & Hypnobirthing Teacher',
  description:
    'Leanne is a birth doula, hypnobirthing teacher and pregnancy yoga teacher in NW Leicestershire. Mum of two, 3 Step Rewind practitioner, 5.0 on Google.',
}

function MeetLeannePageStatic() {
  return (
    <>
      <CmsPageHero
        page="meet-leanne"
        title={<>Meet <em>Leanne</em></>}
        subtitle="I'm Leanne (DipHb) — a mum of two Hypnobirth babies and a badass birth nerd! Hypnobirthing teacher, birth doula, Pregnancy & Postnatal yoga teacher, and 3 Step Rewind practitioner, proudly based in NW Leicestershire."
        img1={{ src: '/images/leanne-doorway-5.jpg', alt: 'Leanne' }}
        img2={{ src: '/images/leanne-van-14.jpg', alt: 'On the road' }}
      />

      <MarqueeStrip />

      {/* MAIN CONTENT */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>

            {/* Photo */}
            <div>
              <div className="about-photo-frame" style={{ maxWidth: '480px', marginBottom: '2rem' }}>
                <Image src="/images/leanne-peace-111.jpg" alt="Leanne — birth-hood founder and birth educator" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
              </div>

              {/* Quote block */}
              <blockquote style={{
                borderLeft: '3px solid var(--pink)',
                paddingLeft: '1.5rem',
                margin: '2rem 0',
              }}>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.15rem', fontStyle: 'italic', lineHeight: 1.7, color: 'var(--black)', marginBottom: '0.8rem' }}>
                  &ldquo;Leanne is an amazing woman and she really is the best at her job.&rdquo;
                </p>
                <cite style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--pink-deep)', fontStyle: 'normal' }}>
                  — Stephanie, birth doula client
                </cite>
              </blockquote>
            </div>

            {/* Story */}
            <div>

              <div className="prose">
                <h2>Hi, I&apos;m your doula!</h2>
                <p>
                  I&apos;m Leanne (DipHb), I am a mum of two Hypnobirth babies and a badass birth nerd! I am a
                  proud no-nonsense hypnobirthing teacher, doula, Pregnancy/Postnatal yoga teacher and a
                  3 Step Rewind practitioner.
                </p>
                <p>
                  Born and raised in Leicestershire, I now reside in NW Leicestershire with my 2 daughters,
                  my dogs Ron and Delphi and my cat Albus!
                </p>
                <p>
                  My core values are that everyone is entitled to person centred care, immeasurable support
                  and education that means they can feel in control throughout their perinatal experiences.
                </p>

                <h2>Why I chose Hypnobirthing?</h2>
                <p>
                  I first became interested in hypnobirthing when I started to research birth stories when I
                  was expecting my first baby and found how positive it could be, much different to the
                  scarefest I&apos;d been treated to before this from everyone around me. I found a course, which
                  I left feeling extremely informed, calm and confident about my birth. I found my passion,
                  something I wanted others to feel, the &lsquo;I CAN DO THIS&rsquo; moment.
                </p>
                <p>
                  I am a HUGE advocate for Hypnobirthing and want to help enable parents to have the birth
                  they want, being aware of their choices through delivering a full antenatal programme.
                </p>
                <p>
                  Following working with 100&apos;s of families, I was regularly approached to attend births,
                  which was something I&apos;d always dreamt of. This led me to following my dreams to become a
                  doula and now I absolutely adore what I do every day!
                </p>
                <p>
                  I am so proud to be rated as your 5 STAR Doula — by welcoming me as your Doula, I am a
                  part of your birth team, to be on your side and by your side.
                </p>
              </div>

              {/* Credentials */}
              <div style={{ marginTop: '2.5rem' }}>
                <div className="credentials" style={{ marginTop: '1rem' }}>
                  <div className="credential">
                    <span className="credential-dot" />
                    Hypnobirthing — KGHypnobirthing 2019 DipHb
                  </div>
                  <div className="credential">
                    <span className="credential-dot" />
                    The Birth Uprising conversion 2020
                  </div>
                  <div className="credential">
                    <span className="credential-dot" />
                    Doula — Badass Birth 2021
                  </div>
                  <div className="credential">
                    <span className="credential-dot" />
                    3 Step Rewind (Birth Trauma) — Ruth Olayinka 2021
                  </div>
                  <div className="credential">
                    <span className="credential-dot" />
                    LGBT+ Competency trained — The Queer Birth Club (AJ Silver) 2021
                  </div>
                  <div className="credential">
                    <span className="credential-dot" />
                    Advocacy training — Illy Morrison 2021
                  </div>
                  <div className="credential">
                    <span className="credential-dot" />
                    Birth Biomechanics — Molly O&apos;Brien 2022
                  </div>
                  <div className="credential">
                    <span className="credential-dot" />
                    85hr Pregnancy/Postnatal Yoga teaching — Sally Parkes 2022
                  </div>
                  <div className="credential">
                    <span className="credential-dot" />
                    Doula Enhancement — TBU Academy 2023
                  </div>
                  <div className="credential">
                    <span className="credential-dot" />
                    Currently completing: Baby Massage, Baby Reflexology & Toddler Yoga
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ME */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '2.5rem', lineHeight: 1.1 }}>
            What you <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>get with me</em>
          </h2>
          <div className="grid-2" style={{ gap: '1rem', marginBottom: '3rem', alignItems: 'stretch' }}>
            {[
              'A fully unadulterated and interactive hypnobirthing antenatal course, from a birth nerd and advocate for empowered birth.',
              'Full 121 support throughout the course pregnancy and 4th trimester, always on the end of a text or call!',
              'Research and evidenced based knowledge specific to your needs and wishes.',
              'Non-judgemental support and a realistic approach that\'s tailored to you.',
              'A fierce advocate for you, if or when you need me to. You\'ll have me in your corner.',
              'I am someone who has used the tools and techniques and has a huge support network of badass birth workers, so if there is something I don\'t know, I sure will do soon enough!',
              'As a doula and someone who is part of a collective of birth workers, you won\'t get better support elsewhere.',
              'I aim to be fully inclusive, and that means all births, all people!',
              'If you are struggling to access the course, due to finances, or are in a marginalised group, please contact me to see how I can support you!',
              'Birth is the one day in your life you will remember — you deserve to have the best experience possible and I truly believe that investing in my course will bring you SO much closer to the birth you deserve.',
            ].map((point, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.25rem 1.5rem' }}>
                <span style={{
                  flexShrink: 0,
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                  background: 'var(--pink)',
                  color: '#fff',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '0.1rem',
                }}>
                  {i + 1}
                </span>
                <p style={{ margin: 0, lineHeight: 1.7, color: 'var(--grey-mid)', fontSize: '0.9rem', fontWeight: 300 }}>
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* You'll also get */}
          <div className="grid-2" style={{ gap: '1.5rem' }}>
            <div className="card card-pink">
              <p style={{ margin: 0, lineHeight: 1.75, color: 'var(--grey-mid)', fontSize: '0.9rem', fontWeight: 300 }}>
                All resources, MP3&apos;s, parent handbook, birth plan, postnatal plan, printable affirmations and more.
              </p>
            </div>
            <div className="card card-pink">
              <p style={{ margin: 0, lineHeight: 1.75, color: 'var(--grey-mid)', fontSize: '0.9rem', fontWeight: 300 }}>
                Amazing 4th trimester bonus videos, including breastfeeding, sling use and baby massage and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA SECTION */}
      <section className="section-pad">
        <div className="wrap">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '2.5rem', lineHeight: 1.1 }}>
            Media & <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>appearances</em>
          </h2>
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            <div className="card card-pink">
              <div className="section-label" style={{ marginBottom: '0.8rem' }}>BBC Radio Leicester</div>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300 }}>
                Featured discussing hypnobirthing techniques and the importance of birth preparation for
                expectant parents across the Midlands.
              </p>
            </div>
            <div className="card card-pink">
              <div className="section-label" style={{ marginBottom: '0.8rem' }}>Local press</div>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300 }}>
                Regular contributor to local parenting publications and community events across
                Leicester and the wider Midlands region.
              </p>
            </div>
            <div className="card card-pink">
              <div className="section-label" style={{ marginBottom: '0.8rem' }}>Community events</div>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300 }}>
                Speaker at pregnancy fairs, NCT events and maternity unit workshops — spreading the
                message about positive birth preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AreasCovered />

      <CtaBand
        heading="Ready to work together?"
        body="Book a free 30-minute consultation and let's chat about how I can support you on your birth journey."
        href="https://calendly.com/birthhood/free-consultation"
        label="Book Free Consultation"
      />
    </>
  )
}

export default async function MeetLeannePage() {
  return cmsOrStatic('meet-leanne', <MeetLeannePageStatic />)
}

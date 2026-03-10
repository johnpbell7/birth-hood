import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import FaqAccordion from '@/components/FaqAccordion'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'FAQ',
}

const generalFaqs = [
  {
    q: 'What areas do you cover?',
    a: 'I am based in Leicester and primarily serve Leicester and the wider Midlands region for in-person services (hypnobirthing, yoga, birth doula). I also offer online services — hypnobirthing courses, virtual doula support and consultations — to clients anywhere in the UK and internationally.',
  },
  {
    q: 'How do I book?',
    a: 'The easiest way to get started is to book a free 30-minute consultation via Calendly. This is a no-obligation, friendly chat where we can discuss your needs, answer any questions and figure out the right support for you. You can book at calendly.com/birthhood.',
  },
  {
    q: 'Do you work with all types of families?',
    a: 'Absolutely. I work with all pregnancies, all birth choices and all types of families — including LGBTQ+ families, solo parents and those with complex pregnancies. Everyone is welcome and will receive the same warmth and care.',
  },
  {
    q: 'I\'m expecting twins — can you still help?',
    a: 'Yes. I have experience supporting twin pregnancies and can adapt all services accordingly. Twin pregnancies often have a different pathway through the maternity system, and my knowledge of birth choices and rights is particularly valuable in these situations.',
  },
]

const hypnobirthingFaqs = [
  {
    q: 'When should I start hypnobirthing?',
    a: 'The ideal time to start is between 24 and 28 weeks, as this gives you plenty of time to practise the techniques. However, it is never too late to start — even at 36+ weeks you will gain valuable knowledge and tools. Some people also choose to start early in pregnancy.',
  },
  {
    q: 'Does hypnobirthing work for caesarean births?',
    a: 'Yes, absolutely. Hypnobirthing is highly effective for planned and unplanned caesarean births. The breathing techniques, relaxation skills and positive mindset tools all translate directly to the theatre environment. Many of my clients specifically choose hypnobirthing in preparation for a caesarean.',
  },
  {
    q: 'Can I still have an epidural if I do hypnobirthing?',
    a: 'Yes, 100%. Hypnobirthing is not about prescribing a particular type of birth. You can use hypnobirthing alongside any pain relief, including an epidural. In fact, the techniques are useful for managing anxiety even if you plan to use all available pain relief — and the knowledge helps you make truly informed decisions.',
  },
  {
    q: 'Does my birth partner need to attend?',
    a: 'It\'s strongly recommended but not essential. Birth partners play an active role in hypnobirthing and learn specific techniques to support you. However, if your partner cannot attend some sessions, I can record sessions or provide detailed notes. Solo parents are absolutely welcome and I tailor the content accordingly.',
  },
  {
    q: 'Is hypnobirthing evidence-based?',
    a: 'Yes. The KGHypnobirthing method is grounded in evidence from birth physiology, psychology and neuroscience. Cochrane Review research consistently shows that continuous labour support, calm birthing environments and breathing techniques lead to measurably better outcomes for birthing people and babies.',
  },
  {
    q: 'Is hypnobirthing suitable for first-time parents?',
    a: 'It\'s perfect for first-time parents. Hypnobirthing gives you a thorough, evidence-based education in what to expect from birth — alongside the practical tools to manage it calmly. Many of my clients who come back for a second baby say they wish they\'d had this for their first birth.',
  },
]

const doulaFaqs = [
  {
    q: 'What does a birth doula do?',
    a: 'A birth doula provides continuous non-medical support — physical, emotional and informational — throughout your birth experience. This includes antenatal preparation, being present throughout labour and birth, and providing postnatal support and debrief. A doula\'s sole focus is on you and your wellbeing.',
  },
  {
    q: 'Will you definitely be at my birth?',
    a: 'I am on call for you from 38 weeks of pregnancy and will be there for your birth. In the very rare event that I am unable to attend due to illness or emergency, I have a network of experienced backup doulas who are briefed on your wishes and available to step in.',
  },
  {
    q: 'What if my labour is very fast?',
    a: 'I will always do everything I can to be with you, and I live within the Leicester area so can typically arrive quickly. In the event your birth is very fast, I will support you and your partner by phone until I arrive. The breathing and relaxation techniques you\'ll have practised will be invaluable in this situation.',
  },
  {
    q: 'Does having a doula mean my midwife will be less involved?',
    a: 'Not at all. A doula is complementary to your midwife and medical team — never a replacement. I work alongside your care team and help you communicate your wishes effectively. Most midwives welcome the presence of a doula and find it helpful.',
  },
]

const yogaFaqs = [
  {
    q: 'Is prenatal yoga safe throughout pregnancy?',
    a: 'Yes — my classes are specifically designed for pregnant bodies at all stages and are safe from the first trimester through to birth. All poses are adapted for pregnancy, modifications are always offered, and you are encouraged to move at your own pace. If you have complications or concerns, always check with your midwife or GP first.',
  },
  {
    q: 'Do I need prior yoga experience?',
    a: 'Absolutely not. The classes are suitable for complete beginners. Everything is explained clearly and from scratch. Your flexibility or fitness level doesn\'t matter at all — the classes are about moving mindfully in a way that is comfortable and nourishing for you.',
  },
  {
    q: 'How often should I come to class?',
    a: 'Once a week is wonderful — many clients find it becomes a lovely anchor in their pregnancy week. However, there is no obligation to attend every week. Drop-in passes and block bookings are available so you can come as often as suits your schedule.',
  },
]

const paymentFaqs = [
  {
    q: 'Are payment plans available?',
    a: 'Yes. I am committed to making birth support as accessible as possible. Payment plans can be arranged for all services — usually split into two or three instalments. Please discuss this at your free consultation and we will find something that works for you.',
  },
  {
    q: 'Is a deposit required to secure my place?',
    a: 'Yes. A deposit of 50% is required to secure your place on any course or service. The balance is due at your first session. For doula services, the balance is due at the start of the on-call period (around 38 weeks).',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Please see the full cancellation policy on the Terms & Conditions page. In brief: cancellations made 14 or more days before the start date receive a full refund; 7–14 days receive a 50% refund; under 7 days are non-refundable. Exceptions may be made in exceptional circumstances — please get in touch.',
  },
  {
    q: 'Do you offer any discounts?',
    a: 'Discounts are occasionally available for NHS workers, Doula UK bursary recipients and for those booking multiple services. Please ask at your consultation.',
  },
]

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Got questions?"
        title={<>Frequently Asked <em>Questions</em></>}
        subtitle="Everything you need to know about hypnobirthing, doula support, yoga and working with Leanne."
      />

      <MarqueeStrip />

      <section className="section-pad">
        <div className="wrap" style={{ maxWidth: '820px' }}>

          {/* GENERAL */}
          <div style={{ marginBottom: '4rem' }}>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>General</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', lineHeight: 1.1 }}>
              General questions
            </h2>
            <FaqAccordion items={generalFaqs} />
          </div>

          {/* HYPNOBIRTHING */}
          <div style={{ marginBottom: '4rem' }}>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>Hypnobirthing</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', lineHeight: 1.1 }}>
              Hypnobirthing questions
            </h2>
            <FaqAccordion items={hypnobirthingFaqs} />
          </div>

          {/* DOULA */}
          <div style={{ marginBottom: '4rem' }}>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>Doula support</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', lineHeight: 1.1 }}>
              Doula questions
            </h2>
            <FaqAccordion items={doulaFaqs} />
          </div>

          {/* YOGA */}
          <div style={{ marginBottom: '4rem' }}>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>Prenatal yoga</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', lineHeight: 1.1 }}>
              Yoga questions
            </h2>
            <FaqAccordion items={yogaFaqs} />
          </div>

          {/* PAYMENT */}
          <div style={{ marginBottom: '2rem' }}>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>Booking & payment</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', lineHeight: 1.1 }}>
              Booking & payment
            </h2>
            <FaqAccordion items={paymentFaqs} />
          </div>

          {/* STILL HAVE QUESTIONS */}
          <div className="card card-pink" style={{ marginTop: '3rem', textAlign: 'center', padding: '2.5rem' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.8rem' }}>
              Still have questions?
            </h3>
            <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem', maxWidth: '450px', margin: '0 auto 1.5rem' }}>
              Book a free 30-minute consultation and ask me anything. No obligation, no pressure —
              just a friendly chat.
            </p>
            <a
              href="https://calendly.com/birthhood"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to get started?"
        body="Book your free consultation and let's find the right support for your birth journey."
        href="https://calendly.com/birthhood"
        label="Book Free Consultation"
      />
    </>
  )
}

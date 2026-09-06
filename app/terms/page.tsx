import type { Metadata } from 'next'
import Link from 'next/link'
import CmsPageHero from '@/components/CmsPageHero'
import { cmsOrStatic } from '@/lib/cms-page'

// Hero wording/photos come from Sanity when set, so pick up edits within a minute.
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and conditions for booking hypnobirthing, doula and yoga services with birth-hood, covering payment, deposits, cancellations and what to expect.',
}

function TermsPageStatic() {
  return (
    <>
      <CmsPageHero
        page="terms"
        title={<>Terms & <em>Conditions</em></>}
        subtitle="Please read these terms carefully before booking any services with birth-hood."
        img1={{ src: '/images/leanne-doorway-5.jpg', alt: 'Leanne' }}
        img2={{ src: '/images/relaxation-oils-69.jpg', alt: 'Relaxation' }}
      />

      <section className="section-pad">
        <div className="wrap" style={{ maxWidth: '780px' }}>

          <div className="prose">

            <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', marginBottom: '2rem', fontStyle: 'italic' }}>
              These terms apply across the birth-hood services and products offered through this
              website — doula support, hypnobirthing, yoga and digital resources. The exact package
              or class booking will always set out any additional service-specific information.
            </p>

            <h2>1. About these terms</h2>
            <p>
              birth-hood is an independent perinatal education, doula and wellbeing service run by
              Leanne. These terms explain how bookings, payments, cancellations, classes, courses,
              digital resources and support work.
            </p>

            <h2>2. Booking &amp; contract</h2>
            <p>
              A booking is confirmed when birth-hood has accepted the booking and the required
              payment or deposit has been received. For services with a separate client agreement,
              that agreement forms part of the contract and the package-specific wording will apply
              to the booking.
            </p>
            <p>
              You will be given a reasonable opportunity to read the relevant terms before
              committing to a booking. Nothing in these terms removes or limits your statutory
              consumer rights.
            </p>

            <h2>3. Payments</h2>
            <p>
              Prices are those shown at the time of booking unless otherwise agreed in writing.
              Payment plans, deposits and balance dates will be stated on the relevant booking page
              or agreement.
            </p>
            <p>
              For doula packages, the package fee covers the professional service as a whole,
              including preparation, expertise, communication, resources, reserved availability,
              on-call commitment and support before, during and after birth.
            </p>

            <h2>4. Doula services</h2>
            <p>
              birth-hood provides non-clinical emotional, physical, practical and informational
              support. I do not diagnose, prescribe, provide clinical monitoring, interpret clinical
              results as a clinician, perform clinical procedures or replace your maternity or
              healthcare team.
            </p>
            <p>
              All doula packages include support through changes of plan, including induction,
              transfer, assisted birth and caesarean birth. Hospital and theatre access is always
              subject to local policy, clinical circumstances, infection-control requirements and
              capacity.
            </p>
            <p>
              During a formal on-call period I will make every effort to attend labour and birth.
              Outside a formal on-call period I will make reasonable efforts to attend if requested.
              Attendance cannot be guaranteed in every circumstance, including rapid or premature
              labour, emergency, illness, another birth, severe travel disruption, hospital
              restrictions or other circumstances outside my reasonable control.
            </p>

            <h2>5. Travel &amp; attendance</h2>
            <p>
              When you contact me in labour, we will discuss when you would like me to come and I
              will give you an estimated arrival time. Travel time depends on distance, traffic,
              road conditions, my location, childcare or other arrangements and circumstances
              outside my reasonable control. As a general guide, please allow a minimum of 60
              minutes if you are local to me and 90 minutes or more if you are further away. This is
              an estimate, not a guaranteed arrival time.
            </p>
            <p>
              If I offer to attend and you tell me not yet, I will rely on that instruction until
              you contact me again. Rapid labour may mean I am unable to reach you before birth.
            </p>

            <h2>6. Hypnobirthing</h2>
            <p>
              Hypnobirthing is a birth-preparation and education service using evidence-informed
              education, breathing, relaxation, visualisation, affirmations, mindset work and
              practical coping tools. It is designed to help you feel informed, prepared, calm and
              more confident.
            </p>
            <p>
              Hypnobirthing does not guarantee a particular labour, birth method, pain level,
              clinical outcome or experience. Birth can change unexpectedly and the techniques
              taught are tools, not promises.
            </p>
            <p>
              Hypnobirthing does not replace antenatal care, medical advice, midwifery care or
              emergency care. If you have questions about whether a technique is suitable for you or
              your pregnancy, discuss this with your maternity or healthcare professional.
            </p>
            <p>
              Course materials, recordings, workbooks, MP3s, affirmations and digital resources
              supplied by birth-hood are for the purchasing participant&apos;s personal use unless
              otherwise agreed. They must not be copied, shared, resold, uploaded, distributed,
              recorded or reproduced without written permission.
            </p>

            <h2>7. Pregnancy yoga</h2>
            <p>
              Pregnancy yoga classes are movement, relaxation and birth-preparation classes designed
              for pregnancy. Classes may include yoga, breathing, relaxation, birth preparation
              themes, positioning and other pregnancy-appropriate activities.
            </p>
            <p>
              You are responsible for telling birth-hood about relevant health information,
              pregnancy complications, injuries, pain, changes in your pregnancy or any advice from
              your maternity or healthcare team that may affect your participation.
            </p>
            <p>
              You should work within your own comfort and ability and stop or modify an activity if
              it does not feel right. I may adapt, modify or stop an activity where I consider this
              appropriate.
            </p>
            <p>
              Pregnancy yoga is not medical treatment or individual clinical assessment. If you are
              unsure whether a class is suitable for you, seek advice from your maternity or
              healthcare professional before attending.
            </p>

            <h2>8. Parent &amp; baby yoga</h2>
            <p>
              Parent and baby yoga combines gentle postnatal movement, baby-appropriate activities,
              relaxation and social time. Suitability depends on your stage of recovery and your
              baby&apos;s age, development and individual circumstances.
            </p>
            <p>
              As a general guide, birth-hood&apos;s current parent and baby classes are intended for
              parents from around 6 weeks after an uncomplicated vaginal birth and around 12 weeks
              after caesarean or instrumental birth or significant tears, but individual recovery
              varies. Please get in touch before attending if you are unsure whether the class is
              suitable.
            </p>
            <p>
              You remain responsible for supervising your baby during the session and for following
              any medical or postnatal advice you have been given.
            </p>

            <h2>9. Class bookings, missed sessions &amp; changes</h2>
            <p>
              Class and course places are reserved for the person who booked them and are subject to
              the booking terms shown at the time of purchase. Missed sessions are not normally
              refundable or transferable unless the relevant booking terms say otherwise.
            </p>
            <p>
              If birth-hood has to cancel or materially change a class or course, I will offer an
              appropriate alternative where reasonably possible, such as a replacement session,
              transfer or refund for the affected service, depending on the circumstances.
            </p>
            <p>
              Where a course has already started, any refund or transfer will take account of
              sessions and resources already supplied and the circumstances of cancellation, subject
              to your statutory rights.
            </p>

            <h2>10. Digital products</h2>
            <p>
              Digital products such as MP3s, workbooks, guides, recordings and downloadable
              resources are supplied for personal use. Digital content will be supplied as described
              and subject to the statutory rights that apply to digital content.
            </p>
            <p>
              Where digital content is supplied immediately at your request before any applicable
              cancellation period has expired, the checkout process will explain the effect of that
              request and any applicable loss of cancellation rights.
            </p>

            <h2>11. Cancellation &amp; refunds</h2>
            <p>
              Cancellation terms will be stated clearly for the service or product you are buying.
              Where a cancellation charge applies, it is intended to reflect the service already
              provided, costs incurred and/or the reasonable loss caused by the cancellation rather
              than operate as a penalty.
            </p>
            <p>
              For doula packages, specific cancellation and reserved on-call terms are set out in
              the relevant client agreement. From 34 weeks, a package cancellation will normally
              require payment of the agreed package fee, subject to applicable consumer law and
              consideration of the services already provided, costs incurred, savings made and
              whether the booking can reasonably be replaced.
            </p>
            <p>
              Nothing in these terms prevents you exercising a statutory cancellation, refund or
              other consumer right where one applies.
            </p>

            <h2>12. Health, safety &amp; medical responsibility</h2>
            <p>
              birth-hood is not a medical service. You remain responsible for seeking appropriate
              medical or maternity care and for following urgent medical advice. birth-hood cannot
              be responsible for clinical decisions, clinical outcomes, complications, birth mode,
              hospital policy or the actions of healthcare providers.
            </p>
            <p>
              Nothing in these terms excludes or limits liability where doing so would be unlawful,
              including liability for death or personal injury caused by negligence.
            </p>

            <h2>13. Illness &amp; events outside my control</h2>
            <p>
              I may occasionally need to change or cancel a service because of illness, emergency,
              unsafe travel, venue problems, another birth, hospital restrictions or other
              circumstances outside my reasonable control. I will communicate as soon as reasonably
              possible and take reasonable steps to minimise the impact.
            </p>

            <h2>14. Intellectual property</h2>
            <p>
              birth-hood course materials, workbooks, guides, recordings, branding, written content
              and digital resources remain the intellectual property of birth-hood or the relevant
              rights holder. Your purchase gives you a personal licence to use the material for your
              own learning and preparation; it does not transfer ownership.
            </p>

            <h2>15. Privacy &amp; communication</h2>
            <p>
              Personal information will be handled in accordance with birth-hood&apos;s privacy
              information. Please use appropriate channels for confidential or sensitive information
              and understand that WhatsApp, email and similar platforms may have their own privacy
              and security limitations.
            </p>

            <h2>16. Complaints</h2>
            <p>
              If you are unhappy with a service, please get in touch first so that we can try to
              resolve the issue. I will consider complaints fairly and respond within a reasonable
              time.
            </p>

            <h2>17. Consumer rights</h2>
            <p>
              birth-hood services will be provided with reasonable care and skill. These terms are
              intended to be fair and transparent and nothing in them removes or limits statutory
              consumer rights or any liability that cannot legally be excluded.
            </p>

            <h2>18. Governing law</h2>
            <p>
              These terms are governed by the laws of England and Wales, subject to your statutory
              consumer rights.
            </p>

            <h2>19. Contact</h2>
            <p>
              If you have any questions about these terms, or would like to discuss anything
              relating to your booking, please{' '}
              <Link href="/contact" style={{ color: 'var(--pink-deep)' }}>get in touch</Link>.
              These terms may be updated from time to time; the current version will always be on
              this page.
            </p>

          </div>
        </div>
      </section>
    </>
  )
}

export default async function TermsPage() {
  return cmsOrStatic('terms', <TermsPageStatic />)
}

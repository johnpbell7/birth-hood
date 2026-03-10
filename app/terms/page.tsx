import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal stuff"
        title={<>Terms & <em>Conditions</em></>}
        subtitle="Please read these terms carefully before booking any services with birth-hood."
      />

      <section className="section-pad">
        <div className="wrap" style={{ maxWidth: '780px' }}>

          <div className="prose">

            <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', marginBottom: '2rem', fontStyle: 'italic' }}>
              Last updated: March 2026. These terms apply to all services provided by birth-hood
              (Leanne, birth educator and doula). By booking a service you agree to these terms.
            </p>

            {/* BOOKING & PAYMENT */}
            <h2>1. Booking & Payment</h2>

            <h3>1.1 Securing a place</h3>
            <p>
              All bookings are confirmed on receipt of a 50% non-refundable deposit. Your place
              is not secured until the deposit has been received. The remaining balance is due at
              the start of your first session (or, for doula services, at the beginning of the
              on-call period at 38 weeks of pregnancy).
            </p>

            <h3>1.2 Payment methods</h3>
            <p>
              Payment can be made by bank transfer (BACS). Payment details will be provided at
              the time of booking. Cheques are not accepted.
            </p>

            <h3>1.3 Payment plans</h3>
            <p>
              Payment plans are available on request. Please discuss this at your free consultation.
              Where a payment plan is agreed, all instalments must be made by the agreed dates.
              Failure to make an agreed payment may result in cancellation of your booking.
            </p>

            {/* CANCELLATION */}
            <h2>2. Cancellation Policy</h2>

            <h3>2.1 Cancellations by the client</h3>
            <p>
              The following cancellation policy applies to all services:
            </p>
            <ul>
              <li>
                <strong>14 or more days before the start date:</strong> Full refund of any amounts
                paid beyond the initial 50% deposit. The deposit itself is non-refundable.
              </li>
              <li>
                <strong>7–14 days before the start date:</strong> 50% refund of the total amount
                paid (including the deposit portion). The remaining 50% is retained.
              </li>
              <li>
                <strong>Under 7 days before the start date:</strong> No refund. The full amount
                is retained.
              </li>
            </ul>
            <p>
              Exceptions may be made at Leanne&apos;s discretion in cases of exceptional circumstances
              (such as pregnancy complications or bereavement). Please get in touch as soon as
              possible in these situations.
            </p>

            <h3>2.2 Cancellations by birth-hood</h3>
            <p>
              In the unlikely event that Leanne needs to cancel a session or service, every effort
              will be made to reschedule to a mutually convenient time. If rescheduling is not
              possible, a full refund of all amounts paid will be issued within 14 days.
            </p>

            <h3>2.3 Group courses — missed sessions</h3>
            <p>
              For group courses, missed sessions cannot be refunded or rescheduled individually.
              If you miss a session, Leanne will provide notes and recordings where possible, and
              you are welcome to ask questions via WhatsApp or at the next session.
            </p>

            {/* DOULA SERVICES */}
            <h2>3. Doula Services</h2>

            <h3>3.1 On-call period</h3>
            <p>
              Leanne is on call for birth doula clients from 38 weeks of pregnancy. She will make
              every reasonable effort to attend your birth. In the event that she is unable to
              attend due to illness, personal emergency or simultaneous births, she will arrange
              for a fully briefed backup doula to attend in her place.
            </p>

            <h3>3.2 Professional boundaries</h3>
            <p>
              As a birth doula, Leanne provides non-medical support only. She will not perform any
              clinical tasks, give medical advice, or make clinical decisions. All clinical care
              remains the responsibility of your midwife and medical team.
            </p>

            <h3>3.3 Photography and recording</h3>
            <p>
              Leanne will not take photographs or make recordings during your birth unless explicitly
              requested by you. Any photography or recording equipment must be agreed in advance
              with your midwife and birth unit.
            </p>

            {/* PRIVACY */}
            <h2>4. Privacy & Confidentiality</h2>

            <h3>4.1 Your information</h3>
            <p>
              All personal and medical information shared with Leanne is held in strict confidence.
              Information will not be shared with third parties without your explicit consent,
              except where required by law or where there is a serious safeguarding concern.
            </p>

            <h3>4.2 Data retention</h3>
            <p>
              Client records are retained for a period of 3 years following the end of the service,
              in line with professional guidance for birth workers. After this period, records are
              securely destroyed.
            </p>

            <h3>4.3 Testimonials and reviews</h3>
            <p>
              Any testimonials shared with birth-hood may be used in marketing materials (website,
              social media). Your name and location will only be shared with your explicit written
              permission. You may request removal of any testimonial at any time.
            </p>

            {/* PROFESSIONAL STANDARDS */}
            <h2>5. Professional Standards</h2>

            <h3>5.1 Qualifications and insurance</h3>
            <p>
              Leanne holds current professional indemnity and public liability insurance appropriate
              to all services provided. All qualifications are maintained and renewed in line with
              the requirements of the relevant certifying bodies (KGHypnobirthing, Doula UK,
              BirthLight).
            </p>

            <h3>5.2 Limitations of service</h3>
            <p>
              Birth-hood services are educational and supportive in nature. They are not medical
              services and are not a substitute for professional medical care. All clients are
              encouraged to maintain regular contact with their NHS midwife or care team throughout
              their pregnancy.
            </p>

            <h3>5.3 Scope of practice</h3>
            <p>
              Leanne works strictly within her scope of practice as defined by her training and
              professional bodies. She will always refer clients to appropriate specialist services
              — including NHS services, mental health support, or other specialists — when this is
              in the client&apos;s best interests.
            </p>

            {/* CONTACT */}
            <h2>6. Contact</h2>
            <p>
              If you have any questions about these terms, or if you would like to discuss anything
              relating to your booking, please get in touch via the Calendly booking form or
              through Instagram at @birth_hood.
            </p>
            <p>
              These terms were last updated in March 2026 and may be updated from time to time.
              The current version will always be available on this page.
            </p>

          </div>
        </div>
      </section>
    </>
  )
}

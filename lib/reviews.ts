// Google reviews for birth-hood, transcribed from the Google Business profile
// (5.0 from 69 reviews at time of writing). Text is verbatim apart from
// stripping emoji, tidying obvious typos and normalising dashes.
//
// `service` drives the label on the card. Reviews are ordered to mix services
// rather than by date, so the spread of work is visible at a glance.
//
// `when` is the relative age Google showed when each was transcribed, so it
// drifts over time — treat it as approximate.

export interface Review {
  name: string
  service: string
  when: string
  /** Blank line between paragraphs; the card splits on those. */
  text: string
}

export const reviews: Review[] = [
  {
    name: 'Rachel Stilliard',
    service: 'Birth Doula',
    when: '2 months ago',
    text: `I am so so grateful to Leanne for all her support as our doula — from the advocacy to the communication in the run up to birth, and being there on the day. Her advice was absolutely invaluable, and being our biggest cheerleader!

Honestly feeling on top of the world, everything went exactly how we hoped — after a 30 hour labour which ended in a traumatic cat 1 emergency caesarean with our first born (plus complications after birth meaning a 2 week hospital stay), I knew we needed some support to approach our second birth differently. I'd heard of doulas but didn't really know what they did — turns out they are absolutely invaluable to navigate the NHS systems and feel confident in the choices you make for your birth (and voice them/push back where needed!).

We decided we wanted a VBAC, and then after talking to Leanne realised a home birth would be our best chance of achieving this in a calm and familiar environment. This was outside of the NHS guidance, so we had to advocate for our choice with the consultant and midwives. We went post-dates but calmly waited for baby to come when they were ready — midwives were ok with this too! We went into labour naturally at 41+2 and had a very smooth labour, unmedicated except for some gas and air towards the end, and achieved our home birth VBAC! Absolutely wouldn't have had the confidence to do it without Leanne being there.`,
  },
  {
    name: 'Charly Young',
    service: 'Hypnobirthing',
    when: '1 month ago',
    text: `Leanne is an incredible hypnobirthing teacher. She was recommended to us by several midwives and we are so glad we had sessions with her. The information she was able to give us around birth, our options, what we can do to prepare has been invaluable. We really appreciated her unbiased, evidence based approach, which really allowed us to consider what our preferences are without judgement. Leanne was really flexible with shaping our 1-2-1 sessions around us and has been a great source of support as we navigate birth for the first time. Out of everything that we have spent money on whilst preparing for the arrival of our first baby, hypnobirthing with Leanne is without doubt the most valuable thing we have invested in — 100% recommend!`,
  },
  {
    name: 'Amy West',
    service: 'Pregnancy & Baby Yoga',
    when: '2 months ago',
    text: `I highly recommend Leanne's pregnancy yoga and parent and baby yoga classes. From pregnancy through to postpartum, I always felt supported, and Leanne's knowledge and warmth shine through in every session.

The parent and baby yoga classes were especially helpful when my husband went back to work. Having somewhere to go on a Monday morning really helped with the Sunday scaries and gave me a supportive community during those early months.

I've also made some wonderful friendships with like-minded mums that have lasted beyond the classes. I'm so grateful for the support, confidence and community Leanne helped create.

Thank you Leanne.`,
  },
  {
    name: 'Beka & Matt',
    service: 'Birth Doula · First baby, homebirth',
    when: '',
    text: `From my first contact with Leanne we just clicked, she's proudly inclusive and has experience in a wide range of pregnancies and birth situations. She supported me through my concern about fibroids, and gave me some brilliant yoga positions to try when my SPD started. She kept in contact through my pregnancy and made me feel like I really had amazing support whenever I needed it.

The prenatal sessions were so brilliant to run through my birth plans of a physiological homebirth. Leanne supported me every step of the way and made me feel so confident and excited for my homebirth. She also helped with some latch issues and supported our undisturbed golden hour. It felt so natural having her there and I didn't want her to leave!

Post natally, I felt really looked after by Leanne both in person & virtually. I can't recommend Leanne highly enough, she's a pro at end-to-end care and if you're reading this, book her!!!`,
  },
  {
    name: 'Bea & Duane',
    service: 'Birth Doula · Second baby, homebirth',
    when: '',
    text: `Just incredible! Leanne was amazing from the moment we booked her. She was always on hand for any questions and me and my husband loved our antenatal sessions with her and getting to know her, gaining knowledge. Postnatally she was excellent, always a message away and for our sessions.

However, I couldn't have done the birth without her. She protected my birth space perfectly and advocated for me many times. She was especially helpful when things didn't quite go to plan.`,
  },
  {
    name: 'Stephanie Love',
    service: 'Birth Doula',
    when: '2 months ago',
    text: `I'll be honest, I didn't think I wanted or needed a doula. I didn't really know what one was or what they did. My sister hired Leanne and I was lucky enough to be alongside her supporting my sister's birth. First hand, I saw how effortlessly she held space, supported, kept everything peaceful yet moving along. Her knowledge, persona and attitude towards birth and the female body is second to none.

Being 11 weeks pregnant at the time, and after seeing my sister's birth with the best care, I said to my husband that night, we are hiring Leanne, no questions asked. I saw what the power of having an incredible human like her does at a birth and I wanted that for us too.

Hands down the best investment we made was hiring Leanne. Her support in the run up and during my labour was incredible and knowing she was there in our corner meant we could relax and just get on with the experience of welcoming our baby. We would hire her over and over again. We were fortunate enough to have a relatively smooth, if not long birth, but knowing she was there should we have had to have any intervention put our minds at ease. If you're thinking about it — do it. Leanne is an amazing woman and she really is the best at her job. 100000% recommend, worth every single penny and more.`,
  },
  {
    name: 'Chris Peters',
    service: 'Hypnobirthing · Birth Partner',
    when: '6 months ago',
    text: `As a birth partner, I found Leanne's hypnobirthing classes extremely helpful in building my confidence and understanding of the birth process. The course was a brilliant educational resource overall, and Leanne's knowledge and experience really shone through. She was also able to tailor the sessions to our specific situation as it changed and developed, which made the support feel very personal and relevant. I would highly recommend her courses to any birth partner who wants to gain the tools to feel more confident, calm, and genuinely helpful as the big day approaches.`,
  },
  {
    name: 'Lucy Winter',
    service: 'Baby Yoga',
    when: '2 months ago',
    text: `I have taken my little girl along to Leanne's baby yoga classes for the past few months. Both of us have loved attending, and I would recommend the group to anyone. Leanne is such a supportive and kind person, and the classes are chilled, no pressure of any kind. I'm only disappointed that I did not discover her pregnancy yoga group beforehand! Thanks Leanne, you are obviously in the right job.`,
  },
  {
    name: 'Sweta Bartlett',
    service: 'Birth Doula',
    when: '4 months ago',
    text: `Leanne was lovely throughout the process and we cannot recommend her enough. She loves being a doula and puts everything into her role. She is a warm character who is easy to trust and get on with. She was there for us 100% as she promised she would be when we chose to work with her.

My husband and I were looking for someone to support us through the birth process of our second baby, especially as we do not have family close by and my first birth was traumatic.

When I first contacted Leanne, I wasn't 100% sure how she would be able to help to change our first experience, but when we had the initial phone call and discussed my first birth experience, she was able to demonstrate how she would have been able to help us to make better choices in the situation we were in. We really wished we had found her for our first birth.

I found communication with Leanne very easy throughout the process. Her packages are well designed for different needs and her contract is very straightforward and logical. The initial meeting to create a birth plan was very productive and really helped me to not worry about that. She also supported me throughout the pregnancy with some complications I had (low PAPP-A, gestational diabetes, transverse baby at 35 weeks).

During the birth, Leanne was readily available and communicated with me throughout. She also stepped in to communicate with the maternity team to advocate for our wishes. I really appreciate all of her advice as my second birth experience was perfect. I ended up having a spontaneous birth and felt so empowered by it.

We will be forever grateful to Leanne and highly recommend her to anyone as her knowledge and experience can help everyone to make the best decisions to have a positive birth experience.

Thank you Leanne! xx`,
  },
  {
    name: 'Alex Levitz',
    service: 'Private Hypnobirthing',
    when: '7 months ago',
    text: `The best! I didn't really know what I was looking for when I was searching for pregnancy support, but after I found Leanne, I knew I found my person! We went for the private hypnobirthing course and I would recommend it to anyone. She is so informative and personable, and we learned so much over the last few months. The knowledge both me and my partner have going into this next chapter is invaluable. Leanne not only held a great course, but also adjusted based on what our birth plan was and anything we wanted to focus on. I am now going in educated, excited, and confident for labour and I have Leanne to thank for facilitating that outlook. Note: Leanne is also a doula and proficient in all types of birth plans, and types that change last minute!!`,
  },
  {
    name: 'Elle Harty',
    service: 'Pregnancy Yoga',
    when: '2 months ago',
    text: `Recently started attending Pregnancy Yoga sessions, which are the most relaxing hour of my week. Leanne makes everyone feel comfortable and included by sharing her birth wisdom with us all, and answers anyone's questions and concerns. We then have a lovely, relaxing and informative yoga session. Couldn't recommend any more, for anyone at all post 12 weeks pregnant. Thank you birth-hood for creating space every week for baby & I to have something for us x`,
  },
  {
    name: 'Karima Ryder',
    service: 'Birth Doula',
    when: '2 months ago',
    text: `For the birth of our fourth child, Leanne was our doula. Her presence supported us massively and relieved the stress labours can bring with them. Guided by Leanne, my husband finally felt like he could support me better on the day. I felt seen, confident in the knowledge that she was looking out for me!

This home birth was by far the best birth I experienced and it definitely helped me heal from the traumatic first three which happened in hospital. My husband and I both highly recommend Leanne as a doula. You won't regret it!`,
  },
  {
    name: 'Becky Gadsby',
    service: 'Birth Doula',
    when: '7 months ago',
    text: `Having done hypnobirthing & yoga with Leanne for my first baby, as soon as I fell pregnant with my second I knew I wanted Leanne to support me at my homebirth and this was the best decision I made for my birth! Leanne is so knowledgeable and supportive and brings such a positive vibe to the birth space. I felt reassured both during my pregnancy, during labour and postnatal too!

I would definitely recommend Leanne, not just as a doula but also her pregnancy and baby yoga classes are great too, she is the best!`,
  },
  {
    name: 'Amy Storer',
    service: 'Yoga & Hypnobirthing',
    when: '2 months ago',
    text: `I've attended Leanne's pregnancy yoga, parent & baby yoga and also attended her hypnobirthing course with my husband. Leanne has been an absolute fountain of knowledge & expertise throughout and left us both feeling empowered for the birth. Her yoga classes are brilliant & I'm sad that we've moved beyond that stage in our baby journey now, but she fosters a real sense of community & we've continued to keep in touch with others that we met through the classes. I'd 100% recommend Leanne & hope to be using her services again in the future, thank you Leanne!`,
  },
  {
    name: 'Kimberley Sewell',
    service: 'Birth Doula',
    when: '3 months ago',
    text: `Having Leanne as my doula was 100% the best thing I could have done. I birthed my first child in February and it was the most amazing and the most empowering thing I've ever done! Leanne kept me calm when I needed it and was there to organise all the things I couldn't have managed at that time. Because of Leanne my beautiful baby girl was born into a calm environment and the birth couldn't have gone any better.

I also learned so much from her about birth biomechanics and this knowledge helped me so much when the time came.

Thank you Leanne.`,
  },
  {
    name: 'Lucy Fern',
    service: 'Pregnancy & Baby Yoga',
    when: '5 months ago',
    text: `I did pregnancy yoga and baby yoga with Leanne and both classes were brilliant. Leanne was so helpful with any worries I had during pregnancy yoga and I came out of the classes feeling so relaxed. The information provided at the start of the classes about anything pregnancy related was really helpful too. Me and my little boy have also loved doing the baby yoga classes, it's a really lovely class where you can just relax with your little one. The cakes at the end of the class are delicious too! Thank you so much Leanne.`,
  },
  {
    name: 'Klaudia Mody',
    service: 'Birth Doula',
    when: '11 months ago',
    text: `Leanne was the reason why my birth experience was a positive one. She's extremely knowledgeable, supportive, calm and not afraid to challenge medical decisions when needed. She'll stand by you and protect you above all. If I am pregnant again, the first thing I'll do is hiring her as my doula. In addition, she does great pregnancy yoga and baby yoga classes, absolutely recommend all her services.`,
  },
  {
    name: 'Rebecca Reed',
    service: 'Hypnobirthing',
    when: '6 months ago',
    text: `Leanne was wonderful helping us through our pregnancy. Offering knowledge with compassion to all of my husband's and my questions. Because of the confidence Leanne instilled in us, the birth from home could not have been a more positive experience. Thank you from all the family.`,
  },
  {
    name: 'Rosie Tuttle',
    service: 'Birth Doula',
    when: '1 year ago',
    text: `I booked with Leanne early on as I was keen to have a positive birth and with it being my first I felt I had no idea of what to expect. Leanne is not only a lovely, approachable, caring person she is so knowledgeable and passionate about what she does. She supported me throughout pregnancy with any questions or worries, I felt much more confident in my decisions because of her reassurance. When I went into labour I felt so relaxed knowing she was there, I got to experience the exact birth I dreamt of and I honestly believe it would have been very different without her. I'd 100% recommend Leanne to anyone and I will be coming back for any future pregnancies — she's amazing!`,
  },
  {
    name: 'Saffron Honey',
    service: 'Birth Doula',
    when: '1 year ago',
    text: `Leanne, wow. It has taken me a long time to come up with the words, as I gave birth nearly 6 weeks ago, and I still don't think I have the right words. What a great asset to my pregnancy journey and birth.

I think for me, the biggest strength of Leanne's was her calm aura and personality. Which was the perfect weapon to combat my nerves and anxiety throughout my pregnancy and birth. I booked her very early on based on recommendation and she supported me throughout my pregnancy. I fought the odds to have a HBAC, and turned to Leanne whenever consultants put fear in my head and made me second guess my choices, and Leanne put me right back in the game.

And through my birth, she was an amazing support. A great contribution to my success story together with the homebirth team, and I only have good things to say about her! She has a lot of knowledge and experience and the fact that she loves her job so much shows how great she is at it. If you're looking for a doula — definitely recommend!`,
  },
  {
    name: 'E McLaughlin',
    service: 'Full Doula Package',
    when: '2 years ago',
    text: `We would absolutely recommend Leanne's services! We used her full doula services. It was invaluable having Leanne throughout pregnancy and at our birth — she made us feel safe and relaxed. She's very friendly, easy to talk to and down to earth. We'd recommend her to anyone wanting to feel safe, supported, and relaxed for your pregnancy, birth and post natal. After our first conversation with Leanne, we instantly clicked and knew we had to have her. Whether it's your first pregnancy, second or third — you won't regret making a decision to invest in you and your birth!`,
  },
]

/** The three shown on the home page — one from each main service, chosen to be
    short enough for a card. Pulled from the list above so they stay in sync. */
export const featuredReviewNames = ['Klaudia Mody', 'Rebecca Reed', 'Elle Harty']

export const featuredReviews: Review[] = featuredReviewNames
  .map((name) => reviews.find((r) => r.name === name))
  .filter((r): r is Review => Boolean(r))

// Blog posts migrated from the previous Wix site (birth-hood.co.uk/blog).
// Text is Leanne's own, unchanged apart from whitespace and list formatting;
// images were pulled from the old site and re-optimised into /public/images/blog.
//
// These render whenever Sanity has no published posts, so the blog is never
// empty. Sanity posts, once published, take precedence.

export type BlockType = 'p' | 'h2' | 'li' | 'img' | 'ref'

export interface PostBlock {
  type: BlockType
  /** Text for p/h2/li/ref; image path for img */
  value: string
  /** Alt text — img only */
  alt?: string
}

export interface BlogPost {
  slug: string
  title: string
  category: string
  publishedAt: string
  readingTime: number
  excerpt: string
  coverImage?: string
  coverAlt?: string
  body: PostBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'postpartum-haemorrhage-pph',
    title: `Postpartum Haemorrhage (PPH) — what do you actually need to know?`,
    category: 'postnatal',
    publishedAt: '2024-06-13',
    readingTime: 6,
    excerpt: `It’s completely normal to bleed after birth — but how much is too much? What a postpartum haemorrhage actually is, what causes one, and the choices that lower your chances.`,
    coverImage: '/images/blog/birth-pool-fairy-lights.jpg',
    coverAlt: `An inflatable birth pool in a dimly lit room with fairy lights and a candle`,
    body: [
      { type: 'p', value: `Once you have your baby, your body will contract to expel the placenta and that signifies to the body that the baby has been born and your body will release some blood- this is as the uterine wall constricts. It is absolutely normal to bleed after giving birth!` },
      { type: 'p', value: `You’ll probably find that is it isn’t just blood that you lose, it’s a combination of mucus, blood and tissue from the uterus and typically lasts from a few days to 6 weeks, reducing over time. Some people experience heavier bleeding after birth however, and this is called a postpartum haemorrhage (PPH). This can be primary or secondary, so let’s look into a PPH a bit more!` },
      { type: 'h2', value: `What is a PPH?` },
      { type: 'p', value: `Primary PPH is categorised as blood loss over 500ml within the first 24 hours. It can be considered ‘minor’ (500-1000ml) or ‘major’ (over 1000ml). The bleeding may come from the uterus, cervix, vagina or labia (or often a combination).` },
      { type: 'img', value: '/images/blog/pph-blood-loss-estimate.jpg', alt: `Chart showing visual estimates of blood loss in an inflatable birth pool at 100ml, 300ml, 500ml and 1000ml` },
      { type: 'p', value: `The definition of PPH is quite subjective when you consider each person on an individual basis. The quantity is a visual estimation which is susceptible to human error, we often can’t accurately measure blood loss, and everyone differs in the way their body copes with levels of blood loss. It is more important to consider the effect of the loss; one person may have little effect after losing 1000ml but another may feel extremely unwell after losing less than 500ml. Strangely, it is not considered PPH in a Caesarean until 1000ml, further evidence why a numerical estimate lacks accuracy.` },
      { type: 'h2', value: `What causes a PPH?` },
      { type: 'p', value: `The most common reason is uterine atony which is when the uterus is not able to contract down after birth to close off blood vessels when the placenta has come away. This could be due to environmental factors interfering with oxytocin production, which is responsible for contractions, or because of drugs used during labour. It is why planning for the third stage is important.` },
      { type: 'p', value: `PPH can also happen because of damage to the uterus such as during Caesarean and separation of tissue at the site of a previous Caesarean incision. Damage to the vagina or labia can happen because of instrumental birth, episiotomy or tearing, though this rarely leads to a PPH. Finally, a retained placenta can also lead to heavy bleeding.` },
      { type: 'h2', value: `What happens if I have a PPH?` },
      { type: 'img', value: '/images/blog/pph-balloon-tamponade.jpg', alt: `Medical diagram of a balloon tamponade used inside the uterus to stop bleeding` },
      { type: 'p', value: `In most cases simple measures will reduce heavy bleeding; the uterus can be stimulated to contract by massage or a synthetic oxytocin injection (or a second injection if you already had one for the third stage). If heavy bleeding continues you may be taken to theatre where the cause of the bleed will be identified and treated. In some cases, the use of a ‘Bakri balloon’ will be used to stop the bleed internally, and in extreme (and very low probability) a hysterectomy would be required.` },
      { type: 'h2', value: `Reducing your chances of a PPH` },
      { type: 'p', value: `The Birthplace Study (2011) showed that up to twice as many people experienced severe PPH if they planned to birth in hospital compared to those who planned to birth at home or in a midwife led unit. The data is for those classed as “low risk” but it we can assume that “high risk” people without a specific medical/personal circumstance increasing risk of bleeding in excess would be at lower risk of PPH if they planned to birth outside of a consultant led labour ward. Makes sense given the environment right?` },
      { type: 'p', value: `Oxytocin is responsible for contractions to birth your baby, as well as for the uterus to contract down to cut off blood vessels after separation of the placenta. To release oxytocin, we need to feel protected and uninterrupted in an environment that is dimly lit and safe. Skin to skin with the newborn baby, allowing them to nuzzle or initiate breastfeeding, will help oxytocin production after the birth too.` },
      { type: 'p', value: `Oxytocin is inhibited by a bright and unfamiliar. Fear/anxiety, feeling observed, and being moved or kept in a restricted position creates adrenaline which interrupts oxytocin. This is why place of birth is significant. Remember, however, that personal preferences matter as some people would actually feel more reassured and safer in a hospital environment.` },
      { type: 'p', value: `After birth you will be offered a synthetic oxytocin injection to encourage the uterus to contract down to birth the placenta. This is called a managed third stage and it is your choice whether to accept, or not. It can reduce the risk of PPH but if you preferred to wait for the placenta to come naturally (a physiological third stage) you could opt to wait and if you did bleed heavily the injection is then available as a treatment for PPH.` },
      { type: 'p', value: `Using positions that mean the baby can birth more easily will reduce the chances of tearing and reduce the likelihood of intervention such as instrumental birth or episiotomy. If it can be avoided, it is better to be off your back in upright, forward and open positions such as on all fours or kneeling/leaning over something such as a birth ball or the head of the bed.` },
      { type: 'p', value: `Glucose is one of the main fuels for muscle activity in the uterus and exhaustion means the muscles can’t respond. If the uterus is depleted of glucose and has insufficient energy to contract it could result in PPH. This is why regular intake of food is recommended in labour but making sure energy levels are managed in later stages could reduce your risk of PPH by giving your uterus the glucose it needs to keep functioning. My favourite is honey- give it a try!` },
      { type: 'h2', value: `Am I at greater risk of a PPH if I have had one before?` },
      { type: 'p', value: `Experiencing PPH in one birth does not mean PPH is inevitable next time. There is, however, a possible increase in likelihood of it happening, hence your care providers may recommend giving birth in a consultant led labour ward and having an actively managed third stage. However, it is dependent on several factors including the birth environment, the cause of the previous PPH and how accurately your first experience was diagnosed. Remember everyone reacts differently and quantifying it is inaccurate.` },
      { type: 'p', value: `If your PPH was caused by a known event such as a tear, then it is no more likely to happen again. If your PPH happened after an induction and the cause was your uterus not reacting to drugs quickly enough, there is no reason to assume you will have another PPH if your next labour is spontaneous. Your body responds differently to the synthetic oxytocin of induction, when your oxytocin receptors may not be ready, then it does to natural oxytocin of spontaneous labour.` },
      { type: 'img', value: '/images/blog/birth-pool-fairy-lights.jpg', alt: `An inflatable birth pool in a dimly lit room with fairy lights and a candle` },
      { type: 'p', value: `Around 15% of people experience PPH in a subsequent pregnancy having had one in their first (Ford et al , 2007 and Oberg et al ., 2012) compared to around 5% of people having a first PPH in their first pregnancy. Over 20% were found to have a third consecutive PPH. The risk of PPH with subsequent pregnancies reduces if there has been no previous PPH at all.` },
      { type: 'h2', value: `My top tips` },
      { type: 'li', value: `Know your options for your third stage of labour.` },
      { type: 'li', value: `Plan for your third stage.` },
      { type: 'li', value: `Think about your birth choices and environment.` },
      { type: 'ref', value: `Ford et al . (2007) Postpartum hamorrhage occurrence and recurrence: a population-based study. AMJ.Oberg et al . (2012) Patterns of recurrence of postpartum hemorrhage in a large population-based cohort. AJOG.` },
    ],
  },
  {
    slug: 'postpartum-affirmations',
    title: `Postpartum affirmations`,
    category: 'postnatal',
    publishedAt: '2023-08-19',
    readingTime: 1,
    excerpt: `Being a new parent can be a hard adjustment, and that is totally normal. Here are some affirmations to help you settle into it.`,
    body: [
      { type: 'p', value: `Being a new parent can be a hard adjustment, this is totally normal, here are some affirmations to use to help you adjust. Just click and save!` },
    ],
  },
  {
    slug: 'wtf-is-a-doula',
    title: `WTF is a doula — and why might you consider one?`,
    category: 'doula',
    publishedAt: '2023-04-17',
    readingTime: 6,
    excerpt: `Not just for rich folk and hippies. What a doula actually does, the evidence behind continuous support, and why you might want one in the room.`,
    coverImage: '/images/blog/doula-continuous-support-model.png',
    coverAlt: `Conceptual model for continuous labour support, showing how it leads to shorter labour, fewer epidurals and better outcomes`,
    body: [
      { type: 'p', value: `What a good bloody question- isn’t that for rich folk and hippies who want to free birth?` },
      { type: 'p', value: `Absofuckinglutely NOT!` },
      { type: 'p', value: `Let’s clarify a few things straight away…` },
      { type: 'li', value: `Doulas are for everyone.` },
      { type: 'li', value: `Doulas are for all births.` },
      { type: 'li', value: `Doulas are not a replacement for the birth partner.` },
      { type: 'li', value: `Doulas can be an expensive investment- BUT the presence can be HUGELY advantageous.` },
      { type: 'h2', value: `So, what is a doula?` },
      { type: 'p', value: `A doula is a person who supports women and birthing people through pregnancy, labour, and birth, and/or after the baby is born. They are trained, non-medical professionals to promote the most positive birth experience possible.` },
      { type: 'h2', value: `A birth doula will` },
      { type: 'li', value: `meet the pregnant person, spend time getting to know them and support them in their birth preferences` },
      { type: 'li', value: `provide one-to-one support during labour — physically, emotionally and practically.` },
      { type: 'h2', value: `A postnatal doula will` },
      { type: 'li', value: `care for the birthing person and family after the birth` },
      { type: 'li', value: `help the new parents look after the baby (rather than looking after the baby for them).` },
      { type: 'p', value: `So now we kind of know what a doula is, let’s look at why you might hire one.` },
      { type: 'p', value: `Firstly, let’s look sat some statistics as how a doula might help you have a more physiological birth. Research ("Mothering the Mother" Klaus, Kennell & Klaus, 1993) has showed us that having a doula present during birth has the following impacts:` },
      { type: 'li', value: `50% reduction of caesarean` },
      { type: 'li', value: `25% shorter labour` },
      { type: 'li', value: `60% reduction in epidural request` },
      { type: 'li', value: `30% reduction in analgesia used` },
      { type: 'li', value: `40% reduction in forceps delivery` },
      { type: 'p', value: `The World Health Organisation recommends continuous support for women and birthing people however many Western practices promote more health-based facilities and don’t respect this level of support. A study published in the Cochrane review ( Hodnett ED, Gates S, Hofmeyr G, Sakala C.) found that the presence of a doula improved several health outcomes for both the mother/birthing person and the baby, including lower APGAR scores. Showing that the support of a doula isn’t solely about the benefits to the birthing person, but the holistic benefits to all, including the postnatal period.` },
      { type: 'p', value: `Sometimes during birth, the birthing person may need to speak up, to share their preferences, however this can disturb the physiological process of birth, and therefore the use of a doula can help increase advocacy for the woman/birthing person. This can mean that the decision is still kept by the birthing person and therefore reduces any unwanted procedures, increasing feelings of satisfaction for their labour and birth. Which is one of the primary outcomes of a positive birth experience. I must add, doulas do not speak on the birthing persons behalf, they only support them in their right to make their informed choice when advocating. This needs clearly noting.` },
      { type: 'p', value: `Now, I don’t know about you, but for me, birth wasn’t just a physiological process, it was a mental one too. I knew I needed to get in the right headspace, remain calm and in control, not anxious. Ravangard et al. 2017 found that ‘doulas presence has clinically meaningful impact on anxiety and pain relief in birth.’ This calming effect is so important to help the birthing person feel comfort, comfort in birth is so important. So how do you help someone feel more comfortable? Yes physically, but also emotionally, Gilland (2010b) states that ‘One of the doula’s primary goals is to care for the mother’s emotional health and enhance her ability to have positive birth memories’ but how is this actually done?` },
      { type: 'li', value: `Continuous presence` },
      { type: 'li', value: `Reassurance` },
      { type: 'li', value: `Encouragement` },
      { type: 'li', value: `Praise` },
      { type: 'li', value: `Helping the birthing person see themselves or their situation more positively` },
      { type: 'li', value: `Keeping company` },
      { type: 'li', value: `Showing a caring attitude` },
      { type: 'li', value: `Mirroring—calmly describing what the birthing person is experiencing and echoing back the same feelings and intensity` },
      { type: 'li', value: `Helping the birthing person and partner work through fears and self-doubt` },
      { type: 'li', value: `Debriefing after the birth—listening to the mother with empathy` },
      { type: 'p', value: `As well as this mental/emotional support, you might wonder what doulas actually can do to physically support you, this is not dissimilar to a birth partner, but imagine HOW supported you feel during your birth if you have someone who can also do the following.` },
      { type: 'li', value: `Soothing with touch through the use of massage or counter pressure` },
      { type: 'li', value: `Helping to create a calm environment, like dimming lights and arranging curtains` },
      { type: 'li', value: `Assisting with water therapy (shower, tub)` },
      { type: 'li', value: `Applying warmth or cold` },
      { type: 'li', value: `Assisting the birthing person in walking to and from the bathroom` },
      { type: 'li', value: `Giving ice chips, food, and drinks` },
      { type: 'p', value: `We also know that attachment has a significant impact on our hormones, specifically our oxytocin levels. Oxytocin, being a shy, love hormone, can often be inhibited during birth, due to the environment, interruption, anxiety etc, so a doula can really help provide a calming effect on the birthing person and therefore raise oxytocin to help the birth process. Things like massage, encouragement and breathing will help encourage, topped with the love and support of a birthing partner, birth is gonna rock! Increased oxytocin also helps to reduce the pain the birthing person feels (Hofmeyr, 1991) by increasing endorphin levels, so many benefits! (now are the statistics at the start starting to make more sense?)` },
      { type: 'h2', value: `Being the ultimate pillar of support.` },
      { type: 'p', value: `You might ask “but I can get support like this from my HCP and my birth partner/family members so why would a doula be necessary?”, and that’s a really, good question… In 2017, Bohren et al. published an updated Cochrane review on the use of ‘continuous support for women during childbirth’. For two of the outcomes studied, the best results occurred when a birthing person had continuous labour support from a doula– someone who was NOT a staff member at the hospital and who was NOT part of their social network.` },
      { type: 'p', value: `Overall, this diagram helps to visually outline the support that doulas provide.` },
      { type: 'img', value: '/images/blog/doula-continuous-support-model.png', alt: `Conceptual model for continuous labour support, showing how it leads to shorter labour, fewer epidurals and better outcomes` },
      { type: 'p', value: `It is fair to say that ‘doulas should be viewed by both parents and providers as a valuable, evidence-based member of the birth care team’ and the value of them isn’t explicitly measurable, there are many ways that positive birthing outcomes can be improved and having continuous support from a doula is risk free and effective, and this is WHY YOU SHOULD HIRE A DOULA.` },
      { type: 'p', value: `And of course, hire one because you want to.` },
      { type: 'h2', value: `References` },
      { type: 'ref', value: `https://pubmed.ncbi.nlm.nih.gov/1911582/https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD012449.pub2/full` },
      { type: 'ref', value: `Mothering the Mother" Klaus, Kennell & Klaus, 1993` },
      { type: 'ref', value: `Hodnett ED, Gates S, Hofmeyr G, Sakala C. Continuous support for women during childbirth. Cochrane Database of Systematic Reviews 2013, Issue 7. Art. No.: CD003766. DOI: 10.1002/14651858.CD003766.pub5 and Bohren MA, Hofmeyr GJ, Sakala C, Fukuzawa RK, Cuthbert A. Continuous support for women during childbirth. Cochrane Database of Systematic Reviews 2017, Issue 7. Art. No.: CD003766. DOI: 10.1002/14651858.CD003766.pub6)https://evidencebasedbirth.com/the-evidence-for-doulas/https://amygilliland.com/research-0 - Personal communication, Dr. Amy Gilliland, July 2015` },
    ],
  },
  {
    slug: 'hormones-and-birth',
    title: `Hormones and biiirrrtttthhhh`,
    category: 'hypnobirthing',
    publishedAt: '2023-04-17',
    readingTime: 5,
    excerpt: `Seven hormones do the heavy lifting in pregnancy and birth. Knowing how they work — and what shuts them down — helps you build a birth space that works with your body.`,
    coverImage: '/images/blog/hormones-activity-cards.jpg',
    coverAlt: `Hypnobirthing hormone activity cards laid out on the floor with fairy lights`,
    body: [
      { type: 'img', value: '/images/blog/hormones-activity-cards.jpg', alt: `Hypnobirthing hormone activity cards laid out on the floor with fairy lights` },
      { type: 'p', value: `Although I hate to generalise, our bodies are born with the ability to produce hormones which facilitate birth, not only that but also support the postpartum period and to breast/chest feed, for example. There are, of course, occasions where bodies don’t produce hormones effectively, but moreover when it comes to birth, hormones are inhibited due to the actions of others, specifically health care professionals (HCP) when timing and mode of birth are intervened with.` },
      { type: 'p', value: `The workings of our hormones are quite intricate and can not only start labour but also cause it to stall or stop. It is evolutionary. We have the toolkit, but we often impede these through years and years of false scaremongering. Yes, family horror stories and the shit-show that is OBEM.` },
      { type: 'p', value: `Our evolutionary toolkit has supported survival (integral to humans) for thousands of years, to prevent us from birthing in unsafe territories, but also in all aspects of the perinatal experience, such as lactation postnatally. Although the element of survival is (should be) much less of an issue, it is important to understand how these hormones work, to support the processes, to enhance the birth process and support the 4th trimester.` },
      { type: 'p', value: `Understanding that hormonal physiology is interrelated, coordinated, and mutually regulated between parent and baby helps us to optimise outcomes for both. Although we don’t know explicitly why or how labour starts, we know that our hormones are responsible for the kick start of labour, when our babies are ‘ready’. The relationship is internalised and helps to promote physiological birth and help to improve postnatal attachment. “Disruption of perinatal hormonal physiology may thus impact not only labour and birth, but also breastfeeding and maternal-infant attachment.” S.Buckley, so what are these hormones, and how do they work?` },
      { type: 'p', value: `There are 7 main hormones that play a huge role in pregnancy and birth, knowing and understanding their roles can really help you to maximise your body’s physiological response, and create environments that foster their production.` },
      { type: 'p', value: `Oxytocin, Prolactin, Adrenaline (catecholamines), Endorphins, Relaxin, Melatonin and Prostaglandins (we’ll investigate each of these in detail soon).` },
      { type: 'h2', value: `What are the main roles or hormones?` },
      { type: 'li', value: `Getting your body ready to give birth (relaxin, prostaglandin, melatonin, oxytocin)` },
      { type: 'li', value: `Starting your labour contractions (prostaglandin, oxytocin, endorphins)` },
      { type: 'li', value: `Preparing your baby for labour and life outside your body (relaxin, prolactin)` },
      { type: 'li', value: `Telling your breasts to make milk and getting your baby ready to breastfeed (prolactin)` },
      { type: 'li', value: `Stalling birth and alerting body for transition (catecholamines/adrenaline)` },
      { type: 'h2', value: `So, let’s break them down…` },
      { type: 'p', value: `Oxytocin is one of our primary hormones. It is known as the shy hormone of love. It is produced on several occasions, including during orgasm, laughing, touch and during birth, its primary role is to stimulate contractions. Receptors are found in the uterus which cause the muscles to contract. In doing so, they pull up, causing the cervix to dilate, and builds the fundus at the top of the uterus. This is then what pushes the baby out. Once the baby is out, oxytocin is also responsible for birthing the placenta and limiting the blood loss through retraction of the uterus.` },
      { type: 'p', value: `Oxytocin is inhibited by bright lights, observation, intervention including induction and epidural anaesthesia to name a few. When oxytocin levels are reduced (usually caused by adrenaline), labour can stall or even stop, so it is important to know how to maximise the oxytocin levels, these include, touch, feeling safe, relaxed, unobserved, using low lighting and laughter (amongst others). The release of oxytocin also helps to build up endorphins, our own bodies natural pain killer. It is said to be 200x more powerful than morphine. We can bank up endorphins too, through light touch massage, soothing the central nervous system, use of water and with the use of a TENS machine, great for labour and helping us reduce the need for pharmaceutical options which can hinder the natural flow of our hormones.` },
      { type: 'p', value: `Oxytocin is also impacted by/works together with other hormones, these include prolactin, melatonin, and prostaglandin. The interrelationship between birth hormones is integral in the physiology of birth and the whole perinatal period. Take prostaglandin, this hormone is responsible for softening the cervix and encouraging the initiation of contractions. This is one of the first steps of the birth process, where the contractions draw up the muscles in the uterus which help to dilate the cervix. The perfect design. Alongside this, melatonin receptors are found in the walls of the uterus, when there is low lighting, melatonin is released and this is thought to help trigger the release of oxytocin, which could be a reason that labours often start at night. In relation to evolution, this makes sense, less threat of danger at night, right? And we know bright lights inhibit oxytocin, so another factor in how understanding melatonin can help the birth process. Prolactin, known as the ‘parenting hormone’ builds throughout pregnancy and peaks during birth, alongside oxytocin. Its primary role is in helping produce breast/chest milk, as well as helping parents adjust to their new role, supporting a new-born’s life outside the uterus.` },
      { type: 'p', value: `Adrenaline is the hormone that impacts birth most, in a negative way. It is our fight or flight response and is produced when we feel threatened, usually in birth because we’re fearful/in pain. Adrenaline can stall or stop birth all together and is greatly affected by the environment we are in. Seeking safety, knowing about the birth process, birth rights and having someone to support/advocate for you can really help you to minimise the impact adrenaline can have. Adrenaline does have one positive impact when we are in the ‘transition’ phase, where it helps us to ‘wake up’ and supports the physiological process of the ‘fetal ejection reflex’. This is usually a natural response, and when other hormones are optimal, the rise in adrenaline shouldn’t cause a delay in birth, often in fact, it is the opposite!` },
      { type: 'p', value: `Unfortunately, there are many aspects which inhibit our natural production of birth hormones, which are not what we want or need during the perinatal period. Most of these are avoidable, but many are perpetuated by the media and our HCP when information shared is either biased or simply untrue. Thus, creating fear, or a belief that we are unable to birth without support for external factors. One of the biggest barriers to our birthing hormones.` },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

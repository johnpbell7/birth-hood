// Real birth stories shared by birth-hood clients, in their own words.
//
// Lightly copy-edited for the web (capitalisation, obvious typos, spacing);
// wording, voice and detail are the clients' own. Each story renders both as a
// card (Reviews page + /birth-stories) and as its own page at
// /birth-stories/<slug>.

export interface BirthStory {
  slug: string
  /** Card + page heading, e.g. "Britt's Homebirth" */
  title: string
  /** Badge above the title — the kind of birth */
  type: string
  /** Baby's name + arrival, shown under the page title */
  baby: string
  /** Where the birth happened */
  place: string
  /** Short blurb on the card */
  excerpt: string
  /** Highlighted line partway down the story page */
  pullQuote: string
  /** Story body, one string per paragraph */
  body: string[]
}

export const birthStories: BirthStory[] = [
  {
    slug: 'britts-homebirth',
    title: "Britt's Homebirth",
    type: 'Homebirth',
    baby: 'Lexie · born at 9:56am in the birthing pool',
    place: 'At home',
    excerpt:
      'Britt planned a water birth, then chose home. She declined an induction, laboured through the night with Rich massaging her back, and met Lexie in the pool in her own front room.',
    pullQuote:
      'I have never felt anxious about the birth, just excited — and it’s all down to the tools and information we gained from doing the course.',
    body: [
      'I always knew I wanted a water birth as an ideal plan but I hadn’t really thought about hypnobirthing until I started listening to a few podcasts and recommendations of how much of a positive impact it had on people’s pregnancies and births.',
      'My friend recommended Leanne and hypnobirthing to us so we got in touch and booked a 1:1 course which was the most suitable for us with Rich working shifts. As soon as we met Leanne we hit it off, she was so friendly and we felt so comfortable. We went along with an open mind, not really specific on what we wanted and would ‘go with the flow’. After the first session we were totally converted and felt so excited about the birth and a lot more confident. Leanne is so knowledgeable and gives you all the tools and information to make well informed and confident decisions on what’s best for you individually.',
      'Although I knew I would like a water birth we decided to opt for a home birth after our final session with our newfound confidence on exactly what we wanted (and didn’t want) — a calm, natural and relaxed atmosphere in the comfort of our own home.',
      'Together, Rich and I listened to hypnobirthing tracks every night as we went to sleep which not only helped me fall asleep within minutes but gave me such a positive outlook on the whole experience. The scripts are also really helpful to practice and got us in a really relaxed state. I found these particularly helpful along with affirmation cards after I passed my EDD to help keep positive thoughts. On my ‘due date’ we were offered an induction and sweep which we refused as we wanted things to start naturally without intervention, we thought our baby obviously wasn’t ready just yet (even though we were getting impatient to meet her!) The following week we were booked in for an induction but thankfully baby girl was ready to make an appearance 3 days before.',
      'Our first stage of labour was quite long starting on the Wednesday evening but managed the surges with breathing techniques, visualisations and hypnobirthing music and then towards the end the comfort of warm water in the bath/shower. Rich was such a great support using massage techniques on my back as well as breathing through the surges with me. My surges really ramped up and became regular and 5 minutes apart early hours of Friday morning. When the midwives got to us at 4:30am I was 8cm dilated and got into the birthing pool. Our midwives were so respectful of our birth plan we created with Leanne, and pretty much left us to it after the initial agreed examination.',
      'I started having gas and air at this point but carrying on with breathing techniques and visualisations which really helped me through. We had our hypnobirthing and relaxing music playing throughout the whole labour which really helped me to stay relaxed and calm.',
      'I stopped taking gas and air at the end, carried on with deep breaths and my body took over with pushing. Our beautiful daughter, Lexie was then born at 9:56am in the birthing pool into a calm and relaxed environment and she has remained calm and content ever since.',
      'We had skin to skin straight away and she started feeding pretty much immediately after. We delayed cord clamping until it had stopped pulsing and then the placenta came away pretty quickly and naturally.',
      'We have both said since starting the hypnobirthing course with Leanne, it’s the best thing we could have done throughout my pregnancy. I have never felt anxious about the birth, just excited, and it’s all down to all the tools and information we have gained from doing the course, and being confident about being in control and making the right decisions for us. We would recommend to anyone and everyone! Thank you so much for all your support x',
    ],
  },
  {
    slug: 'hannahs-fmu-birth',
    title: "Hannah's FMU Birth",
    type: 'FMU Birth',
    baby: 'Arlo · born 25 August 2020 at 7:20pm, 9lb 2oz',
    place: 'Melton Birthing Unit',
    excerpt:
      'Told at a routine appointment she was already 4cm and in active labour, Hannah went home instead. She and Gary arrived at Melton at 8cm and met Arlo in the pool that evening.',
    pullQuote:
      'Our birth experience is nothing short of amazing, and something we are both extremely proud of.',
    body: [
      '40 weeks +2 days, 25/8/2020 — the day our lives changed forever.',
      'Gary and I had completed a hypnobirthing course with Leanne and after being given all our options had chosen Melton birthing unit as our chosen hospital as we were classed as a low risk pregnancy. It was a case of waiting for baby S to make his appearance.',
      'At 40 weeks and 2 days, 2:30am, I woke Gary to say I felt a bit sick. I went to the toilet and got back into bed using my practice, telling myself what Leanne had taught me — ‘if you can go back to sleep it isn’t labour’ — so I did just that, got back into bed and went to sleep thinking nothing more of it. 6:30am I woke up feeling like I constantly needed to wee, I got up, made a brew and went to go about my normal day. By 9am the feeling of constantly needing to go to the toilet was full on so I texted Leanne to explain my symptoms and phoned Melton as I wasn’t sure what ‘labour’ was. We all agreed I could hold conversation, wasn’t in too much pain and other than the need to wee constantly, no other ‘labour’ signs.',
      'I had a routine midwife appointment at 10:15 as I was now over 40 weeks so I phoned Gary from work to take me (the need to wee had taken over my ability to concentrate so I got him home to drive me).',
      'When I got to the appointment, I found it uncomfortable to sit so did a strange jig in the waiting area whilst I waited to be seen. At the appointment we discussed the usual bits and my choice was still firmly Melton and it was just a case of when he was going to come. I explained I’d felt sick and the constant need to wee and that I’d phoned Melton but we’d all agreed for me to attend this appointment as they thought it could be early labour signs which can last days, maybe weeks. By this point, 10:30am, I was having to take a few deeper than normal breaths so the midwife asked if I wanted an examination. I agreed to this but if there were no signs or very early ones she was to send me home so I could crack on and not get flustered at not knowing when he’d be here, as all pregnancy we’d agreed he’d come when he’s ready and therefore my ‘due date’ became a little irrelevant.',
      'During the examination the midwife looked at me and said ‘well, you shouldn’t be here — I’d advise you call Melton and tell them I’m sending you over, you’re 4cm dilated and in active labour.’ I was not expecting to be told this, so left the doctor’s, got in the car where Gary was stressing as I’d been gone 50 minutes for a ten minute appointment, and I told him what she’d said. From the course we’d taken we discussed in the car how I was feeling and agreed going to Melton at that point wasn’t what we wanted to do, and as I felt OK, we’d head back home.',
      'We got back. Gary ran me a bath, made me some toast, telling me I had to eat to build my energy up ready. We sat in the bathroom having random conversation, I was on the phone to my mum laughing and joking that she had me on loudspeaker at work (I was discussing things people did not want to hear). I started to get what felt like light period pains and had a slight show. We had Leanne on hand who advised to start timing the pains I was having. Gary kept re-running the bath water, timing the pains and writing it all down. We phoned Melton at 1pm where again we all agreed I’d be OK to be home for a while longer yet as ‘I could hold normal conversation’.',
      'At 2pm Gary said to me he thought it was time I got out the bath and we got sorted to head over to Melton as it’s a 40 minute drive for us. (I didn’t know he was messaging Leanne, who he had on speed dial that day.) It wasn’t until I got out the bath and attempted to walk down the stairs did I think OK, this is a little more intense now. Gary got me some paracetamol, we got in the car and played the tracks we’d used in practice in the car.',
      'We arrived at Melton for roughly 2:45pm and were shown to our room. We had two midwives and one student midwife who took the lead from the other lovely midwife we had for our care. They asked if they could do an examination as they felt I could still talk etc pretty well and wanted to see where I was. I consented to this, whilst telling her to not tell me where I was but to tell Gary, and if I was being a ‘pussy pants’ they were to tell Gary to take me back home. The midwife simply said ‘you aren’t going home without a baby’ (I found out afterwards she told me I was a conservative 7cm dilated, more likely 8cm when we arrived). She took the birth plan from Gary and instantly started filling the pool for us as we’d set our heart on a water birth.',
      'Once the pool was run I got in and felt comfortable and in control. Gary played the tracks through the speaker and encouraged me with my breathing techniques and also kept supplying me with drinks and nibbles to keep my energy up. We had to be monitored every 15 minutes, but every time baby S was comfortable and showing no signs of stress. The midwives, other than to do these checks, stayed out the way as per our birth plan requests. They told me to keep feeling for a ‘pop’ as that would be my waters breaking — the pop never came till it was time to push.',
      'It got to 5:30–6pm and the increase in pain was now more apparent. I’m not ashamed to admit I had a momentary lapse in my ability and lost total concentration on my breathing, the pain took over me and I started to freak out. After having a stern word with myself, along with Gary and the midwife telling me to get myself together, remember my practice and refocus, we were back on track. Gary kept telling me I could do it and telling me positive affirmations.',
      'We’d been told you’ll just know when you need to push and I never understood that until it happened. But you do just know. I kept telling the midwife I felt like I needed a big poo and the pressure was a feeling I’ve never felt before. I was still waiting for this pop to happen for my waters so didn’t think it was time to push. I trusted my body and the midwives said if you feel you need a poo, try push, listen to what your body is telling you. So with that I started to push, and at this point the pop happened. I’m not sure if I’d have felt different if I was out of water but the pop didn’t make a huge difference to how I felt.',
      'I changed my breathing like we’d learnt in preparation for welcoming our baby into the world. We were extremely fortunate that we were the only people in Melton that evening so at the point of pushing we had 1 to 4 care and the midwives I’d had with me all day could focus on me and Arlo fully. People talk about the ‘burn’ feeling when you push (it’s VERY real). So with small gentle pushes I remember the midwives saying ‘that’s baby’s head out, do you want to feel.’ This was one of the most amazing experiences of our lives and knowing we were so close to getting to hold him gave me the final push.',
      'At 7:20pm we welcomed Arlo into our world. Born in the water, not a sound made, straight onto my chest for me and Gary to see what we’d waited all that time for. There was no rush — we stayed in the water for 30 minutes before moving onto the bed. We had decided on delayed cord clamping and a natural birth of the placenta. Arlo’s cord wasn’t cut till I’d delivered the placenta, at which point Gary cut this so he could be weighed, before being given to Gary for skin to skin time with his daddy — all 9lb 2oz of him.',
      'Our birth experience is nothing short of amazing, and something we are both extremely proud of. Using everything we learnt from our course we got the birth we had in mind and we’re so proud!!',
    ],
  },
  {
    slug: 'emmas-positive-induction',
    title: "Emma's Positive Induction",
    type: 'Induction',
    baby: 'Eddie · born at 10:45pm, 7lb 6oz',
    place: 'Burton Hospital',
    excerpt:
      'Emma planned a home birth. Reduced movements the day before her due date changed everything — and she still describes the induction that followed as magic.',
    pullQuote:
      'Eddie was born into a calm, controlled environment. No screaming, shouting or panicked vibes — it was magic!',
    body: [
      'Baby no.2 had a tough act to follow from my first born: fab pregnancy, born on his due date and an amazing positive labour. I wanted to ensure I had another positive experience and hypnobirthing had come highly recommended to me. I had seen lots of Leanne’s online presence and loved her approachable, kind nature so we invested in her course — over Zoom due to Covid!',
      'My husband, Luke, was sceptical but we both really enjoyed the courses, they were concise, to the point and made sense. Leanne was amazing at explaining each stage and applying each bit to our specific pregnancy.',
      'I planned a home birth, knowing we had a quick and positive experience with my first born I felt confident that home was the best place for us. Our care with the homebirth team was fantastic!',
      'The day before my due date Eddie stopped moving. Completely. He was usually so active that we felt I should go and get him checked. Movement was fine and heart rate was fine, but the doctor was keen to get things moving. They recommended a sweep; I was really against this primarily as I was planning everything to be so natural. However, with reduced movement and my due date looming I decided to have the sweep and come home. Leanne was right at the end of the phone for me during this decision-making process, she was so helpful, reminded me of my choices and supported me.',
      'The next day I had a phone call from the consultant at Burton Hospital who felt that a term baby with reduced movements was risky and advised that I should be induced.',
      'My world fell apart. I had made a plan. A home birth plan. This wasn’t part of my plan. I was emotional. Tired. Gutted.',
      'I knew deep down they were right: I had zero movements and baby wasn’t reacting to cold drinks, bouncing on my ball etc — all the things he would have reacted to previously! Again, Leanne was there for us 100%, reminding us of our options, asking questions we didn’t think to ask, and supporting us 100%!',
      'I went to Burton Hospital around 1pm and had a real in-depth chat with the midwife there who was really understanding. I had Propess at 3pm, Luke was sent home at 6:30 and I was put onto the postnatal ward. I was so exhausted, crying and so gutted my home birth was out of the window. But I knew I needed to find my place of relaxation, so I put on my positive birth affirmations and relaxation tracks and tried to relax. Literally minutes later I was having contractions — 90 seconds apart and lasting 30–40 seconds. BOOM! I focused on my up breathing and staying calm and was moved to delivery at 7:30! Poor Luke had just made it home when I texted him to come back — quick!',
      'I remembered my UFO birthing positions and stood leant over the bed for the most part of my labour. I used the gas and air alongside my up breathing — focusing on each individual contraction and visualising what was happening to my body with each contraction really helped to keep me focused.',
      'The midwife burst my waters at 4cm to try and regulate my contractions as they were so strong but it just made everything happen so much quicker! I was struggling to stay focused at this point — but Luke was really good making sure my tracks were on, he was asking me what I wanted or needed, being positive, smiling, and knowing how informed he was I felt safer!',
      'Eddie was back to back so the midwives helped me to get into a sitting position holding my legs — I wasn’t pushing for very long before he literally shot out at 22:45 weighing 7lb 6oz! I trusted that my body would do its job, I knew my breathing techniques would work and I felt in control as Eddie was born. I can honestly say that staying focused on my breathing and what I wanted my body to do took my attention away from the pain — Eddie was born into a calm, controlled environment. No screaming, shouting or panicked vibes — it was magic!',
      'He was put straight onto my chest for skin to skin and had delayed cord clamping and natural delivery of the placenta as we had planned.',
      'My birth was nothing like I had planned but I still feel like I had a positive birth experience and I can honestly say hypnobirthing made it so much easier, I felt in control and supported for the whole journey.',
      'Forget epidurals, gas and air and your standard pain relief — hypnobirthing is what you need!!!',
    ],
  },
  {
    slug: 'stacies-hospital-birth',
    title: "Stacie's Hospital Birth",
    type: 'Hospital',
    baby: 'Hallie · born 27 February at 5:50pm, 6lb 14oz',
    place: 'Leicester Royal Infirmary',
    excerpt:
      'Stacie booked a home birth. Her waters broke two weeks early and the plan changed to induction, epidural and theatre — and she and Nick stayed in control of every step of it.',
    pullQuote:
      'Even though I didn’t necessarily get the birth I had hoped for, I still gave birth to a happy and healthy baby girl.',
    body: [
      'Hallie was born on 27th Feb, 2 weeks early.',
      'In January myself and my partner Nick attended the 1-1 hypnobirthing classes with Leanne. It was without a doubt the best thing I did to prepare myself for birth. Once the classes were complete, I saw my midwife and booked in for a home birth. I was so excited to give birth to my baby at home — however, baby girl had other ideas!',
      '4am Tuesday morning I had a very strange feeling. The night before, a homebirth midwife came to see me as I was feeling very strange, she confirmed I’d had ‘the show’ and to keep an eye on things. So like I said, 4am I felt very strange and went to the loo and thought that my waters had broken. I called the homebirth team again and they came out around 8am and confirmed that yes, my waters had broken! We were so excited, I didn’t feel scared at all, I was ready for our little girl.',
      'The homebirth midwife explained about being induced if things hadn’t progressed because of the risks of infection as my waters had broken, so we basically had 24 hours to get baby moving so I could give birth at home. I did everything to make me feel relaxed and to get the oxytocin flowing. Bubble bath, eating pancakes (it was pancake day), doing the relaxation techniques we had learnt with Leanne. I sent Nick out to get some clary sage oil to put in the diffuser and lots of other last-minute bits.',
      '24 hours came and went and still no sign of baby. We called the LRI and were told to make our way into maternity.',
      'Even though our birth plans had changed we were still feeling positive and felt completely in control. I had a nice hot shower, did my hair and make up and got ready to meet our baby. We were calm and felt in control whilst on the maternity ward, the midwives were lovely and we went for little walks around the hospital whilst waiting for things to ‘get moving’.',
      'As the evening came so did my surges, we remembered the breathing techniques and Nick helped me through them. At around midnight that night we were moved into our own room and talked through the induction process.',
      'We expressed that we had practised hypnobirthing, our midwife was well on board with this. Our midwife was absolutely amazing! She answered all of our questions and also talked us through the different types of pain relief. I expressed I only wanted gas and air, however I did listen and took on board all the other options.',
      'I’m not going to lie, being induced was extremely painful. Your body is basically being forced to have contractions, there were a few times when I did lose it a bit and thought that I couldn’t do it. Nick was by my side the whole time talking me through the breathing and reminding me that soon we will meet our baby girl.',
      'After a really long time of being induced we decided that it was best to try some other form of pain relief. As I remembered from Leanne, I needed to relax, and I wasn’t. Nick kept reminding me of our favourite phrase from Leanne — floppy face, floppy fanny. :)',
      'I just couldn’t do it anymore. Nick and the midwife talked me through the benefits of an epidural, one of the biggest benefits was to help me relax so that my body would do the work. I agreed to the epidural and it was hands down the BEST decision I made that day.',
      'I was so relaxed I even fell asleep a little bit, I could hear my playlist in the background, had conversations with people and even watched a few episodes of Friends!',
      'After a few hours the epidural had worked and my body got on with what it had to do. I had dilated 4cm then 8cm and then 10cm. I was so excited and was getting ready to push.',
      'Now this is all a bit of a blur. I remember being able to push and then with each push I had this wave of pain across the bottom of my back, where the epidural had gone in. I was in so much pain I literally couldn’t do anything, there wasn’t a position I could get in that didn’t hurt. I remember screaming that something was wrong to Nick and the midwife, I just knew something wasn’t right.',
      'I was still being induced at the highest level. I had to rely on Nick to explain that I couldn’t do it, that I needed help. The midwife got a doctor who examined me and within minutes we were taken to theatre.',
      'I had a spinal epidural this time, which was amazing. The pain just vanished. I felt calmer and knew that even though this certainly wasn’t what I had in mind for my birth, that everything was going to be OK.',
      'Hallie was born at 5:50pm on 27th Feb weighing 6lb 14oz. She was delivered by forceps, with me still being able to push when the midwife told me I was having a contraction and with Nick right by my side. She was put straight on my chest and was so calm, I don’t think she cried till they weighed her!',
      'We were taken into recovery where the midwife relayed to the team that we wanted the golden hour. It was perfect.',
      'So, even though I didn’t necessarily get the birth I had hoped for, I still gave birth to a happy and healthy baby girl. Hypnobirthing gave us knowledge and tools to help us through and I would highly recommend Leanne’s courses. Thank you.',
    ],
  },
  {
    slug: 'toms-dad-story',
    title: "Tom's 'Dad' Story",
    type: 'Birth Partner',
    baby: 'A birth partner’s view',
    place: 'Written by Tom, Hannah’s husband',
    excerpt:
      '“Yeh, whatever you like” — Tom’s honest account of going from barely looking up from dinner to being the leader of the room, and what dads can actually do.',
    pullQuote:
      'Not only can the dads have a key role in the process, but they can actively change the entire situation for the better.',
    body: [
      'When my wife Hannah first said to me that she wanted to try hypnobirthing during our pregnancy and labour, I openly admit it was one of those “yeh, whatever you like” moments, without really looking up from dinner. Partly thinking it wouldn’t be something that we would actually try, and partly not having any idea what it was, therefore not paying too much attention to the request.',
      'However, I soon realised that it was something that she really wanted to do, I got stuck into exactly what it involved, tried to clue myself up as best I could, and booked in with Leanne.',
      'I’m not going to pretend that I had mastered the art before we had our sessions, or that I fully understood what my role in the whole thing would be. For me though, knowing that it was something that Hannah wanted to do and she thought it would help is enough because at the end of the day, she is the one pushing a person out of her!',
      'During the sessions I think one of the simplest yet most helpful things we did was to just list all of our fears, however big or small, about any aspect of the pregnancy. For me, that was simply wanting to be useful. I had lots of dads saying to me that there was nothing I could do and that you are just a spare part, and that was something that I firstly didn’t believe had to be true, and secondly really didn’t want to happen. I like to think that I have a positive effect on Hannah and can help her in whatever situation it may be, and I felt the same about this.',
      'So after highlighting this as a worry from my side to Leanne, we spent a bit of time talking over exactly what my role could be and I can honestly say that not only did I feel so much better after this, but the plan that we set out in terms of my role worked incredibly well. Without going into the detail that Leanne would with the actual sessions, I was effectively the leader of the room. Every breath during the contractions I was not just saying “breathe”, but breathing with her, which sounds so simple but it allowed Hannah to focus on me and follow rather than thinking about the pain. Any interaction with the midwife was done by me, making sure the room was set out exactly how we wanted it, controlling the use of language to help with the environment, reading scripts, positive talking and just basically anything that I thought would make Hannah be as relaxed as possible.',
      'We unfortunately had complications during our birth, which initially might make you think that the calm, relaxed environment that we wanted went out of the window. However, we were still able to use the techniques that we had learnt to make the situation as close to what we wanted as possible, even during a very stressful time. Some of the things may seem obvious and fairly simple, but when you actually commit to doing them in that environment they help so much.',
      'I think the key message I took from the sessions that we had were that not only can the dads have a key role in the process, but they can actively change the entire situation for the better. And that even if hypnobirthing is not something that you are 100% in tune with, if your partner is, and it’s something that they believe will help, then that is more than enough because that in itself will have a positive impact on their mindset and feelings.',
    ],
  },
  {
    slug: 'amys-positive-induction',
    title: "Amy's Positive Induction",
    type: 'Induction',
    baby: 'Chester Bowie Leeson · born 15 December at 7:29pm',
    place: 'Hospital induction suite',
    excerpt:
      'Diagnosed with cholestasis at 39 weeks and booked for induction, Amy’s body started without the hospital’s help — and the midwives followed her birth plan to the letter.',
    pullQuote:
      'It was at this point that I noticed my birth plan on a table and realised that the midwives had read and followed exactly what I had wanted.',
    body: [
      'I was very keen to look into hypnobirthing after hearing people rave about it on social media after the birth of my first child. It seemed to promise everything I didn’t get in my first labour — empowerment, control, pain management — so when I saw that Leanne had qualified as a hypnobirthing teacher when we were trying for a baby again, I knew I would be reaching out to her if we managed to fall pregnant.',
      'After discussing it with my partner and being lucky enough to win a taster session with Leanne, we booked on for the full course. Throughout the course Leanne managed to quell any fears I had about the upcoming birth and helped me feel confident that I would be able to deal with anything that might be thrown at us on the day.',
      'Kieran got fully on board with the hypnobirthing process and we listened to the hypnobirthing affirmation recordings (particularly Colour and Calmness) every night as we went to sleep. Kieran also sent me messages regularly with birthing affirmations.',
      'I ended up being diagnosed with cholestasis at 39 weeks and was advised that, just like in my previous pregnancy, I would need to be induced. We were invited in for the induction at 39+3 on Sunday 15th December.',
      'We arrived at the hospital at 11am and went to the induction suite. We were informed that me and the baby would be monitored closely and then I would be assessed for induction. If I wasn’t dilated at all they would use a balloon catheter to induce me, and if I was dilated they would break my waters when they had the space and the staff to deal with the labour. As I had a pessary with my last induction and it worked very well, we questioned why this would not be used this time. But after discussions with the midwife and using our B.R.A.I.N. we decided that due to the cholestasis and the importance of getting the baby out ASAP we would go with the balloon catheter if needed and would also accept having my waters broken if I was already a bit dilated.',
      'After extensive monitoring (due to baby being so active), I was eventually examined at 3:30pm. While I had been sitting in the induction suite I had mentioned to Kieran a few times that I felt I was getting irregular contractions and we joked that maybe my body had just decided to start the process itself rather than waiting for the hospital to induce us.',
      'These contractions continued to get more regular and we started tracking them using an app at 5:30pm. During this time my waters had started to go by themselves. Through all this I listened to a playlist of relaxing songs I had made and focused on the lyrics to the songs and doing my up breathing. As each contraction came I let Kieran know so he could track it and he stroked my leg so I had gentle touch massage from him to comfort me.',
      'As the contractions grew stronger and closer together I closed my eyes, focused on the music and went over some of the affirmations I had learnt with hypnobirthing — “The surges cannot be stronger than me because they are me”, “Each surge brings me closer to meeting my baby” and “I can do anything for 30 / 60 seconds”.',
      'We informed the midwife I had progressed significantly and at 6:30pm I was escorted down to a delivery suite by a midwife and a student midwife. I walked down the corridor by myself, pausing several times to deal with the contractions. We were informed that the midwife that had brought us into the delivery suite would be helping us for now but her shift finished at 7:30pm so she would not be there for the entire birth and we would have a cross over of another midwife taking over.',
      'The midwife helped me settle into the room. I advised that I was feeling like I needed to push so with my permission she examined me. I was advised I was 5–6cm and so I was offered gas and air to help me concentrate on my breathing and help me focus on not pushing yet.',
      'I was very concerned that I was going to end up birthing on my back which was something I specifically didn’t want. I told the midwives this and they offered to move me but I had started to panic a bit and wasn’t sure if I could manage to change position. The midwives were amazing and assured me that we would move in time for baby to be born.',
      'Things progressed very quickly from there and with Kieran’s amazing support, talking to me the whole time and being super positive, it was soon time for me to move into a better birthing position. I was assisted into an all fours position, holding on to the back of the bed.',
      'At this point the need to push took over and I just let my body do what it needed to do. I could feel baby’s head dropping and I could feel my body pushing. I would love to tell you that this was a calm, serene moment where I focussed on my down breathing but I can’t. I was a lot more vocal than I had intended to be and I definitely doubted my ability a few times. However, my body did know what it was doing and at 7:29pm Chester Bowie Leeson arrived. 1 minute before the end of the midwife’s shift!',
      'When he was born he didn’t cry, they put him on the bed between my legs to pick up and they gave him a rub to ensure he was OK. He was awake but just very quiet. I pulled him up on to my chest and was assisted onto my back. I had immediate skin to skin with him, and we asked for delayed cord clamping.',
      'From there I birthed the placenta while holding Chester and continued to hold him for the ‘golden hour’. At no point did they try and take Chester to check him over or anything. It was really a lovely time.',
      'It was at this point that I noticed my birth plan on a table and realised that the midwives had read and followed exactly what I had wanted. This was a really amazing moment for me. I felt really listened to and supported and it made me feel so pleased I had done hypnobirthing.',
      'Although there are a number of hypnobirthing techniques I didn’t use that I thought I would, I still found it incredibly helpful and do feel like it transformed my birthing experience this time. Without doing the hypnobirthing course me and Kieran would never have questioned the hospital staff so confidently. I wouldn’t have created a playlist for birth. I wouldn’t have felt so mentally prepared for the birth. I wouldn’t have trusted my body as much as I did. And I wouldn’t have got the birth that I did.',
    ],
  },
  {
    slug: 'hannahs-water-birth',
    title: "Hannah's Water Birth",
    type: 'Water Birth',
    baby: 'Reid Arlo Scroby · born Sunday 26 September at 5:33pm',
    place: 'Derby Birthing Centre',
    excerpt:
      'Told she needed an early induction with no medical reason behind it, Hannah declined — and four days later her labour started on its own. She caught Reid herself in the pool.',
    pullQuote:
      'We felt empowered to decline the induction knowing this wasn’t the birth we wanted for our son.',
    body: [
      'My pregnancy was really easy compared to most. It started off rocky with an early scare of miscarriage at 8 weeks, which turned out to be a haematoma and all was OK. This probably made the start of the pregnancy the worst part as I feared to go to the toilet every moment of the day for more bleeding, I also struggled with believing everything would be OK and I would have a healthy baby.',
      'My other struggles included body change at the start and giving up my running and fitness, something that is a part of my everyday life. Towards the end my decision was to do no exercise as it was far too painful for how low he was and how weak my bladder was. As an active person I believe my day-to-day life was busy enough to keep me as fit as I needed to be, and I hardly gained any weight during the pregnancy even after eating what I wanted most days to an extent. Again, no real cravings, just terrible nausea and migraines up to 20 weeks where a switch flicked and I was back to normal. This part became the best, I just secretly feared every day something bad would happen which is something I never expected to feel.',
      'As soon as we were pregnant, we knew hypnobirthing with Leanne was something we were interested in and after quite a terrible experience with the midwives due to staffing problems, we really needed this extra support and education. Leanne quickly became someone I texted as soon as I had an irrational fear or question and I didn’t know who to go to. She never left me unanswered and always was only minutes away with advice!!!',
      'My birthing plan before hypnobirthing was to wing it!!!!! I had no idea what I wanted and didn’t want until we attended the classes, and it became very apparent I had a specific birthing plan I wanted — I just didn’t know until my options were given to me.',
      'Leanne’s classes gave us the confidence to make informed decisions and control a situation in the lead up to the birth of our baby after being told I needed an early induction with no real medical reasons to back this up. We felt empowered to decline the induction knowing this wasn’t the birth we wanted for our son. We left the hospital at midnight and four days later my labour started at 9pm naturally.',
      'Not knowing I was in labour, it started off quite steady and easily controllable. I went downstairs at 1:30, had a large pasta dish luckily a friend had made for me the evening before, and before long I got myself in the bath ready to fight the contractions for as long as I could at home (again something we had learnt at Leanne’s class).',
      'With the support of Derby Birthing Centre on the other end of the phone they said to come in when I couldn’t cope anymore and by 5:30am this was the case. We got there around 6 and they offered me some oramorph and said to get in the birthing pool as it was helping at home. Unknowingly the midwife had put the pool to a dangerous temperature which led to the new midwife at changeover an hour and a half later getting me out of the pool and assessing the baby’s heart rate, which was worryingly high. After what seemed like an eternity in another assessment room and some very cold and painful contractions, I was eventually allowed back into the birthing centre suite which we were so happy not to lose as the facilities were incredible!!!',
      'As my contractions were still coming thick and fast and the pain not becoming any more manageable, they offered me a small dose of pethidine to see if I could sleep in between my contractions. This and the gas and air definitely helped me get through the next few hours, but I wouldn’t suggest pethidine again if you don’t like the feeling of being spaced out as it definitely took me to another dimension and the sickness I felt was terrible with every contraction.',
      'At 3pm there was another handover of staff and the new midwife came on who really stepped up the game altogether. She ordered me to drink a full bottle of water every hour and Jake to the shop for sugary snacks. I couldn’t eat though and lost my appetite for around two days after too.',
      'When the pethidine had worn off I could go back into the pool and this time it was a nice temperature. I was told not to push even though my body was telling me to as at my last check I wasn’t far enough dilated. I trusted my body and knew something had shifted, my body was convulsing in a new way and with every contraction I pushed twice. Once in the pool time lost track, but I was told it was around 45 minutes and with my partner up top counting with the midwife the timings and checking the baby’s heart rate through every contraction, it was time to meet our son.',
      'He was born in the water with gas and air, but I didn’t want to be out of it so used it more for something to bite on. As he came, I was reminded to catch him myself and they helped me onto the side of the pool chair to rest and take it all in. Daddy cut the cord and we were given time and the midwives took photos and just kept congratulating us and saying how gorgeous he was. It felt like such a team effort — we were elated, and I couldn’t believe I had done it all.',
      'After, I went onto the bed where I was given the option for the injection to bring on the placenta. For me this was amazing as it came out easily and comfortably and I didn’t really notice it was happening, I just got to take in the moment of meeting Reid.',
      'The midwives checked me and I had torn which led to surgery and a spinal block, which then led to a night on the maternity ward with my baby on my own. Something that might have been daunting but it helped me so much as I learnt quickly what I needed to do, and only with the use of my arms as I was numb waist down. We were allowed back home the following day at 5pm and my partner only allowed to visit at 3 due to Covid restrictions — but again, more time to work out our new life together as mummy and son.',
      'Thank you to Leanne for all the advice, support and guidance throughout the 9 months. We really feel like we learnt what tools we needed to get the birth we wanted and left out what we knew we didn’t need. For us the course gave us strength and so much information to be as prepared for childbirth as you can, and mixed with the incredible care we were given by the NHS and Derby Birthing Centre we had the most positive experience you could want!',
    ],
  },
]

export function getBirthStory(slug: string): BirthStory | undefined {
  return birthStories.find((s) => s.slug === slug)
}

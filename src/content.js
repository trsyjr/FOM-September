import merl1 from './assets/Merl1.jpg'
import merl2 from './assets/Merl2.jpg'
import merl3 from './assets/Merl3.jpg'
import merl4 from './assets/Merl4.jpeg'
import merl5 from './assets/Merl5.jpg'
import merl6 from './assets/Merl6.jpg'
import merl7 from './assets/Merl7.jpeg'
import merl8 from './assets/Merl9.png'
import merl9 from './assets/Merl10.png'
import merl10 from './assets/Merl11.png'

import merlpic1 from './assets/MerlPic1.jpg'
import merlpic2 from './assets/MerlPic2.JPG'
import merlpic3 from './assets/MerlPic3.jpg'
import merlpic4 from './assets/MerlPic4.jpeg'
import merlpic5 from './assets/MerlPic5.png'
import merlpic6 from './assets/MerlPic6.png'

const content = {
  // ----- cover (landing page) -----
  issue: 'Issue 9',
  month: 'September 2026',
  monthName: 'September',
  title: 'Feature of the Month',
  cover: {
    // eyebrow: 'Now featuring',
    teaser: 'Ten questions, a pile of photos, and one very cheerful field coordinator.',
    button: 'View',
  },

  // ----- diary page -----
  name: 'Merielle O. Palacio',
  nickname: 'PMC Queen',
  role: 'Training Specialist III',
  tagline:
    'Here we are celebrating MERL’s charm and sweet aesthetic while highlighting how her warmth, kindness, and helpful nature make the office a brighter place every day.',

  facts: [
    ['Team', 'Community Programs'],
    ['Here since', 'March 2021'],
    ['Snack of choice', 'Dried mango, always'],
    ['On repeat', 'Rainy-day lo-fi playlists'],
  ],

  hero: [
    { src: merlpic1, caption: '' },
    { src: merlpic2, caption: '' },
  ],

  entries: [
    {
      q: 'Merl’s Morning Magic - Walk us through your ideal, aesthetic morning routine before heading into work.',
      a: [
        'Reality: Wake up (may kasamang panic- kasi hindi nagising sa unang alarm 😂) tulala around 5 minutes (contemplating- ito bang ginagawa ko ay necessary sa pag-akyat ko sa langit? 😂 or anong dulot nitong desisyon kong ito sa buhay na gusto ko?- basically convincing myself to get up and work), baba sa tutulala ulit at gigisingin si mama for a coffee ( I can make my own- but I like it better kapag si mama nagtimpla- while having coffee- makikinig sa kwento ni mama na around 2-3 times na nyang nasabi- if solo lang ako kakalma- if sumabay kaming 3- (2 older sister) makikipagpaunahan sa CR at sa malaking salamin para mag-ayos- pinakalast ay yung smallest mirror ang gagamitin 😂',
        'But my ideal morning? Definitely an unrushed morning!',
        'I just love the idea na I have enough time to do all the things I wanna do before going to work—tutulala, mag-scroll, drink my coffee, have breakfast, enjoy a quiet moment, reflect, or literally just do nothing. Like, ang sarap lang na hindi ka nagmamadali!',
        'I also love having enough time to prep myself and look nicey. There’s something about feeling pretty and put-together that makes me feel more organized and ready to face the day.',
        'And of course, my morning wouldn’t be complete without my mom! My coffee is prepared, breakfast is ready (as the princess that I am! 👸😂), my clothes are ironed the night before, and my everyday bag and things are ready to go.',
        'I think there’s just something beautiful about starting your day with a peaceful mind, a grateful heart, and enough time to enjoy the little things—even if that means listening to Mama’s stories for the third time! HAHAHA.',
      ],
      photos: [
        { src: merlpic3, caption: '' },
        { src: merlpic4, caption: '' },
      ],
    },
    {
      q: 'What are three cute or non-negotiable items on your desk that you can’t live without?',
      a: [
        'First, my phone and earphones! As someone na halos everyday may coordination, calls, and biglaang concerns, I cannot afford to lose my phone! And my earphones, please, non-negotiable talaga! Otherwise, lahat kami nagsisigawan sa office at hindi ko na alam kung sino ang kausap ko',
        'Second, my notebook or accomplishment planner! Sa dami ng ginagawa every day, I need something to keep track of everything. Otherwise, by the end of the day, mapapaisip na lang ako, “Wait, ano nga bang ginawa ko today?” HAHAHA. I need to write things down kasi sometimes ang daming nangyayari in one day na even I cannot keep up with myself!',
        'And third, my little pink island mirror! This one is more on the cute and sentimental side. Dito ko nilalagay yung mga pasalubong and little things given by people close to me—our turtles, bracelets, mini surfboards, and kung ano-ano pang tiny treasures. They’re not necessarily expensive or grand, but I love keeping them close kasi each one reminds me of someone or a little memory. Parang mini collection of people I love! 💗',
        'Other essentials😂',
        'My water bottle—because I need to stay hydrated, kahit minsan three days na siyang nakatambay sa table. Huhu',
        'My lip balm—because as a tamad mag-lipstick girlie, lip balm is life! Lalo na kapag stressed, apply lang nang apply. 😂',
        'My hair freshener—because as a Move It passenger every morning, kailangan natin ng pangmalakasang hair freshener! Otherwise, maghapon akong amoy kahapon! HAHAHAHUHU.',
        'And of course, my Sign Here tabs! Sa dami ng papers na kailangang pirmahan, these little things are lifesavers!',
        'So ayun, technically three essentials… with a few supporting characters! HAHAHA. 😂'
      ],
      photos: [
        { src: merlpic5, caption: '' },
        { src: merlpic6, caption: '' },
      ],
    },
    {
      q: 'What is a project you are proud of?',
      a: 'The school supply drive in June. We reached eleven neighborhoods in three weeks, and every bag had a handwritten name tag. Watching kids carry them on the first day made the late nights worth it.',
      photos: [
        { src: '/images/q3-a.jpg', caption: 'the supply drive crew' },
        { src: '/images/q3-b.jpg', caption: 'name tags, one by one' },
      ],
    },
    {
      q: 'What did you learn this year?',
      a: 'A simple checklist saves more time than a clever system. I tried three apps this year and went back to a paper list taped above my desk.',
      photos: [
        { src: '/images/q4-a.jpg', caption: 'the famous paper list' },
        { src: '/images/q4-b.jpg', caption: 'app graveyard' },
      ],
    },
    {
      q: 'Who helped you the most along the way?',
      a: 'My team lead, Joy, who answered every question without making me feel silly for asking. And the drivers, who know every shortcut in the city.',
      photos: [
        { src: '/images/q5-a.jpg', caption: 'Joy and Mika' },
        { src: '/images/q5-b.jpg', caption: 'the driver squad' },
      ],
    },
    {
      q: 'What do you do to recharge?',
      a: 'Long walks after work and a small plant corner by my window. On Sundays I bake banana bread and give most of it away.',
      photos: [
        { src: '/images/q6-a.jpg', caption: 'sunset walk' },
        { src: '/images/q6-b.jpg', caption: 'Sunday banana bread' },
      ],
    },
    {
      q: 'What is your go-to lunch order?',
      a: 'Chicken adobo with extra sauce and a cold calamansi juice. If the canteen runs out, I eat the dried mango from my drawer.',
      photos: [
        { src: '/images/q7-a.jpg', caption: 'adobo with extra sauce' },
        { src: '/images/q7-b.jpg', caption: 'calamansi o’clock' },
      ],
    },
    {
      q: 'What is on your desk right now?',
      a: 'A mug of pens I never use, three sticky notes with phone numbers, a succulent named Biscuit, and a framed photo from the supply drive.',
      photos: [
        { src: '/images/q8-a.jpg', caption: 'desk, as of today' },
        { src: '/images/q8-b.jpg', caption: 'Biscuit the succulent' },
      ],
    },
    {
      q: 'What was the hardest moment, and what got you through it?',
      a: 'Last typhoon season, when three routes flooded in one day. We called every family, rerouted the drivers, and nobody went without a delivery. I got through it by splitting the day into one-hour pieces.',
      photos: [
        { src: '/images/q9-a.jpg', caption: 'rerouting day' },
        { src: '/images/q9-b.jpg', caption: 'team after the storm' },
      ],
    },
    {
      q: 'What would you tell someone just starting out?',
      a: 'Ask questions early and write things down. Nobody expects you to know everything in the first month, and the people who seem to know it all started out confused too.',
      photos: [
        { src: '/images/q10-a.jpg', caption: 'first week energy' },
        { src: '/images/q10-b.jpg', caption: 'notes on notes' },
      ],
    },
  ],

  wallTitle: 'Memory wall',
  wallNote: 'Little moments from the year, pinned up in no particular order.',
  wall: [
    { src: merl1, caption: '' },
    { src: merl2, caption: '' },
    { src: merl3, caption: '' },
    { src: merl4, caption: '' },
    { src: merl5, caption: '' },
    { src: merl6, caption: '' },
    { src: merl7, caption: '' },
    { src: merl8, caption: '' },
    { src: merl9, caption: '' },
    { src: merl10, caption: '' },
    // { src: '/images/wall-11.jpg', caption: 'thank-you notes' },
    // { src: '/images/wall-12.jpg', caption: 'group hug' },
  ],

  // nextLabel: 'Next month’s feature',
  nextName: 'Thank you!',
  thanks: 'Thank you for reading this page of the diary. See you next month.',
}

export default content

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
    'Our feature this month keeps the routes running, the volunteers fed, and the whole team laughing. Here are ten questions, a pile of photos, and a few sticky notes.',

  facts: [
    ['Team', 'Community Programs'],
    ['Here since', 'March 2021'],
    ['Snack of choice', 'Dried mango, always'],
    ['On repeat', 'Rainy-day lo-fi playlists'],
  ],

  hero: [
    { src: '/images/hero-1.jpg', caption: 'Mika, on a good Tuesday' },
    { src: '/images/hero-2.jpg', caption: 'the office plant corner' },
  ],

  entries: [
    {
      q: 'What does a normal day look like for you?',
      a: 'Up at six, rice and eggs, then at the office by eight to check the day’s visits. Mornings are phone calls and route planning. Afternoons are out in the field. I keep the last hour for notes so nothing follows me home.',
      photos: [
        { src: '/images/q1-a.jpg', caption: 'morning route check' },
        { src: '/images/q1-b.jpg', caption: 'rice and eggs fuel' },
      ],
    },
    {
      q: 'How did you end up here?',
      a: 'I started as a weekend volunteer in 2019, mostly carrying boxes. My supervisor asked if I wanted to help schedule the drivers, and I said yes before I knew what that meant. I applied for a full-time role the next year.',
      photos: [
        { src: '/images/q2-a.jpg', caption: 'volunteer days' },
        { src: '/images/q2-b.jpg', caption: 'box carrying champion' },
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
    { src: '/images/wall-01.jpg', caption: 'team lunch' },
    { src: '/images/wall-02.jpg', caption: 'rainy route' },
    { src: '/images/wall-03.jpg', caption: 'birthday cake' },
    { src: '/images/wall-04.jpg', caption: 'office selfie' },
    { src: '/images/wall-05.jpg', caption: 'delivery day' },
    { src: '/images/wall-06.jpg', caption: 'new plants' },
    { src: '/images/wall-07.jpg', caption: 'training day' },
    { src: '/images/wall-08.jpg', caption: 'coffee run' },
    { src: '/images/wall-09.jpg', caption: 'volunteer crew' },
    { src: '/images/wall-10.jpg', caption: 'sunset ride' },
    // { src: '/images/wall-11.jpg', caption: 'thank-you notes' },
    // { src: '/images/wall-12.jpg', caption: 'group hug' },
  ],

  // nextLabel: 'Next month’s feature',
  nextName: 'Thank you!',
  thanks: 'Thank you for reading this page of the diary. See you next month.',
}

export default content

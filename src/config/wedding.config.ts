const config = {
  couple: {
    bride: 'Анна',
    groom: 'Влад',
    brideEn: 'Anna',
    groomEn: 'Vlad',
  },
  event: {
    date: '2026-09-29T15:00:00',
    dateDisplay: '29 вересня 2026',
    day: 29,
    month: 8,
    year: 2026,
    place: 'садиба «Зелений сад» · Київська область',
  },
  hero: {
    photo:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&auto=format&fit=crop',
  },
  intro: {
    quote: 'Усе в цьому світі пишеться удвох — наше світло, наш сад, наш вересень',
    attrib: 'зі щоденника',
  },
  story: [
    { year: '2019', text: 'Випадкова зустріч на вечірці друзів — і раптом зрозуміли, що більше не хочеться йти' },
    { year: '2021', text: 'Перша спільна подорож до моря. Саме тоді зрозуміли, що поруч — назавжди' },
    { year: '2024', text: 'Він запропонував на світанку, серед поля. Вона сказала «так» ще до кінця фрази' },
    { year: '2026', text: 'Вересень. Наше весілля. Ви — частина цього дня, і ми безмежно раді' },
  ],
  timeline: [
    {
      time: '14:00',
      event: 'Збір гостей',
      sub: 'Welcome-зона з напоями та легкими закусками',
      icon: 'gathering' as const,
    },
    {
      time: '15:00',
      event: 'Церемонія',
      sub: 'Найзворушливіший момент — обмін клятвами',
      icon: 'ceremony' as const,
    },
    {
      time: '16:00',
      event: 'Фотосесія',
      sub: 'Спільна зйомка з молодятами та гостями',
      icon: 'photo' as const,
    },
    {
      time: '19:30',
      event: 'Перший танець',
      sub: 'Танець молодят та відкриття вечора',
      icon: 'dance' as const,
    },
    {
      time: '21:00',
      event: 'Весільний торт',
      sub: 'Солодке завершення урочистої частини',
      icon: 'cake' as const,
    },
  ],
  venue: {
    name: 'Зелений сад',
    address: 'Київська обл., Бориспільський р-н, с. Лісове, вул. Соснова 12',
    startTime: '15:00',
    dresscode: 'Sage & ivory',
    mapUrl: '#',
  },
  dresscode: {
    hint: 'Будемо вдячні, якщо ви підтримаєте нашу палітру в своїх образах',
    palette: [
      { hex: '#ffffff', name: 'Ivory' },
      { hex: '#f6f8f4', name: 'Cream' },
      { hex: '#e8efe4', name: 'Mist' },
      { hex: '#d6e2d0', name: 'Sage' },
      { hex: '#bfcfb8', name: 'Olive' },
      { hex: '#a8bfa1', name: 'Moss' },
    ],
  },
  organizers: [
    { role: 'Координатор', name: 'Олена Соснова', phone: '+38 067 765 43 21' },
  ],
  telegram: {
    link: 'https://t.me/anna_vlad_wedding',
    handle: '@anna_vlad_wedding',
  },
  guests: [
    { slug: 'vadim-dana', names: ['Вадим', 'Дана'] },
    { slug: 'sergiy', names: ['Сергій'] },
  ],
}

export type Guest = { slug: string; names: string[] }
export type WeddingConfig = typeof config
export default config

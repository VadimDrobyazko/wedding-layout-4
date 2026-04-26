const config = {
  couple: {
    bride: 'Анна',
    groom: 'Влад',
  },
  event: {
    date: '2026-09-20T15:00:00',
    dateDisplay: '20 вересня 2026',
    day: 20,
    month: 8, // 0-indexed: 8 = вересень
    year: 2026,
    place: "садиба «Зелений сад» · Київська область",
  },
  hero: {
    photo: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&auto=format&fit=crop',
    dim: 0.55,
  },
  intro: {
    quote: 'Усе в цьому світі пишеться удвох — наше світло, наш сад, наш вересень',
    attrib: 'зі щоденника',
  },
  timeline: [
    { time: '14:00', event: 'Збір гостей',      sub: 'Welcome-зона з напоями та легкими закусками', icon: 'gathering' as const },
    { time: '15:00', event: 'Церемонія',         sub: 'Найзворушливіший момент — обмін клятвами',    icon: 'ceremony'  as const },
    { time: '16:00', event: 'Фотосесія',         sub: 'Спільна зйомка з молодятами та гостями',      icon: 'photo'     as const },
    { time: '19:30', event: 'Перший танець',     sub: 'Танець молодят та відкриття вечора',           icon: 'dance'     as const },
    { time: '21:00', event: 'Весільний торт',    sub: 'Солодке завершення урочистої частини',         icon: 'cake'      as const },
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
    { role: 'Координатор', name: 'Анна Лісова',   phone: '+38 067 123 45 67' },
    { role: 'Координатор', name: 'Олена Соснова',  phone: '+38 067 765 43 21' },
  ],
  telegram: {
    link: 'https://t.me/anna_vlad_wedding',
    handle: '@anna_vlad_wedding',
  },
}

export type WeddingConfig = typeof config
export default config

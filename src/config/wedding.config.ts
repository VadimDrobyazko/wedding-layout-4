const config = {
  couple: {
    bride: 'Анна',
    groom: 'Влад',
  },
  event: {
    date: '2026-09-20T16:00:00',
    dateShort: '20.09.2026',
    day: 20,
    month: 9,
    year: 2026,
    city: 'Київ',
    preText: 'із радістю запрошуємо вас на наше весілля',
  },
  dresscode: {
    hint: 'Просимо дотримуватись палітри кольорів',
    palette: [
      { hex: '#FFFFFF', name: 'Білий' },
      { hex: '#F3F5F1', name: 'Молочний' },
      { hex: '#E2E8DD', name: 'Шавлія' },
      { hex: '#BFAF98', name: 'Бежевий' },
      { hex: '#8A7A63', name: 'Пісок' },
      { hex: '#4E3B2A', name: 'Шоколад' },
    ],
  },
  timeline: [
    { time: '15:00', event: 'Збір гостей', sub: 'Вітаємо наших гостей' },
    { time: '16:00', event: 'Виїзна церемонія', sub: 'Обмін клятвами та каблучками' },
    { time: '17:00', event: 'Фотосесія', sub: 'Спільні фото з молодятами' },
    { time: '18:00', event: 'Бенкет', sub: 'Святковий вечір та розваги' },
    { time: '23:00', event: 'Вечірка', sub: 'Танці до ранку', isDim: true },
  ],
  finalPhoto: {
    img: 'demo/final.jpg',
    imgAlt: 'Анна та Влад',
  },
}

export type WeddingConfig = typeof config
export default config

import Hero from '../components/Hero/Hero'
import IntroQuote from '../components/IntroQuote/IntroQuote'
import Calendar from '../components/Calendar/Calendar'
import Countdown from '../components/Countdown/Countdown'
import Timing from '../components/Timing/Timing'
import Location from '../components/Location/Location'
import Dresscode from '../components/Dresscode/Dresscode'
import Organizers from '../components/Organizers/Organizers'
import TelegramBlock from '../components/TelegramBlock/TelegramBlock'
import SiteFooter from '../components/SiteFooter/SiteFooter'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <Hero />
      <IntroQuote />
      <div className={styles.dateSection}>
        <Calendar />
        <Countdown />
      </div>
      <Timing />
      <Location />
      <Dresscode />
      <Organizers />
      <TelegramBlock />
      <SiteFooter />
    </>
  )
}

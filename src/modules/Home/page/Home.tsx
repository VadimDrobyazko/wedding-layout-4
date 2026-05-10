import Hero from '../components/Hero/Hero'
import Location from '../components/Location/Location'
import Calendar from '../components/Calendar/Calendar'
import Countdown from '../components/Countdown/Countdown'
import Dresscode from '../components/Dresscode/Dresscode'
import Timing from '../components/Timing/Timing'
import GuestGreeting from '../components/GuestGreeting/GuestGreeting'
import Organizers from '../components/Organizers/Organizers'
import Story from '../components/Story/Story'
import SiteFooter from '../components/SiteFooter/SiteFooter'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <Hero />
      <Location />
      <div className={styles.dateSection}>
        <Calendar />
        <Countdown />
      </div>
      <Dresscode />
      <Timing />
      <GuestGreeting />
      <Organizers />
      <Story />
      <SiteFooter />
    </>
  )
}

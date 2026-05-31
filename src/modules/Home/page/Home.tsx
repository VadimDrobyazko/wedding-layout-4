import Hero from '../components/Hero/Hero'
import Location from '../components/Location/Location'
import Countdown from '../components/Countdown/Countdown'
import Dresscode from '../components/Dresscode/Dresscode'
import Timing from '../components/Timing/Timing'
import GuestGreeting from '../components/GuestGreeting/GuestGreeting'
import Organizers from '../components/Organizers/Organizers'
import Story from '../components/Story/Story'
import SiteFooter from '../components/SiteFooter/SiteFooter'
export default function Home() {
  return (
    <>
      <Hero />
      <Location />
      <Dresscode />
      <Timing />
      <GuestGreeting />
      <Organizers />
      <Story />
      <Countdown />
      <SiteFooter />
    </>
  )
}

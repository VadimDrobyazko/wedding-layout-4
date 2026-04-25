import Hero from '../components/Hero/Hero'
import Countdown from '../components/Countdown/Countdown'
import Calendar from '../components/Calendar/Calendar'
import Dresscode from '../components/Dresscode/Dresscode'
import Timing from '../components/Timing/Timing'
import FinalPhoto from '../components/FinalPhoto/FinalPhoto'

export default function Home() {
  return (
    <>
      <Hero />
      <Countdown />
      <Calendar />
      <Dresscode />
      <Timing />
      <FinalPhoto />
    </>
  )
}

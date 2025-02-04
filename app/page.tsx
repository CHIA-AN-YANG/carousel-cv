
import { EmblaOptionsType } from 'embla-carousel'
import { NextPage } from 'next'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

const OPTIONS: EmblaOptionsType = { dragFree: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Home: NextPage = () => {

  return (
    <>
      <Carousel slides={SLIDES} options={OPTIONS} />
      <Footer />
    </>
  )
}

export default Home;
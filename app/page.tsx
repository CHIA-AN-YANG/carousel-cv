
import { EmblaOptionsType } from 'embla-carousel'
import { NextPage } from 'next'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import options from "./json/options.json";
import { Slide } from './interface';

const CAROUSELCONFIG: EmblaOptionsType = { dragFree: true, loop: true };
const OPTIONS = options as Slide[];

const Home: NextPage = () => {

  return (
    <>
      <Carousel
        config={CAROUSELCONFIG}
        options={OPTIONS} />
      <Footer />
    </>
  )
}

export default Home;
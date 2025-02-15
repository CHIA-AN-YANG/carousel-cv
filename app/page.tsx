
import { EmblaOptionsType } from 'embla-carousel'
import { Metadata, NextPage } from 'next'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import options from "@/public/json/options.json";
import { Slide } from './interface';
import Head from 'next/head';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'Anna Yang ⫸ CV ⫷',
  description: 'Anna Yang\'s Curriculum Vitae',
  icons: [
    { url: '/images/favicon.webp', rel: 'icon', type: 'image/webp' },
  ],
}

const CAROUSELCONFIG: EmblaOptionsType = {
  loop: true,
  breakpoints: {
    576: {
      watchDrag: false,
    },
  }
};
const OPTIONS = options as Slide[];

const Home: NextPage = () => {

  return (
    <>
      <Header></Header>
      <Carousel
        config={CAROUSELCONFIG}
        options={OPTIONS} />
      <Footer />
    </>
  )
}

export default Home;
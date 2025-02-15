
import { EmblaOptionsType } from 'embla-carousel'
import { NextPage } from 'next'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import options from "@/public/json/options.json";
import { Slide } from './interface';
import Head from 'next/head';
import Header from './components/Header';

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
      <Head>
        <title>Chia-An Yang</title>
        <meta name="description" content="my cv online" />
        <link rel="icon" href="/images/favicon.webp" />
      </Head>
      <Header></Header>
      <Carousel
        config={CAROUSELCONFIG}
        options={OPTIONS} />
      <Footer />
    </>
  )
}

export default Home;
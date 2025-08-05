
import { Metadata, NextPage } from 'next'
import Carousel from './components/Carousel'
import options from "@/public/json/options.json";
import { CustomEmblaOptions, Slide } from './interface';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Anna Yang ⫸ CV ⫷',
  description: 'Anna Yang\'s Curriculum Vitae - Explore the work and projects of Anna Yang',
  icons: [
    { url: '/images/favicon.webp', rel: 'icon', type: 'image/webp' },
  ],
  openGraph: {
    title: 'Anna Yang | Frontend Developer Portfolio',
    description: 'Explore the work and projects of Anna Yang...',
    url: 'https://anna-yang-dev.vercel.app/',
    type: 'website',
    images: [
      {
        url: 'https://anna-yang-dev.vercel.app/site-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Anna Yang Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anna Yang | Frontend Developer Portfolio',
    description: 'Explore the work and projects of Anna Yang...',
    images: ['https://anna-yang-dev.vercel.app/site-preview.jpg'],
  },
}

const CAROUSELCONFIG: CustomEmblaOptions = {
  loop: true,
  name: 'main',
  breakpoints: {
    '(max-width: 576px)': {
      watchDrag: false,
    },
  },
};
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
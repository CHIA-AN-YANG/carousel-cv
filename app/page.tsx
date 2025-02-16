
import { Metadata, NextPage } from 'next'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import options from "@/public/json/options.json";
import { CustomEmblaOptions, Slide } from './interface';
import Heading from './components/Heading';

export const metadata: Metadata = {
  title: 'Anna Yang ⫸ CV ⫷',
  description: 'Anna Yang\'s Curriculum Vitae',
  icons: [
    { url: '/images/favicon.webp', rel: 'icon', type: 'image/webp' },
  ],
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
      <Heading></Heading>
      <Carousel
        config={CAROUSELCONFIG}
        options={OPTIONS} />
      <Footer />
    </>
  )
}

export default Home;
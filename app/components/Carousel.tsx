"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { useDotButton, DotButton } from './DotBotton'
import { CustomEmblaOptions, Slide } from '../interface'
import { slideMapper } from '../util/slide-mapper'
import { Suspense, useEffect, useRef, useState } from 'react'
import Heading from './Heading'

type PropType = {
  config?: CustomEmblaOptions,
  options: Slide[]
}

const Carousel: React.FC<PropType> = (props) => {
  const { config, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(config);
  const hasNav = config?.name === 'main';

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const [activeRect, setActiveRect] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (hasNav) onNavClick(selectedIndex);
  }, [selectedIndex]);

  const handleButtonClick = (index: number) => {
    onDotButtonClick(index);
    if (hasNav) onNavClick(index);
  }

  const onNavClick = (index: number) => {
    if (navRef.current) {
      const navElements = navRef.current.querySelectorAll(".embla__dot");
      const target = navElements[index] as HTMLElement;

      if (target) {
        const { offsetLeft, offsetWidth } = target;
        setActiveRect({ left: offsetLeft, width: offsetWidth });
      }
    }
  };

  return (
    <main className="embla">
      <header className="embla__controls">
        <div ref={navRef} className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
            >
              <span className='button--text button--text__desktop'>
                {options[index].title || index + 1}
              </span>
              <span
                className='button--text button--text__mobile'
              >
                {options[index].titleMobile || index + 1}
              </span>
            </DotButton>
          ))}
        </div>
        {hasNav ? <svg
          className="nav__emphasis__active"
          width={activeRect.width}
          height="5rem"
          style={{ transform: `translateX(${activeRect.left}px)` }}
        >
          <rect width="100%" height="100%" fill="currentColor" rx="2" />
        </svg> : ""}
      </header>
      <Heading></Heading>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {options.map((slide) => (
            <section className="embla__slide" key={slide.id} id={slide.content?.slideKey ?? ""}>
              <div className="embla__slide__number" style={{ background: slide.color + ' var(--texture-bg)' }}>
                <Suspense fallback={<p>Loading...</p>}>
                  {slide.content?.slideKey ? slideMapper(slide.content.slideKey)({}) : ""}
                </Suspense>
                <div className="content__mask"></div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Carousel

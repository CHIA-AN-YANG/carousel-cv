"use client"
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { useDotButton, DotButton } from './DotBotton'
import { Slide } from '../interface'
import { slideMapper } from '../util/slide-mapper'
import { Suspense, useEffect, useRef, useState } from 'react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import BallIcon from './icons/Ball'

type PropType = {
  config?: EmblaOptionsType,
  options: Slide[]
}

const Carousel: React.FC<PropType> = (props) => {
  const { config, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(config, [WheelGesturesPlugin({
    forceWheelAxis: 'x'
  })]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const [activeRect, setActiveRect] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleItemClick = (index: number) => {
    if (navRef.current) {
      const navElements = navRef.current.querySelectorAll(".embla__dot");
      const target = navElements[index] as HTMLElement;

      if (target) {
        const { offsetLeft, offsetWidth } = target;
        console.log(offsetLeft, offsetWidth);
        setActiveRect({ left: offsetLeft, width: offsetWidth });
      }
    }
  };

  useEffect(() => {
    // Initialize position to first item
    handleItemClick(0);
  }, []);

  return (
    <main className="embla">
      <header className="embla__controls">
        <div ref={navRef} className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            >
              <span className='button--text button--text__desktop'>
                {options[index].title || index + 1}
              </span>
              <span
                className='button--text button--text__mobile'
                onClick={() => handleItemClick(index)}
              >
                {options[index].titleMobile || index + 1}
              </span>
            </DotButton>
          ))}
        </div>
        <svg
          className="nav__emphasis__active"
          width={activeRect.width}
          height="5rem"
          style={{ transform: `translateX(${activeRect.left}px)` }}
        >
          <rect width="100%" height="100%" fill="currentColor" rx="2" />
        </svg>
      </header>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {options.map((slide) => (
            <section className="embla__slide" key={slide.id} id={slide.content?.slideKey ?? ""}>
              {slide.content?.slideKey === 'intro' ? <BallIcon className="ball floating" /> : ""}
              <div className="embla__slide__number" style={{ background: slide.color + 'url("/images/texture/bg.svg")' }}>
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

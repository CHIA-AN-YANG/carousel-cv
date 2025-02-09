"use client"
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { useDotButton, DotButton } from './DotBotton'
import { Slide } from '../interface'
import { slideMapper } from '../util/slide-mapper'
import { Suspense, useRef } from 'react'
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

  return (
    <main className="embla">
      <header className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            >
              <span className='button__text'>
                {options[index].buttonText || index + 1}
              </span>
            </DotButton>
          ))}
        </div>
      </header>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {options.map((slide) => (
            <section className="embla__slide" key={slide.id} id={slide.content?.slideKey ?? ""}>
              {slide.content?.slideKey === 'intro' ? <BallIcon className="ball floating" /> : ""}
              <div className="embla__slide__number" style={{ background: slide.color + 'url("/images/bg.svg")' }}>
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

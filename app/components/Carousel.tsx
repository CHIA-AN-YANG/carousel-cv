"use client"
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { useDotButton, DotButton } from './DotBotton'
import { Slide } from '../interface'
import { slideMapper } from '../util/slide-mapper'
import { Suspense, useRef } from 'react'

type PropType = {
  config?: EmblaOptionsType,
  options: Slide[]
}

const Carousel: React.FC<PropType> = (props) => {
  const { config, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(config);
  const containerRef = useRef(null);

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
          {options.map(({ id, color, title }) => (
            <section className="embla__slide" key={id}>
              <div className="embla__slide__number" style={{ background: color + 'url("/bg.svg")' }}>
                {title ? <h2>{title}</h2> : ''}
                <Suspense fallback={<p>Loading...</p>}>
                  {slideMapper('intro')({})}
                </Suspense>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Carousel

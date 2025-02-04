"use client"
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { useDotButton, DotButton } from './DotBotton'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

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
            />
          ))}
        </div>
      </header>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <section className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Carousel

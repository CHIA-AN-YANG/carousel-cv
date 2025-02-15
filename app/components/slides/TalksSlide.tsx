"use client"
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import { useDotButton, DotButton } from '../DotBotton'
import talks from '@/public/json/talks.json'

interface Talk {
  id: number;
  title: string;
  description: string;
  media: {
    url: string;
    alt: string;
  }
}



function TalksSlide() {
  const options: EmblaOptionsType = { dragFree: true, loop: true, duration: 100 }

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  return (
    <div className="talks--container slide">
      <h2 className="talks--content__title content__title">Talks</h2>
      <div className="embla talks--content__description content__description">
        <div className="talks--slide__viewport" ref={emblaRef}>
          <div className="talks--slide__container">
            {talks.map((talk) => (
              <div className="talks--slide__item" key={talk.id}>
                <p>{talk.description}</p>
                <img
                  className="talks--slide__img"
                  src={"/images/talks/" + talk.media.url}
                  alt={talk.media.alt}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="talks--slide__controls">
          <div className="talks--slide__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'talks--slide__dot'.concat(
                  index === selectedIndex ? ' talks--slide__dot--selected' : ''
                )}
              >
                <span className='talks--slide__dot__text'>
                  {talks[index].title}
                </span>
              </DotButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalksSlide;
"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import { useDotButton, DotButton } from '../DotBotton'
import talks from '@/public/json/talks.json'
import Image from 'next/image'
import { CustomEmblaOptions } from '../../interface'

interface Talk {
  id: number;
  title: string;
  description: string;
  media: {
    url: string;
    alt: string;
  }
}
const TALKS = talks as Talk[];


function TalksSlide() {
  const options: CustomEmblaOptions = { dragFree: true, loop: true, duration: 100 }

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  return (
    <div className="talks--container slide">
      <h2 className="talks--content__title content__title">Talks</h2>
      <div className="embla talks--content__description content__description">
        <div className="talks--slide__viewport" ref={emblaRef}>
          <div className="talks--slide__container">
            {TALKS.map((talk) => (
              <div className="talks--slide__item" key={talk.id}>
                <p>{talk.description}</p>
                <div className='talks--slide__img'>
                  <Image
                    src={"/images/talks/" + talk.media.url}
                    alt={talk.media.alt}
                    sizes="(max-width: 768px) 100vw, (min-width: 768px) 100%"
                    fill
                  />
                </div>
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
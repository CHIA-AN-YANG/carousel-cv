"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { useDotButton, DotButton } from './DotBotton'
import { CustomEmblaOptions, Slide } from '../interface'
import { slideMapper } from '../util/slide-mapper'
import { Suspense, useEffect, useRef, useState } from 'react'
import Heading from './Heading'
import styles from './Carousel.module.scss'

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
        setActiveRect({ left: offsetLeft + 5, width: offsetWidth - 10 });
      }
    }
  };

  return (
    <main className={styles.embla}>
      <header className={styles.embla__controls}>
        <div ref={navRef} className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`${styles.embla__dot} ${index === selectedIndex ? styles.embla__dot_selected : ""}`}
            >
              <span className={`${styles.button_text} ${styles.button_text_desktop}`}>
                {options[index].title || index + 1}
              </span>
              <span
                className={`${styles.button_text} ${styles.button_text_mobile}`}
              >
                {options[index].titleMobile || index + 1}
              </span>
            </DotButton>
          ))}
        </div>
        {hasNav ? <svg
          className={styles.nav__emphasis__active}
          width={activeRect.width}
          style={{ transform: `translateX(${activeRect.left}px)` }}
        >
          <rect width="100%" height="100%" fill="currentColor" rx="2" />
        </svg> : ""}
      </header>
      <Heading></Heading>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {options.map((slide) => (
            <section className={styles.embla__slide}
              key={slide.id}
              id={slide.content?.slideKey ?? ""}
              style={{ "--slide-bg": slide.color } as React.CSSProperties}
            >
              <div className={styles.embla__slide__number}>
                {slide.content?.slideKey ? (
                  <Suspense fallback={<div>Loading...</div>}>
                    {slideMapper(slide.content.slideKey).then(Component => <Component />)}
                  </Suspense>
                ) : ""}
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

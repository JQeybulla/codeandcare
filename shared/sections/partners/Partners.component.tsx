'use client'
import './Partners.component.scss';
import {Exo_2} from "next/font/google";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const exo_2 = Exo_2({
  weight: ['500', '700'],
  subsets: ['latin']
});

export default function PartnersComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()]);
  return (
    <div className='partners'>
      <h1 className={exo_2.className}>Partnyorlarımız</h1>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            test
          </div>
          <div className="embla__slide">
            test
          </div>
          <div className="embla__slide">
            test
          </div>
        </div>
      </div>
    </div>
  )
}

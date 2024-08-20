'use client'
import useEmblaCarousel from "embla-carousel-react";
import './Carousel.component.scss';
import Autoplay from "embla-carousel-autoplay";
import carouselImage from './../../public/images/carousel/landing.svg';
import Image from "next/image";

export default function CarouselComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()]);
  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container'>
        <div className="embla__slide">
          <div className="left">
            <div className="middle">
              <h1>Gələcəyin <span>kodunu</span> <span>yazmağa</span> tələs!</h1>
              <button>Ətraflı</button>
            </div>
          </div>
          <div className="right">
            <Image src={carouselImage} alt={'carousel'} />
          </div>
        </div>
        {/*<div className="embla__slide">*/}
        {/*  <div className="left"></div>*/}
        {/*  <div className="right"></div>*/}
        {/*</div>*/}
        {/*<div className="embla__slide">*/}
        {/*  <div className="left"></div>*/}
        {/*  <div className="right"></div>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}

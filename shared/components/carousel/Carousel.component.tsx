'use client'
import useEmblaCarousel from "embla-carousel-react";
import './Carousel.component.scss';
import Autoplay from "embla-carousel-autoplay";
import mainImage from './../../../public/mainIcon.svg';
import grad1 from './../../../public/grad1.svg';
import grad2 from './../../../public/grad2.svg';
import Image from "next/image";
import Link from "next/link";
import {inspect} from "util";

export default function CarouselComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()]);
  return (
    <div className='embla'>
      <div className='embla__container'>
        <div className="embla__slide">
          <div className="left">
            <div className="middle">
              <h1>Gələcəyin <span>kodunu</span> <span>yazmağa</span> tələs!</h1>
              <Link href={'/directions'}>
                <button>Ətraflı</button>
              </Link>
            </div>
          </div>
          <div className="right">
            <Image src={mainImage} alt={'carousel'} />
            <Image className='grad1' src={grad1} alt={'carousel'} />
            <Image className='grad2' src={grad2} alt={'carousel'} />
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

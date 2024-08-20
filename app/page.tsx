import Image from "next/image";
import styles from "./page.module.css";
import CarouselComponent from "@/shared/components/Carousel.component";
import DirectionsComponent from "@/shared/sections/directions/Directions.component";
import PartnersComponent from "@/shared/sections/partners/Partners.component";

export default function Home() {
  return (
    <>
      <CarouselComponent />
      <DirectionsComponent />
      <PartnersComponent />
    </>
  );
}

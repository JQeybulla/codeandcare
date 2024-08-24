import Image from "next/image";
import styles from "./page.module.css";
import CarouselComponent from "@/shared/components/carousel/Carousel.component";
import DirectionsComponent from "@/shared/sections/directions/Directions.component";
import PartnersComponent from "@/shared/sections/partners/Partners.component";
import ApplyFormComponent from "@/shared/sections/apply-form/ApplyForm.component";
import FooterComponent from "@/shared/sections/footer/Footer.component";

export default function Home() {
  return (
    <>
      <CarouselComponent />
      <DirectionsComponent />
      <ApplyFormComponent />
      <PartnersComponent />
    </>
  );
}

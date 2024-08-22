'use client'
import styles from './Partners.module.scss';
import {Exo_2} from "next/font/google";
import yashat from './../../../public/images/Yashat.svg';
import bhos from './../../../public/images/bhos.svg';
import ucode from './../../../public/ucode .svg'
import secop from './../../../public/secop logo.svg';
import aastudio from './../../../public/aa studio logo.svg';
import magaz from './../../../public/magistratiraaz.svg';
import Image from "next/image";

const exo_2 = Exo_2({
  weight: ['500', '700'],
  subsets: ['latin']
});

export default function PartnersComponent() {
  return (
    <div className={styles.partners}>
      <h1 className={exo_2.className}>Partnyorlarımız</h1>
      <div className={styles.container}>
        <div className={styles.partner}>
          <Image src={ucode} alt='yashat' />
        </div>
        <div className={styles.partner}>
          <Image src={secop} alt='yashat' />
        </div>
        <div className={styles.partner}>
          <Image src={aastudio} alt='yashat' />
        </div>
        <div className={styles.partner}>
          <Image src={magaz} alt='yashat' />
        </div>
      </div>
    </div>
  )
}

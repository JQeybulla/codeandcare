import styles from './Footer.module.scss';
import logo from './../../../public/CODE.svg';
import Image from "next/image";
import {Exo_2} from "next/font/google";
import Link from "next/link";

const exo_2 = Exo_2({
  weight: ['500', '700'],
  subsets: ['latin']
});

export default function FooterComponent() {
  return (
    <div className={styles.footer}>
      <h1 className={exo_2.className}>Code and Care</h1>
      <div className={styles.container}>
        <div className={styles.right}>
          <Link href={'/directions/frontend'}><p>Frontend</p></Link>
          <Link href={'/directions/backendjava'}><p>Backend(Java)</p></Link>
          <Link href={'/directions/backendpython'}><p>Backend(Python)</p></Link>
          <Link href={'/directions/UIUX'}><p>UI/UX</p></Link>
        </div>
        <div className={styles.middle}>
          <Link href={'/directions'}><p>Tədris istiqamətləri</p></Link>
          <Link href={'/about-us'}><p>Haqqımızda</p></Link>
          {/*<p>Xəbərlər</p>*/}
          {/*<p>Blog</p>*/}
          <Link href={'/contact-us  '}><p>Əlaqə</p></Link>
        </div>
        <div className={styles.left}>
          <div>Facebook</div>
          <div>Instagram</div>
          <div>Linkedin</div>
        </div>
      </div>
    </div>
  )
}

import styles from './Footer.module.scss';
import logo from './../../../public/CODE.svg';
import Image from "next/image";
import {Exo_2} from "next/font/google";

const exo_2 = Exo_2({
  weight: ['500', '700'],
  subsets: ['latin']
});

export default function FooterComponent() {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <h1 className={exo_2.className}>Code and Care</h1>
        <div>Facebook</div>
        <div>Instagram</div>
        <div>Linkedin</div>
      </div>
      <div className={styles.middle}>
        <p>Tədris istiqamətləri</p>
        <p>Haqqımızda</p>
        <p>Xəbərlər</p>
        <p>Blog</p>
        <p>Əlaqə</p>
      </div>
      <div className={styles.right}>
        <p>Frontend</p>
        <p>Backend(Java)</p>
        <p>Backend(Python)</p>
        <p>UI/UX</p>
      </div>
    </div>
  )
}

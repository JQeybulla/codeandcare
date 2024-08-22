import styles from './Header.module.scss';
import Image from "next/image";
import logo from './../../../public/CODE.svg';
import Link from "next/link";

export default function HeaderComponent () {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <Image src={logo} alt={'logo'} />
        </Link>
      </div>

      <div className={styles.menu}>
          <Link href='/directions'><p>Tədris istiqamətləri</p></Link>
          <Link href='/about-us'><p>Haqqımızda</p></Link>
          <Link href='/news'><p>Xəbərlər</p></Link>
          <Link href='/blogs'><p>Blog</p></Link>
          <Link href='/contact-us'><p>Əlaqə</p></Link>
          <Link href='/apply'>
              <button>Müraciət et</button>
          </Link>
      </div>
    </div>
  )
}

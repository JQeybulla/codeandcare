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
        <p>Tədris istiqamətləri</p>
        <p>Haqqımızda</p>
        <p>Xəbərlər</p>
        <p>Blog</p>
        <p>Əlaqə</p>
        <button>Müraciət et</button>
      </div>
    </div>
  )
}

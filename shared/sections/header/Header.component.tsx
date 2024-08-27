'use client';
import styles from './Header.module.scss';
import Image from "next/image";
import logo from './../../../public/CODE.svg';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Hamburger from 'hamburger-react'
import {useState} from "react";


export default function HeaderComponent () {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false)
  console.log(pathname)
  return (
      <>
          <div className={styles.header}>
              <div className={styles.logo}>
                  <Link href='/'>
                      <Image src={logo} alt={'logo'}/>
                  </Link>
              </div>

              <div className={styles.menu}>
                  <Link href='/directions'><p className={`${pathname === '/directions' ? styles.active : ''}`}>Tədris
                      istiqamətləri</p></Link>
                  <Link href='/about-us'><p
                      className={`${pathname === '/about-us' ? styles.active : ''}`}>Haqqımızda</p></Link>
                  {/*<Link href='/news'><p className={`${pathname === '/news' ? styles.active : ''}`}>Xəbərlər</p></Link>*/}
                  {/*<Link href='/blogs'><p className={`${pathname === '/blogs' ? styles.active : ''}`}>Blog</p></Link>*/}
                  <Link href='/contact-us'><p className={`${pathname === '/contact-us' ? styles.active : ''}`}>Əlaqə</p>
                  </Link>
                  <Link href='/apply'>
                      <button>Müraciət et</button>
                  </Link>
              </div>
              <div className={styles.hamburger}>
                  <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>
          </div>
          {isOpen && <div className={`${styles.mobileHeader} ${isOpen ? styles.open : ''}`}>
              <Link href='/directions'><p className={`${pathname === '/directions' ? styles.active : ''}`}>Tədris
                  istiqamətləri</p></Link>
              <Link href='/about-us'><p
                  className={`${pathname === '/about-us' ? styles.active : ''}`}>Haqqımızda</p></Link>
              {/*<Link href='/news'><p className={`${pathname === '/news' ? styles.active : ''}`}>Xəbərlər</p></Link>*/}
              {/*<Link href='/blogs'><p className={`${pathname === '/blogs' ? styles.active : ''}`}>Blog</p></Link>*/}
              <Link href='/contact-us'><p className={`${pathname === '/contact-us' ? styles.active : ''}`}>Əlaqə</p>
              </Link>
              <Link href='/apply'>
                  <button>Müraciət et</button>
              </Link>
          </div>}
      </>
  )
}

import styles from './Directions.module.scss';
import { Exo_2 } from 'next/font/google'
import Link from "next/link";

const exo_2 = Exo_2({
  weight: ['500', '700'],
  subsets: ['latin']
});

export default function DirectionsComponent() {
  return (
    <div className={styles.directions} id='directions'>
      <h1 className={exo_2.className}>Tədris istiqamətləri</h1>
      <div className={`${styles.container} ${exo_2.className}`}>
        <Link href={'/directions/frontend'}>
          <div className={styles.direction}>
            <p>Frontend</p>
          </div>
        </Link>
        <Link href={'/directions/backendjava'}>
          <div className={styles.direction}>
            Backend (Java)
          </div>
        </Link>
        <Link href={'/directions/backendpython'}>
          <div className={styles.direction}>
            Backend (Python)
          </div>
        </Link>
        <Link href={'/directions/UIUX'}>
          <div className={styles.direction}>
            UI/UX
          </div>
        </Link>
      </div>
    </div>
  )
}

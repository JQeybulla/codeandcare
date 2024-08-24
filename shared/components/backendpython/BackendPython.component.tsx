import styles from './BackendPython.module.scss';
import {Exo_2} from "next/font/google";
import Link from "next/link";

const exo_2 = Exo_2({
  weight: ['500', '700'],
  subsets: ['latin']
});

export default function BackendPythonComponent() {
  return (
    <div className={styles.backendPython}>
      <h1 className={exo_2.className}>Backend (Python)</h1>
      <p>
        Backend (Python) təlimi həftədə 2 dəfə, hər dərs minimum 2 saat olmaqla həyata keçirilir.
        Təlim müddəti ümumilikdə 6 ayı əhatə edir. Dərslər həm nəzəri məlumatlar, həm də praktiki
        tapşırıqlar üzərində təşkil olunmuşdur.
      </p>
      <h3 className={exo_2.className}>Öyrənəcəyiniz texnologiyalar</h3>
      <ul>
        <li>HTML, CSS</li>
        <li>JavaScript</li>
        <li>Başlanğıc Data strukturları və Alqoritmlər</li>
        <li>Bootstrap</li>
        <li>SCSS</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Git / Github</li>
      </ul>
      <Link href={'/apply'}>
        <button>Müraciət et</button>
      </Link>
    </div>
  )
}

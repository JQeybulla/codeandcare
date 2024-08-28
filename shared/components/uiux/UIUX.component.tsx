import styles from './UIUX.module.scss';
import {Exo_2} from "next/font/google";
import Link from "next/link";

const exo_2 = Exo_2({
  weight: ['500', '700'],
  subsets: ['latin']
});

export default function UIUXComponent() {
  return (
    <div className={styles.uiux}>
      <h1 className={exo_2.className}>UI / UX</h1>
      <p>
        UI / UX təlimi həftədə 2 dəfə, hər dərs minimum 2 saat olmaqla həyata keçirilir.
        Təlim müddəti ümumilikdə 6 ayı əhatə edir. Dərslər həm nəzəri məlumatlar, həm də praktiki
        tapşırıqlar üzərində təşkil olunmuşdur.
      </p>
      <h3 className={exo_2.className}>Öyrənəcəyiniz texnologiyalar</h3>
      <ul>
        <li>Figma</li>
        <li>Tipoqrafiya</li>
        <li>Rəng nəzəriyyəsi</li>
        <li>Layout və Grids</li>
        <li>Auto Layout ilə işləmək</li>
        <li>Prototip yaratmaq</li>
        <li>Mobil və web uyğunluq</li>
        <li>Dizayn sistemləri</li>
        <li>İstifadəçi təcrübəsi testi</li>
        <li>İstifadəçi araşdırması</li>
        <li>İnformasiya Arxitekturası</li>
        <li>İstifadəçi axını</li>
        <li>İstifadəçi Mərkəzli Dizayn</li>
      </ul>
      <Link href={'/apply'}>
        <button>Müraciət et</button>
      </Link>
    </div>
  )
}

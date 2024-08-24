import styles from './AboutUs.module.scss';
import {Exo_2} from "next/font/google";
import Link from "next/link";

const exo_2 = Exo_2({
  weight: ['500', '700'],
  subsets: ['latin']
});

export default function AboutUs() {
  return (
    <div className={`${styles.aboutUs}`}>
      <h1 className={exo_2.className}>Code and Care tədris mərkəzi</h1>
      <h3 className={exo_2.className}>Biz kimik</h3>
      <p>
        Code & Care ölkəmizdə İT sahəsində təhsilin inkişafı və bu sahədə kadrların yetişdirilməsi
        məqsədi ilə yaradılmışdır. Tədris real layihələr üzərində və ölkənin nüfuzlu şirkətlərində
        iş təcrübəsinə malik peşəkar mütəxəssisslər tərəfindən aparılır.
      </p>
      <h3 className={exo_2.className}>Missiyamız</h3>
      <ul>
        <li>Ölkəmizin innovasiya sektoruna savadlı və təcrübəli kadrlar qazandırmaq</li>
        <li>İT sahəsində keyfiyyətli tədrisin təşkili</li>
        <li>Gənclərə rəqabətədavamlı biliklər qazandırmaq</li>
        <li>Gənclərin ölkənin nüfuzlu şirkətlərində iş tapmasına dəstək olmaq</li>
      </ul>
      <h3 className={exo_2.className}>Niyə biz?</h3>
      <ul>
        <li>Real layihələrə əsaslanan və ən son trendləri özündə birləşdirən tədris planı</li>
        <li>Təcrübəli müəllim heyəti</li>
        <li>Kursu müvəffəqiyyətlə bitirdikdən sonra tərəfdaş şirkətlərdə iş imkanları</li>
        <li>Pozitiv komanda və müasir şəraitli ofis</li>
      </ul>
      <Link href='/apply'>
        <button>Müraciət et</button>
      </Link>
    </div>
  )
}

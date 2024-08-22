'use client'
import {Exo_2} from "next/font/google";
import styles from './ApplyForm.module.scss';

const exo_2 = Exo_2({
  weight: ['500', '700'],
  subsets: ['latin']
});

export default function ApplyFormComponent() {
  return (
    <div className={styles.applyForm}>
      <h1 className={exo_2.className}>Müraciət formu</h1>
      <form>
        <select>
          <option value="0">Kursu Secin</option>
          <option value="1">Frontend</option>
          <option value="2">Backend (Java)</option>
          <option value="3">Backend (Python)</option>
          <option value="4">UI/UX</option>
        </select>

        <input type="text" placeholder='Adınız və soyadınız'/>
        <input type="text" placeholder='Telefon nömrəniz'/>
        <input type="text" placeholder='Email ünvanınız'/>
        <button>Göndər</button>
      </form>
    </div>
  )
}

import styles from './Contact.module.scss';

import {Exo_2} from "next/font/google";
const exo_2 = Exo_2({
  weight: ['500', '700'],
  subsets: ['latin']
});

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1 className={exo_2.className}>Contact form</h1>
      <form>
        <input type="text" placeholder='Adınız və Soyadınız'/>
        <input type="text" placeholder='Telefon nömrəniz'/>
        <input type="text" placeholder='Email ünvanınız'/>
        <textarea placeholder='Mesajınız'></textarea>
        <button>Göndər</button>
      </form>
    </div>
  )
}

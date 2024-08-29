'use client'
import {Exo_2} from "next/font/google";
import styles from './ApplyForm.module.scss';
import {useState} from "react";
import {toast, Toaster} from "react-hot-toast";

const exo_2 = Exo_2({
  weight: ['500', '700'],
  subsets: ['latin']
});

export default function ApplyFormComponent() {
  const [selectedDirection, setSelectedDirection] = useState<string | null>();
  const [fullname, setFullname] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]*$/;


  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (!selectedDirection) {
      toast.error('Müraciət etmək istədiyiniz kursu seçin!', {
        position: 'bottom-center',
        duration: 2300
      })
      return;
    }

    if (!fullname) {
      toast.error('Adınız və soyadınızı daxil edin!', {
        position: 'bottom-center',
        duration: 2300
      })
      return;
    }

    if (!phone) {
      toast.error('Telefon nömrənizi daxil edin!', {
        position: 'bottom-center',
        duration: 2300
      })
      return;
    }
    if (!phone) {
      toast.error('Email ünvanınızı daxil edin!', {
        position: 'bottom-center',
        duration: 2300
      })
      return;
    }
    if (!phoneRegex.test(phone)) {
      if (!emailRegex.test(email)) {
        toast.error('Telefon nömrəsinin formatı yanlışdır!', {
          position: 'bottom-center',
          duration: 2300
        })
      }
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error('Email formatı yanlışdır!', {
        position: 'bottom-center',
        duration: 2300
      })
    }
    const submittingObject = {
      courseName: selectedDirection,
      fullName: fullname,
      connectPhone: phone,
      email: email
    }
    console.log(submittingObject);
  }
  return (
    <div className={styles.applyForm} id='apply-form'>
      <h1 className={exo_2.className}>Müraciət formu</h1>
      <Toaster />
      <form>
        <select onChange={(e) => setSelectedDirection(e.target.value)}>
          <option value="0">Kursu Secin</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend Java">Backend (Java)</option>
          <option value="Backend Python">Backend (Python)</option>
          <option value="UIUX">UI/UX</option>
        </select>


        <input type="text" placeholder='Adınız və soyadınız' value={fullname} onChange={(e) => setFullname(e.target.value)}/>
        <input type="text" placeholder='Telefon nömrəniz' value={phone} onChange={(e) => setPhone(e.target.value)}/>
        <input type="email" placeholder='Email ünvanınız' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type='submit' onClick={handleSubmit}>Göndər</button>
      </form>
    </div>
  )
}

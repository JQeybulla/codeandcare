import ApplyFormComponent from "@/shared/sections/apply-form/ApplyForm.component";
import {Exo_2} from "next/font/google";
import styles from './apply.module.scss';
import PartnersComponent from "@/shared/sections/partners/Partners.component";
const exo_2 = Exo_2({
    weight: ['500', '700'],
    subsets: ['latin']
});
export default function ApplyPage() {
    return (
        <div className={styles.applyPage}>
            <h1 className={exo_2.className}>Müraciət formu</h1>
            <ApplyFormComponent />
            <PartnersComponent />
        </div>
    )
}

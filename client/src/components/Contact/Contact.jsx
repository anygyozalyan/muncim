import styles from './Contact.module.css'
import contactImage from '../../assets/images/contact.png'

function Contact() {
    return (
        <section id='contact' className={styles.contact_section}>

            <div className={styles.contact_imageBlock}>
                <img src={contactImage} alt="contact image" />
            </div>

            <div className={styles.contact_contentBlock}>
                <p className={styles.contact_title}>Who works for you</p>
                <h1 className={styles.contact_mainText}>About us in short</h1>
                <p className={styles.contact_subtitle}>
                    MUNCIM.RO was built on the idea that the labor market needs a change.
                </p>
                <p className={styles.contact_subtext}>
                    We all feel a problem in the human resources area, especially when it comes
                    to attracting competent candidates who are genuinely interested in a career
                    change, and on the other side, when these candidates are looking for a responsible
                    employer who can offer benefits that match their qualifications.
                    So, we rolled up our sleeves and got to work with a mixed team of marketing,
                    recruitment, and design specialists.After countless studies and sketches to arrive at
                    the best solution, we built it brick by brick and created this project aimed at filling
                    the gap between candidates and employers or recruitment firms.
                </p>
                <div className={styles.buttons_block}>
                    <button className={styles.purple_btn}>Contact Us</button>
                    <button>Learn More</button>
                </div>
            </div>



        </section>
    )
}

export default Contact

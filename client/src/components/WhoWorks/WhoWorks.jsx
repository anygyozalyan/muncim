import styles from './WhoWorks.module.css'
import whoWorksImage from '../../assets/images/whoWorks.png'

function WhoWorks() {
    return (
        <section id='who-works' className={styles.whoWorks_section}>

            <div className={styles.whoWork_imageBlock}>
                <img src={whoWorksImage} alt="who works image" />
            </div>

            <div className={styles.whoWorks_contentBlock}>
                <p className={styles.whoWorks_title}>Why muncim.ro?</p>
                <h1 className={styles.whoWorks_mainText}>We find you the best job</h1>
                <p className={styles.whoWorks_subtitle}>
                    If you’re looking for a job or want to stay updated with the latest job offers, keep reading.
                </p>
                <p className={styles.whoWorks_subtext}>
                    Aren’t you tired of platforms that make you search through a maze of ads, fill out form after form,
                    and send emails you never get replies to? All just for a simple job — these platforms make everything
                    feel overly complicated. Let us handle this entire process for you.
                </p>
                <div className={styles.buttons_block}>
                    <button className={styles.signUp_btn}>Sign Up</button>
                    <button>More</button>
                </div>
            </div>

        </section>
    )
}

export default WhoWorks

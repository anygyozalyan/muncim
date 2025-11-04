import styles from './HowWeWork.module.css'
import howWeWorkImage from '../../assets/images/howWeWork.png'

function HowWeWork() {
    return (
        <section id='how-we-work' className={styles.howWeWork_section}>

            <div className={styles.howWeWork_top}>

                <div className={styles.howWeWork_contentBlock}>
                    <p className={styles.howWeWork_title}>FOR Companies</p>
                    <h1 className={styles.howWeWork_mainText}>Keep costs under control</h1>
                    <p className={styles.howWeWork_subtitle}>
                        If you’re an employer or recruiter looking for talent, you’ve come to the right place.
                    </p>
                    <p className={styles.howWeWork_subtext}>
                        Clearly, financial resources are the biggest cost in finding candidates, and for us,
                        optimizing this cost is our top priority. In addition to lowering the “acquisition”
                        cost of candidates, our service also streamlines two other costs: human resources,
                        as you no longer need to involve extra staff in the recruitment process, and time,
                        thanks to a smart algorithm that provides real-time information about candidates matching
                        the profiles you’re looking for.
                    </p>
                    <div className={styles.buttons_block}>
                        <button className={styles.yellow_btn}>Contact Us</button>
                        <button>Learn More</button>
                    </div>
                </div>

                <div className={styles.howWeWork_imageBlock}>
                    <img src={howWeWorkImage} alt="how we work image" />
                </div>
            </div>

            <div className={styles.howWeWork_bottom}>

                <div className={styles.bottom_block}>
                    <p className={styles.bottom_title}>Our Services.</p>
                    <p className={styles.bottom_subtitle}>
                        Since we aim to position ourselves between candidates and employers or recruiters, we offer a wide range of services that cater to both sides. Here are some of our services: profile calibration, active candidates, online interviews, marketing campaigns, employer branding.
                    </p>
                    <button className={styles.bottom_btn}>Learn More</button>
                </div>

                <div className={styles.bottom_block}>
                    <p className={styles.bottom_title}>Employer Branding. Done Right.</p>
                    <p className={styles.bottom_subtitle}>
                        With a mixed team of marketers, recruiters, designers, and developers, each with extensive experience in their fields, and with dozens of employer branding campaigns done together, we believe we can make a significant difference in such campaigns. More details coming soon.
                    </p>
                    <button className={styles.bottom_btn}>Contact Us</button>
                </div>

            </div>

        </section>
    )
}

export default HowWeWork

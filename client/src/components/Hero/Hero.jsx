import styles from './Hero.module.css'
import { IoArrowDownOutline } from "react-icons/io5";
import heroImage from '../../assets/images/hero-image.png'


function Hero() {
    return (
        <div className={styles.hero}>

            <div className={styles.hero_left}>

                <p className={styles.hero_title}>The search is over</p>
                <h1 className={styles.hero_mainText}>we found you a new work</h1>
                <p className={styles.hero_subtitle}>On muncim.ro you don’t look for a job. We find one for you.</p>
                <p className={styles.hero_subtext}>
                    You register with your complete details, tell us what you’re good at and in which area you’d like to work,
                    and our team takes care of finding the best job for you based on your preferences. Give us some work to do!
                </p>

                <button className={styles.hero_btn}>Discover <IoArrowDownOutline /></button>
            </div>


            <div className={styles.hero_right}>
                <img src={heroImage} alt="hero image" />
            </div>

        </div>
    )
}

export default Hero

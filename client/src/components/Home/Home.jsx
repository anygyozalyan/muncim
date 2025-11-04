import styles from './Home.module.css'
import one from '../../assets/images/one.png'
import two from '../../assets/images/two.png'
import three from '../../assets/images/three.png'

function Home() {
    return (
        <section id='home' className={styles.home_section}>

            <div className={styles.home_left}>
                <p className={styles.home_title}>Here’s what you need to do</p>
                <h2 className={styles.home_mainText}>So we can find you a job</h2>
                <p className={styles.home_mainSubtext}>
                    Follow these 3 simple steps – and after you sign up, we’ll take care of everything.
                </p>

                <div className={styles.info_blocks}>

                    <div className={styles.info_block}>
                        <img src={one} alt="one image" />
                        <div className={styles.info_content}>
                            <p className={styles.title}>You sign up, very simply, in our database.</p>
                            <p className={styles.subtitle}>
                                This is the only thing you need to do — sign up here on the site,
                                and from there, you just wait while we take care of everything.
                            </p>
                        </div>
                    </div>

                    <div className={styles.info_block}>
                        <img src={two} alt="two image" />
                        <div className={styles.info_content}>
                            <p className={styles.title}>We search for the best job for you, across all platforms.</p>
                            <p className={styles.subtitle}>
                                Because we use an intelligent system, we’ll look for the job that suits you best.
                                Meanwhile, you just wait.
                            </p>
                        </div>
                    </div>

                    <div className={styles.info_block}>
                        <img src={three} alt="three image" />
                        <div className={styles.info_content}>
                            <p className={styles.title}>We connect you with your new employer.</p>
                            <p className={styles.subtitle}>
                                After we do the work and find the best match for you, it’s simple —
                                we send your details to the employer, and they’ll contact you for your new job.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.home_form}>
                <p className={styles.form_title}>Sign up now!</p>
                <p className={styles.form_subtitle}>
                    Fill in your details carefully and correctly — you don’t want to make a mistake
                    and miss out on a great opportunity. Pay close attention!
                </p>

                <form className={styles.form}>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <button className={styles.submit_btn}>Next</button>
                </form>
            </div>

        </section>
    )
}

export default Home

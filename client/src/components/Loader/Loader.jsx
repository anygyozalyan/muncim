import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/Loading.json';
import styles from './Loader.module.css';

function Loader() {
    return (
        <div className={styles.loaderOverlay}>
            <Lottie
                animationData={loadingAnimation}
                loop={true}
                autoplay={true}
                className={styles.lottie}
            />
        </div>
    );
}

export default Loader;
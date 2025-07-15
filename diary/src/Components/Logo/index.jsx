import styles from './style.module.css'
import logo from '../../assets/Time_Capsule_logo.png';

const Logo = () => {
    return (
        <img src={logo} alt="logo" className={styles.logo} />
    );
}

export default Logo 
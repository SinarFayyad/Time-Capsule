import styles from './navbar.module.css';
import logo from '../../assets/diary_logo_transparent.png';
import { useLocation } from "react-router-dom";

const Navbar = () => {

    const location = useLocation();

    return (
        <div className={styles.Navbar}>
            <div >
                <img src={logo} alt="logo" className={styles.logo} />
            </div>
            <div className={styles.title}>
                <h1>Dear Diary...</h1>
            </div>
            {location.pathname !== '/' &&
                <div className={styles.links}>
                    <h3>Add message</h3>
                    <h3>My messages</h3>
                </div>}
        </div>
    );
}

export default Navbar
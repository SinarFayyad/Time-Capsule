import styles from './style.module.css';
import logo from '../../assets/Time_Capsule_logo.png';
import { useNavigate , useLocation } from "react-router-dom";

const Navbar = () => {

    const navigate= useNavigate();
    const location = useLocation();

    return (
        <div className={`${styles.Navbar} main-color text-color`}>
            <div >
                <img src={logo} alt="logo" className={styles.logo} />
            </div>
            <div className={styles.title}>
                <h1>Dear Future Me...</h1>
            </div>
            {location.pathname !== '/' &&
                <div className={styles.links}>
                    <a onClick = {() => {navigate('/addMessage')}}><h3>Add message</h3></a>
                    <a onClick = {() => {navigate('/yourMessages')}}><h3>My messages</h3></a>
                </div>}
        </div>
    );
}

export default Navbar
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom';

<<<<<<< Updated upstream
const Button = ({path ='/', title , className}) => {

    const navigate = useNavigate();
    return (
        <button onClick={() => { navigate(path) }} className={`${styles.btn} ${className}`}>{title}</button>
=======
const Button = ({path ='/', title }) => {

    const navigate = useNavigate();
    return (
        <button onClick={() => { navigate({path}) }} className={styles.btn}>{title}</button>
>>>>>>> Stashed changes
    );
}

export default Button
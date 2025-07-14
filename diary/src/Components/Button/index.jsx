import styles from './style.module.css'
import { useNavigate } from 'react-router-dom';

const Button = ({path ='/', title }) => {

    const navigate = useNavigate();
    return (
        <button onClick={() => { navigate({path}) }} className={styles.btn}>{title}</button>
    );
}

export default Button
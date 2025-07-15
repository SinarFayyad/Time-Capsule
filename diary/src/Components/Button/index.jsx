<<<<<<< Updated upstream
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom';
=======
import './style.module.css'
>>>>>>> Stashed changes


const Button = ({ title , className, onClickListener}) => {

    return (
        <button className={` ${className}`} onClick={onClickListener} >{title}</button>
    );
}

// const Button = ({ path , title , className}) => {

//     const navigate = useNavigate();
//     return (
//         <button onClick={ () => {navigate(path)}}  className={` ${className}`}>{title}</button>
//     );
// }
export default Button
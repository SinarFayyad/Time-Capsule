import './style.module.css'
import { useNavigate } from 'react-router-dom';

const Button = ({path ='/', title , className}) => {

    const navigate = useNavigate();
    return (
        <button onClick={() => { navigate(path) }} className={` ${className}`}>{title}</button>

    );
}
export default Button
import './style.module.css'

const Input = ({text, placeholder , className}) => {

    return (
        <input type={text} placeholder={placeholder} className={`${className} border`}></input>
    );
}

export default Input
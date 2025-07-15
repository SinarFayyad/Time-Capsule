import './style.module.css'

const Input = ({text, placeholder}) => {

    return (
        <input type={text} placeholder={placeholder} className='border'></input>
    );
}

export default Input
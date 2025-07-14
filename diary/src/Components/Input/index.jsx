import './style.module.css'

const Input = ({text, msg}) => {

    return (
        <input type={text} placeholder={msg} className='border'></input>
    );
}

export default Input
import styles from './style.module.css';
import { Smile, Meh, Frown } from 'lucide-react'

const Message = ({ username, message, pic, mood }) => {

    let emogi;
    if(mood == "happy"){
        emogi= <Smile/>
    }else if(mood== "sad"){
        emogi= <Meh/>
    }else if (mood == "angry"){
        emogi= <Frown/>
    }
    return (
        <>
            <div className={`${styles.Message} border`}>

                <div className={styles.header}>
                    <p className={styles.name}>{username}</p>
                    <>{emogi}</>
                </div>
                <div className='divider'></div>
                <div className={styles.content}>
                    <img src={pic} alt="img " className='border'></img>
                    <p className={styles.message}>{message}</p>
                </div>
            </div>
        </>
    );
}

export default Message
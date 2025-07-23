import styles from './style.module.css';
import { Smile, Meh, Frown } from 'lucide-react'

const Message = ({ title, message, media, mood }) => {

    let emogi;
    if(mood == "happy"){
        emogi= <Smile/>
    }else if(mood== "neutral"){
        emogi= <Meh/>
    }else if (mood == "sad" ){
        emogi= <Frown/>
    }
    return (
        <>
            <div className={`${styles.Message} border`}>

                <div className={styles.header}>
                    <p className={styles.title}>{title}</p>
                    <div className={styles.icons}>{emogi}</div>
                </div>
                <div className='divider'></div>
                <div className={styles.content}>
                    {/* <img src={media} alt="img " className='border'></img> */}
                    <p className={styles.message}>{message}</p>
                </div>
            </div>
        </>
    );
}

export default Message
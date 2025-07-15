import styles from './style.module.css';
import { Smile, Meh, Frown } from 'lucide-react'

const UserMessage = ({ username, message, pic, mood }) => {

    return (
        <>
            <div className={`${styles.Message} border`}>

                <div className={styles.header}>
                    <p className={styles.name}>{username}</p>
                    <Smile />
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

export default UserMessage
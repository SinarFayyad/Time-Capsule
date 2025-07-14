import styles from './addMessage.module.css'
import Navbar from '../../Components/Navbar/navbar';
import { Smile, Meh, Frown ,Paperclip} from 'lucide-react'

const AddMessage = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.message}>
                <div className={styles.header}>
                    <p>Choose your mood</p>
                    <div className={styles.mood}>
                        <Smile />
                        <Meh />
                        <Frown />
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.content}>
                    <textarea className={styles.textarea} placeholder="Type your message here..."></textarea>
                    <Paperclip className={styles.paperclip}/>
                </div>
            </div>

        </div>
    );
}

export default AddMessage
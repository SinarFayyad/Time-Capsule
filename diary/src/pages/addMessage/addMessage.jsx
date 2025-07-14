import styles from './addMessage.module.css'
import Navbar from '../../Components/Navbar/navbar';
import {Smile} from 'lucide-react'
 
const AddMessage = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.message}>
                <p>Choose your mood</p>
                
            </div>

        </div>
    );
}
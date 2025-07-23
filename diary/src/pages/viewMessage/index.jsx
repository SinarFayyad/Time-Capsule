import styles from './style.module.css'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const ViewMessage =()=>{
    <div className={styles.container}>
        <Navbar/>
        <div className={styles.content}>
            <div className={styles.message}>
                
            </div>
        </div>
        <Footer/>
    </div>

}

export default ViewMessage
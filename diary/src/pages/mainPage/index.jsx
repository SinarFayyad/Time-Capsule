import styles from './style.module.css'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import SearchBar from '../../Components/Search'
// import UserMessage from '../../Components/UserMessage'
import Message from '../../Components/Message/index'
import { useNavigate } from 'react-router-dom'
import Messages from '../Messages/index'

function MainPage() {

  return (
    <div className={styles.page_wrapper}>
      <div className={styles.content_area}>
        <Navbar />
        <SearchBar />
        <div className={styles.main_container}>
          <h2 className={styles.title}>Your messages</h2>
          <div className={styles.userMessages}>
            <Messages/>
          </div>
          <h2 className={styles.title}>World's messages</h2>
          <div className={styles.worldMessages}>
            <Messages/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

}

export default MainPage
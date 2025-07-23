import styles from './style.module.css'
import Messages from '../Messages/index'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import SearchBar from '../../Components/Search'
import Capsules from '../../pages/Capsules/index'
import Filtrations from '../../Components/Filtrations'

function MainPage() {

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <h2 className={styles.title}>Your messages</h2>
        <div>
          <h3 className={styles.subtitle}>Upcoming</h3>
          <Capsules />
          <h3 className={styles.subtitle}>Memories</h3>
          <Messages content={"myMessages"} />
        </div>
        <h2 className={styles.title}>World's messages</h2>
        <div>
          <Filtrations />
          <Messages content={'allMessages'} />
        </div>
      </div>
      <Footer />
    </div>


  );

}

export default MainPage
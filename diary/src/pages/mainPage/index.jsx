import styles from './style.module.css'
import Messages from '../Messages/index'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import SearchBar from '../../Components/Search'
import Capsules from '../../pages/Capsules/index'
import Filtrations from '../../Components/Filtrations'

function MainPage() {

  return (
    <div className={styles.page_wrapper}>
      <div className={styles.content_area}>
        <Navbar/>
        <div className={styles.main_container}>
          <h2 className={styles.title}>Your messages</h2>
          <div>
            <Capsules/>
            <Messages content={"myMessages"}/>
          </div>
          <h2 className={styles.title}>World's messages</h2>
          <div>
            <Filtrations/>
            <Messages content={'allMessages'} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

}

export default MainPage
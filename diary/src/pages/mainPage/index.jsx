import styles from './style.module.css'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import SearchBar from '../../Components/Search'
// import UserMessage from '../../Components/UserMessage'
import Message from '../../Components/Message/index'
import { useNavigate } from 'react-router-dom'

function MainPage() {

  return (
    <>
      <Navbar />
      <SearchBar />
      <div className={styles.main_container}>
        <h2 className={styles.title}>Your messages</h2>
        <div className={styles.userMessages}>
          <Message username={"Sino(You)"} message={"I want to sleep"} mood="Smile"/>
          <Message username={"Sino(You)"} message={"I want to sleep"}mood="Smile"/>
          <Message username={"Sino(You)"} message={"I want to sleep"}mood="Smile"/>
          <Message username={"Sino(You)"} message={"I want to sleep"}mood="Smile"/>
        </div>
        <h2 className={styles.title}>World's messages</h2>
        <div className={styles.worldMessages}>
          <Message username={"Sino"} message={"I want to sleep"} mood="Smile"/>
          <Message username={"Sino"} message={"I want to sleep"}mood="Smile"/>
          <Message username={"Sino"} message={"I want to sleep"}mood="Smile"/>
          <Message username={"Sino"} message={"I want to sleep"}mood="Smile"/>
        </div>
      </div>
      <Footer />
    </>
  );

}

export default MainPage
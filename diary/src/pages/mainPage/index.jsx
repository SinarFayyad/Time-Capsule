import styles from './style.module.css'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import SearchBar from '../../Components/Search'
import UserMessage from '../../Components/UserMessage'
import { useNavigate } from 'react-router-dom'

function MainPage() {

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <SearchBar />
      <div className={styles.main_container}>
        <h2 className={styles.title}>Your messages</h2>
        <div className={styles.userMessages}>
          <UserMessage />
          <UserMessage />
          <UserMessage />
          <UserMessage />
        </div>
        <h2 className={styles.title}>World's messages</h2>
        <div className={styles.worldMessages}>
          <UserMessage />
          <UserMessage />
          <UserMessage />
          <UserMessage />
        </div>
      </div>
      <Footer />
    </>
  );

}

export default MainPage
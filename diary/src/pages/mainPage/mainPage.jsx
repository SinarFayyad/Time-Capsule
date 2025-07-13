import styles from './mainPage.module.css'
import Footer from '../../Components/Footer/footer'
import Navbar from '../../Components/Navbar/navbar'
import SearchBar from '../../Components/Search/search'
import UserMessage from '../../Components/UserMessage/userMessage'


function MainPage() {
  return (
    <div className={styles.main_container}>
      <Navbar />
      <SearchBar />
      <div className={styles.userMessages}>
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
      </div>
      <Footer />
    </div>
  );

}

export default MainPage
import styles from './style.module.css'
import { Search } from 'lucide-react';

const SearchBar = () => {

    return (
        <div className={styles.search_container}>
            <div className={styles.search_bar}>
                <input type="text" placeholder='Search...' className={styles.search}></input>
                <Search className={styles.search_btn} />
            </div>
        </div>
    );
}

export default SearchBar
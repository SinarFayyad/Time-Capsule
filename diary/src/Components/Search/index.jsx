import styles from './style.module.css'
import { Search } from 'lucide-react';
import Input from '../Input'

const SearchBar = () => {

    return (
        <div className={styles.search_container}>
            <div className={styles.search_bar}>
                <Input name="search" type="text" hint='Search...' className={`${styles.search}`}/>
                <Search className={styles.search_btn} />
            </div>
        </div>
    );
}

export default SearchBar
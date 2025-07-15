import styles from './style.module.css'
import { Search } from 'lucide-react';

const SearchBar = () => {

    return (
        <div className={styles.search_container}>
            <div className={styles.search_bar}>
                <Input name="search" 
                       type="text" 
                       hint='Search...' 
                       className={`${styles.search}` }
                       required="required" 
                       onChangeListener={console.log('hi')}/> 
                       {/*fetch info based on mood/country */}
                <Search className={styles.search_btn} />
            </div>
        </div>
    );
}

export default SearchBar
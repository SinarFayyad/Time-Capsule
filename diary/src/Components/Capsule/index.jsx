import styles from './style.module.css'

const Capsule = ({ title, reveal_date }) => {

    return (
        <>
            <div className={`${styles.capsule} border`}>
                <div className={styles.header}>
                    <p className={styles.title}>{title}</p>
                </div>
                <div className='divider'></div>
                <div className={styles.content}>
                    <p className={styles.reveal_date}>{reveal_date}</p>
                </div>
            </div>
        </>
    );
}

export default Capsule
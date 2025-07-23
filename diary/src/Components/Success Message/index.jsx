import styles from './style.module.css'

const SuccessMessage = ({ message , onClose}) => {

    return (
        <div className={styles.container}>
            <div className={`${styles.error} main-color`}>
                <h2 className={styles.message}>{message}</h2>
                <button
                    className={styles.closeButton}
                    onClose={onClose}
                >
                    ×
                </button>
            </div>
        </div>
    );
}
export default SuccessMessage

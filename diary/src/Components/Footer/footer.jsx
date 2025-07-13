import styles from './footer.module.css'

const Footer = ()=>{

    return (
        <div className= {styles.footer}>
            <h3 className={styles.sentence}> “Your thoughts are safe here. This is your private space.”</h3>
        </div>
    );
}

export default Footer
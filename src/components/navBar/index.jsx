import styles from '../navBar/navbar.module.css'


const Navbar = () => {
  return (
    <div className={styles.container}>
        
        <img src="/company-logo.png" alt="company-logo" />
        
        <div className={styles.linksContainer}>
            <button className={styles.btn}>Menu</button>
            <button className={styles.btn}>Contact-us</button>
            <button className={styles.link}>Share Link</button>
        </div>
    </div>
  )
}

export default Navbar
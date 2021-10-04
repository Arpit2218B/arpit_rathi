import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
    return (
        <div className={styles.navbar__container}>
            <div className={styles.navbar}>
                <a className={styles.navItem} href="#about">About</a>
                <a className={styles.navItem} href="#experience">Experience</a>
                <a className={styles.navItem} href="#featuredwork">Featured work</a>
                <a className={styles.navItem} href="#projects">Projects</a>
                <a className={styles.navItem} href="#contact">Contact</a>
                <a className={`${styles.navItem} ${styles.download}`} href="#contact">Resume</a>
            </div>
        </div>
    )
}

export default Navbar

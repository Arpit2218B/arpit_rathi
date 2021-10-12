import { Close, Menu } from '@material-ui/icons';
import { useState } from 'react';
import styles from '../styles/Navbar.module.scss';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isPC = useMediaQuery({ query: '(min-width: 840px)'});

    return (
        <div className={styles.navbar__container}>
            <div className={`${styles.navbar} ${styles.navbarTop}`}>
                <a className={styles.navItem} href="#about">
                    <img src="favicon.ico"></img>
                </a>
                {menuOpen ? <Close onClick={() => setMenuOpen(false)} /> : <Menu onClick={() => setMenuOpen(true)}/>}
            </div>
            {isPC || menuOpen ? (
                <div className={styles.navbar}>
                    <a className={styles.navItem} href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    <a className={styles.navItem} href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
                    <a className={styles.navItem} href="#featuredwork" onClick={() => setMenuOpen(false)}>Featured work</a>
                    <a className={styles.navItem} href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                    <a className={styles.navItem} href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                    <a className={`${styles.navItem} ${styles.download}`} href="#contact" onClick={() => setMenuOpen(false)}>Resume</a>
                </div>
            ) : null}
        </div>
    )
}

export default Navbar

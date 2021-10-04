import styles from '../styles/Layout.module.scss';

const Layout = ({ id, children }) => {
    return (
        <div id={id} className={styles.container}>
            {children}
        </div>
    )
}

export default Layout

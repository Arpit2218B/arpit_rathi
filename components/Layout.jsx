import styles from '../styles/Layout.module.scss';

const Layout = ({ id, fitContent, children }) => {
    return (
        <div id={id} className={fitContent ? `${styles.container} ${styles.fitContent}` : `${styles.container}`}>
            {children}
        </div>
    )
}

export default Layout

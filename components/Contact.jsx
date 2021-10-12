import { GitHub, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import styles from '../styles/Contact.module.scss';
import Layout from './Layout';
import StyledHeading from './StyledHeading';

const Contact = () => {
    return (
        <Layout id="contact" fitContent={true}>
            <>
            <StyledHeading>Contact</StyledHeading>
            <div className={styles.container}>
                <div className={styles.form}>
                    <input className={styles.input} placeholder="Email" type="email"></input>
                    <textarea className={`${styles.input} ${styles.textarea}`} placeholder="Your message"></textarea>
                    <button className={styles.button}>Send message</button>
                </div>
                <div className={styles.icons}>
                    <LinkedIn />
                    <GitHub />
                    <Instagram />
                    <Twitter />
                </div>
            </div>
            </>
        </Layout>
    )
}

export default Contact

import styles from '../styles/Hero.module.scss';
import Layout from './Layout';

const Hero = () => {
    return (
        <Layout>
            <div className={styles.hero__container}>
                <p className={`green-text ${styles.salutation}`}>Hi, my name is</p>
                <h1 className={styles.name}>Arpit Rathi.</h1>
                <h2 className={styles.title}>Web developer.</h2>
                <p className={styles.description}>
                    I am a software engineer specializing in building front-end applications using web technologies. Currently, I am working with <span className="green-text"> Commvault </span> as an Engineer.
                </p>
                <a href="#featuredwork" className={`green-text ${styles.check__work}`}>
                    Check my work
                </a>
            </div>
        </Layout>
    )
}

export default Hero

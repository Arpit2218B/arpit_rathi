import styles from '../styles/About.module.scss';
import Layout from './Layout';
import StyledHeading from './StyledHeading';

const About = () => {
    return (
        <Layout id="about">
            <StyledHeading>About me</StyledHeading>
            <div className={styles.container}>
                <div className={styles.left__section}>
                    <p className={styles.content}>
                    Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                    </p>
                    <p className={styles.content}>
                        Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                    </p>
                    <p className={styles.content}>
                        I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                    </p>
                    <p className={`${styles.content} green-text`}>
                        Some technologies I have worked with
                    </p>
                    <ul className={styles.content}>
                        <li>React Js</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                <div className={styles.right__section}>
                    <img className={styles.image} src="https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg"></img>
                </div>
            </div>
        </Layout>
    )
}

export default About

import { useState } from 'react';
import styles from '../styles/Experience.module.scss';
import Layout from './Layout';
import StyledHeading from './StyledHeading';

const Experience = () => {

    const [experience, setExperience] = useState('Commvault');

    return (
        <Layout id="experience">
            <StyledHeading>Experience</StyledHeading>
            <div className={styles.experience}>
                <ExperienceTabs setExperience={setExperience} />
                <ExperienceDetails experience={experience} />
            </div>
        </Layout>
    )
}

const ExperienceDetails = ({ position, experience, from, to, description, tech }) => {
    return (
        <div className={styles.details__container}>
            <h3 className={styles.position__experience}>Position @ {experience}</h3>
            <p className={styles.text}>2017 to 2019</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odit fugit vel tenetur voluptatum nisi magni, inventore quas ipsum ut quasi incidunt accusamus animi excepturi at, saepe ab ratione eveniet error voluptas voluptatem. Nesciunt voluptatem dolor voluptate cumque laborum magnam?</p>
            <p className={styles.text}>Technologies worked on</p>
            <ul className={styles.text}>
                <li>React Js</li>
                <li>Next Js</li>
            </ul>
        </div>
    )
}

const ExperienceTabs = ({ setExperience }) => {
    return (
        <div className={styles.tabs__container}>
            <span className={styles.tab} onClick={() => setExperience('Commvault')}>Commvault</span>
            <span className={styles.tab} onClick={() => setExperience('Kristal AI')}>Kristal AI</span>
            <span className={styles.tab} onClick={() => setExperience('Comfest')}>Comfest</span>
            <span className={styles.tab} onClick={() => setExperience('Position D')}>Position D</span>
            <span className={styles.tab} onClick={() => setExperience('Position E')}>Position E</span>
        </div>
    )
}

export default Experience

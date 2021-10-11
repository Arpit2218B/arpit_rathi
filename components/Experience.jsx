import { useState } from 'react';
import styles from '../styles/Experience.module.scss';
import { workExperience } from '../utils/data';
import Layout from './Layout';
import StyledHeading from './StyledHeading';

const Experience = () => {

    const [experience, setExperience] = useState(workExperience[0].name);

    return (
        <Layout id="experience">
            <StyledHeading>Experience</StyledHeading>
                <div className={styles.experience}>
                    <ExperienceTabs setExperience={setExperience} />
                    {workExperience.map(ex => ex.name == experience ? (
                        <ExperienceDetails key={ex.name} experience={ex} />
                    ) : null)}
                </div>
        </Layout>
    )
}

const ExperienceDetails = ({ experience }) => {
    const { position, name, from, to, description, tech } = experience;

    return (
        <div className={styles.details__container}>
            <h3 className={styles.position__experience}>{position} @ {name}</h3>
            <p className={styles.text}>{from} to {to}</p>
            <p className={styles.text}>{description}</p>
            <p className={styles.text}>Technologies worked on</p>
            <ul className={styles.text}>
                {
                    tech.map(t => (
                        <li key={t}>{t}</li>
                    ))
                }
            </ul>
        </div>
    )
}

const ExperienceTabs = ({ setExperience }) => {
    return (
        <div className={styles.tabs__container}>
            {workExperience.map(exp => (
                <span key={exp.name} className={styles.tab} onClick={() => setExperience(exp.name)}>{exp.name}</span>
            ))}
        </div>
    )
}

export default Experience

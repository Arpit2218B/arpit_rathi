import { FolderOutlined, GitHub } from '@material-ui/icons';
import { useState } from 'react';
import styles from '../styles/Projects.module.scss';
import Layout from './Layout';
import StyledHeading from './StyledHeading';

const Projects = () => {

    const [limit, setLimit] = useState(6);

    return (
        <Layout id="projects">
            <StyledHeading>Projects</StyledHeading>
            <div className={styles.projects__grid}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <p className={styles.load__more} onClick={() => {setLimit(limit + 3)}}>
                Load more
            </p>
        </Layout>
    )
}

const ProjectCard = () => {
    return (
        <div className={styles.project__card}>
            <div className={styles.icons}>
                <FolderOutlined style={{color: "64FFDA"}} fontSize="large" />
                <GitHub style={{color: "64FFDA", cursor: "pointer"}} />
            </div>
            <h3 className={styles.heading}>My project</h3>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nostrum atque perferendis id repellat architecto ad ex porro incidunt officia ab fugit in facere. Quidem ipsam similique eligendi praesentium soluta numquam, inventore itaque sit deserunt quaerat, ab accusamus minus veniam!</p>
            <div className={styles.tags__container}>
                <span className={styles.tags}>React Js</span>
                <span className={styles.tags}>Node Js</span>
                <span className={styles.tags}>Firebase</span>
            </div>
        </div>
    )
}

export default Projects

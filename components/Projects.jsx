import { FolderOutlined, GitHub } from '@material-ui/icons';
import { useState } from 'react';
import styles from '../styles/Projects.module.scss';
import { projects } from '../utils/data';
import Layout from './Layout';
import StyledHeading from './StyledHeading';

const Projects = () => {

    const [limit, setLimit] = useState(6);

    return (
        <Layout id="projects">
            <StyledHeading>Projects</StyledHeading>
            <div className={styles.projects__grid}>
                {projects.map(project => {
                    if(!project.featureWork)
                        return(
                            <ProjectCard key={project.name} data={project} />
                        )
                    else
                        return null
                })}
            </div>
            {/* <p className={styles.load__more} onClick={() => {setLimit(limit + 3)}}>
                Load more
            </p> */}
        </Layout>
    )
}

const ProjectCard = ({ data }) => {
    return (
        <div className={styles.project__card}>
            <div className={styles.icons}>
                <FolderOutlined style={{color: "64FFDA"}} fontSize="large" />
                <a href={data.externalURL.github}><GitHub style={{color: "64FFDA", cursor: "pointer"}} /></a>
            </div>
<<<<<<< HEAD
            <h3 className={styles.heading}>{data.name}</h3>
            <p className={styles.description}>{data.description}</p>
=======
            <h3 className={styles.heading}>Integrating Algolia Search with WordPress Multisite</h3>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nostrum atque perferendis id repellat architecto ad ex porro incidunt officia ab fugit in facere. Quidem ipsam similique eligendi praesentium.</p>
>>>>>>> 46a6a6fc19688982711ed428b37a86916f62362c
            <div className={styles.tags__container}>
                {data.technology.map(tech => (
                    <span key={tech} className={styles.tags}>{tech}</span>
                ))}
            </div>
        </div>
    )
}

export default Projects

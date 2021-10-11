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
            <h3 className={styles.heading}>{data.name}</h3>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.tags__container}>
                {data.technology.map(tech => (
                    <span key={tech} className={styles.tags}>{tech}</span>
                ))}
            </div>
        </div>
    )
}

export default Projects

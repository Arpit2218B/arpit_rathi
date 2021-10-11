import { GitHub, Web } from '@material-ui/icons';
import { style } from 'dom-helpers';
import styles from '../styles/FeaturedWork.module.scss';
import { projects } from '../utils/data';
import Layout from './Layout';
import StyledHeading from './StyledHeading';

const FeaturedWork = () => {
    return (
        <Layout id="featuredwork">
            <StyledHeading>Featured work</StyledHeading>
            {projects.map(project => project.featureWork ? (
                <FeaturedWorkData key={project.name} data={project} />
            ) : null)}
        </Layout>
    )
}

const FeaturedWorkData = ({ right, data }) => {
    return (
        <div className={right ? `${styles.featured__work} ${styles.right}` : `${styles.featured__work}`}>
            <FeaturedWorkDetails data={data} />
            <div className={styles.image__container}>
                <img className={styles.image} src="https://tradebrains.in/wp-content/uploads/2019/05/zerodha-kite-dashboard.png"></img>
            </div>
        </div>
    )
}

const FeaturedWorkDetails = ({ data }) => {
    return (
        <div className={styles.container}>
            <h3 className={`${styles.heading} green-text`}>{data.name}</h3>
            <div className={styles.description}>
                {data.description}
            </div>
            <div className={styles.tags__container}>
                {data.technology.map(tech => (
                    <span key={tech} className={styles.tags}>{tech}</span>
                ))}
            </div>
            <div className={styles.icons}>
                <a href={data.externalURL.github}><GitHub /></a>
                <a href={data.externalURL.hosting}><Web /></a>
            </div>
        </div>
    )
}

export default FeaturedWork

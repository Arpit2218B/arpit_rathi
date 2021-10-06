import { GitHub, Web } from '@material-ui/icons';
import { style } from 'dom-helpers';
import styles from '../styles/FeaturedWork.module.scss';
import Layout from './Layout';
import StyledHeading from './StyledHeading';

const FeaturedWork = () => {
    return (
        <Layout id="featuredwork">
            <StyledHeading>Featured work</StyledHeading>
            <FeaturedWorkData />
            <FeaturedWorkData right={true} />
            <FeaturedWorkData />
        </Layout>
    )
}

const FeaturedWorkData = ({ right }) => {
    return (
        <div className={right ? `${styles.featured__work} ${styles.right}` : `${styles.featured__work}`}>
            <FeaturedWorkDetails />
            <div className={styles.image__container}>
                <img className={styles.image} src="https://tradebrains.in/wp-content/uploads/2019/05/zerodha-kite-dashboard.png"></img>
            </div>
        </div>
    )
}

const FeaturedWorkDetails = () => {
    return (
        <div className={styles.container}>
            <h3 className={`${styles.heading} green-text`}>Project Name</h3>
            <div className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam exercitationem quam sunt dolores unde numquam accusantium. Dignissimos accusamus dolores quidem in incidunt cumque reprehenderit officia optio id, consequatur eaque commodi, quaerat laudantium veniam alias nihil explicabo ad autem fugiat repudiandae!
            </div>
            <div className={styles.tags__container}>
                <span className={styles.tags}>HTML</span>
                <span className={styles.tags}>CSS</span>
                <span className={styles.tags}>Javascript</span>
            </div>
            <div className={styles.icons}>
                <GitHub />
                <Web />
            </div>
        </div>
    )
}

export default FeaturedWork

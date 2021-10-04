import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import FeaturedWork from '../components/FeaturedWork';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Experience />
      <FeaturedWork />
      <Projects />
      <Contact />
      <center>
        <span className={styles.footer}>Designed and developed by Arpit Rathi</span>
      </center>
    </>
  )
}

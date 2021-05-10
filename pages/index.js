import styles from '../styles/Home.module.css';
import Link from "next/link";
import Layout from "../components/Layout";
import InvertedBtn from '../components/InvertedBtn';
import Btn from '../components/Btn';

export default function Home() {
    return (
      <Layout pageTitle="Home">
        <div>
          <nav className={styles.landingNav}>
            <div>
              <img className={styles.logo} src="/images/logo.svg"/>
            </div>
            <div>
              <Link href="/"><a className={styles.landingNavLinks}>Home</a></Link>
            </div>
            <div>
              <Link href="/"><a className={styles.landingNavLinks}>Product</a></Link>
            </div>
            <div>
              <Link href="/"><a className={styles.landingNavLinks}>Features</a></Link>
            </div>
            <div className={styles.signupBtn}>
              <InvertedBtn link="/login" text="Login"/>
            </div>
          </nav>
          <section className={styles.heroSection}>
            <div>
              <h1 className={styles.heroHeader}>Helping you <span className={styles.pop}>eliminate</span> them bugs</h1>
              <p className={styles.heroInfo}>A Simple yet powerful bug and project tracker that aids you on accomplishing what you need to do.</p>
              <Btn text="Get Started" link="/login"/>
            </div>
            <div>
              <img className={styles.heroImage} src="/images/hunt-list.svg"/>
            </div>
          </section>
        </div>
      </Layout>
    )
}
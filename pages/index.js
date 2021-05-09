import styles from '../styles/Home.module.css';
import Link from "next/link";
import Layout from "../components/Layout";
import InvertedBtn from '../components/inverted-btn';

export default function Home() {
    return (
      <Layout>
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
            <div>
              <InvertedBtn link="/login" text="Sign up"/>
            </div>
          </nav>
          <h1>Landing page</h1>
          <a href="/login">Login</a>
        </div>
      </Layout>
    )
}
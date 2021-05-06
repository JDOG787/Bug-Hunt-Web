import styles from '../styles/Home.module.css';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
      <div>
  
        <nav className={styles.landingNav}>
          <div>
            <Image
                src="/logo.svg"
                alt="logo"
                width={200}
                height={100}
              />
          </div>
          <div>
            <Link href="/"><a className={styles.landingNavLinks}>Home</a></Link>
          </div>
        </nav>
        <h1>Landing page</h1>
        <a href="/login">Login</a>
      </div>
    )
}
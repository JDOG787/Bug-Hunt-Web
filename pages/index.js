import styles from '../styles/Home.module.css';
import Image from "next/image"

export default function Home() {
    return (
      <div>
        <Image
          src="/unknown.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <h1>Landing page</h1>
        <a href="/login">Login</a>
      </div>
    )
}
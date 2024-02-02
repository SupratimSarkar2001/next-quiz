import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Welcome! Take a Quiz on Next.Js</h1>
        <p>Welcome to the "Next.js Knowledge Challenge," where you can put your Next.js expertise to the test! This quiz is designed for developers and enthusiasts who want to showcase their understanding of Next.js, the powerful React framework for building modern web applications. Get ready to dive into questions covering concepts, features, and best practices related to Next.js.          
        </p>
      </div>
      <div>
        <h3 className={styles.text_h3}>Challenge Yourself with the Quiz</h3>
        <Link href={"/quiz"} className={styles.start_button}>Start Quiz</Link>
      </div>
    </main>
  );
}

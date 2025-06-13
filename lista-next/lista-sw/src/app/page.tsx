import Image from "next/image";
import styles from "./page.module.css";
import SwSearch from "./ui/sw-search-char"


export default function Home() {
  return (
   
    <main>
      <header className={styles.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="Star Wars Logo" className={styles.logo}/>
      <h1 className={styles.h1}> A long time ago in a galaxy far far away...</h1>
      <SwSearch />
      </header>
    </main>
  );
}

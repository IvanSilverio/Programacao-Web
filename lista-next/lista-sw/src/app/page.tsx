import Image from "next/image";
import styles from "./page.module.css";
import SwSearch from "./ui/sw-search-char"

export default function Home() {
  return (
   
    <main>
      <h1>A long time ago in a galaxy far far away...</h1>
      <SwSearch />
    </main>
  );
}

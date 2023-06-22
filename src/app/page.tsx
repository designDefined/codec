"use client";
import styles from "./page.module.scss";

export default function Home() {
  window.addEventListener("wheel", (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
  });
  return <main className={styles.main}>codec</main>;
}

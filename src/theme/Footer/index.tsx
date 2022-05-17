import React from "react";

import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.column}>
          <h2 className={styles.heading}>Learning TypeScript</h2>
          <a href="/articles">Articles</a>
          <a href="/projects">Projects</a>
        </div>
        <div className={styles.column}>
          <button> get the book</button> (GH) (TW)
        </div>
      </div>
      <div className={styles.credits}>
        Built with 💖 by <a href="https://joshuakgoldberg.com">Josh Goldberg</a>{" "}
        using Docusaurus and TypeScript, and deployed on Vercel.
        <br />
        Site designed by <a href="https://jackieliuart.com">Jackie Liu</a>.
      </div>
    </footer>
  );
}

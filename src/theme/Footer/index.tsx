import React from "react";
import { OutlineLink } from "../OutlineLink";

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
          {/* Todo: arrow glyph */}
          <OutlineLink className={styles.getTheBook}>
            Get the Book on O'Reilly ↗
          </OutlineLink>
          <div className={styles.icons}>
            <a
              href="https://github.com/JoshuaKGoldberg/learning-typescript"
              target="_blank"
            >
              <img
                alt="GitHub Icon"
                className={styles.icon}
                src="/img/github-icon.svg"
              />
            </a>
            <a href="https://twitter.com/JoshuaKGoldberg" target="_blank">
              <img
                alt="Twitter Icon"
                className={styles.icon}
                src="/img/twitter-icon.svg"
              />
            </a>
          </div>
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

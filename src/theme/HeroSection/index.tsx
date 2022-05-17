import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

export const HeroSection = () => {
  // todo: take from constants
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.heading}>
          <span className={styles.together}>Companion projects</span> and
          articles for{" "}
          <span className={styles.together}>Learning TypeScript</span>
        </h1>
        <div className={styles.author}>By Josh Goldberg</div>
      </div>
      <img
        alt="Book cover: Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript"
        className={styles.cover}
        src="/img/cover.png"
      />
    </section>
  );
};

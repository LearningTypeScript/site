import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import React from "react";
import { MainArea } from "../MainArea";

import styles from "./styles.module.css";

export const HeroSection = () => {
  // todo: take from constants
  const { siteConfig } = useDocusaurusContext();

  return (
    <MainArea as="header" className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.heading}>
          Companion <span className={styles.together}>projects</span> and
          articles for{" "}
          <span className={styles.together}>Learning TypeScript</span>
        </h1>
        <div className={styles.author}>By Josh Goldberg</div>
      </div>
      <div className={styles.cover}>
        <img
          alt="Book cover: Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript"
          src="/img/cover.png"
        />
      </div>
    </MainArea>
  );
};

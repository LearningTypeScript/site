import React from "react";
import { MainArea } from "../MainArea";

import styles from "./styles.module.css";

export const HeroSection = () => {
  return (
    <MainArea as="header" className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.heading}>
          The #1 TypeScript book for JavaScript developers out today
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

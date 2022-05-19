import React from "react";
import { BookLink } from "../BookLink";
import { MainArea } from "../MainArea";

import styles from "./styles.module.css";

export const ReadTheBook = () => {
  return (
    <div className={styles.readTheBook}>
      <MainArea className={styles.mainArea} size="thin">
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Read the
            <br />
            Learning TypeScript
            <br className={styles.splitBook} /> Book
          </h2>
          <BookLink>Get it on O'Reilly</BookLink>
        </div>
        <p className={styles.right}>
          If you find this website useful, consider diving into the full
          Learning TypeScript book on O'Reilly.
          <br />
          <br />
          Go from knowing nothing about “types” or "type systems" to full
          mastery of TypeScript fundamentals – whether you're a beginner or
          advanced JavaScript programmer.
        </p>
      </MainArea>
    </div>
  );
};

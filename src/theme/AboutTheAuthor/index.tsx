import React from "react";
import { BookLink } from "../BookLink";
import { MainArea } from "../MainArea";

import styles from "./styles.module.css";

export const AboutTheAuthor = () => {
  return (
    <div className={styles.aboutTheAuthor}>
      <MainArea className={styles.mainArea} size="thin">
        <div className={styles.left}>
          <img className={styles.josh} src="/img/josh-red-220px.jpg" />
        </div>
        <p className={styles.right}>
          <h2 className={styles.heading}>About the author</h2>
          <div className={styles.name}>Josh Goldberg</div>
          Hi, I'm Josh! I'm a frontend developer from New York with a passion
          for open source, static analysis, and the web. I'm a full time open
          source maintainer and work on projects in the TypeScript ecosystem
          such as typescript-eslint and TypeStat. I'm passionate about bringing
          accessible education to the masses in a sustainable way.
          <BookLink
            className={styles.visitMySite}
            href="https://joshuakgoldberg.com"
          >
            Visit my Site
          </BookLink>
        </p>
      </MainArea>
    </div>
  );
};

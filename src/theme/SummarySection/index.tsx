import React from "react";
import clsx from "clsx";

import { MainArea } from "../MainArea";
import styles from "./styles.module.css";
import { BookLinkAnchor } from "../BookLinkAnchor";
import { useGetTheBook } from "@site/src/utils/useGetTheBook";

export const SummarySection = () => {
  const { links } = useGetTheBook();

  return (
    <MainArea className={styles.summary}>
      <p className={clsx(styles.contents, styles.primary)}>
        <em>Learning TypeScript</em> will take you from knowing nothing about
        "types" or a "type system" to full mastery of the fundamentals of
        TypeScript.
      </p>
      <p className={clsx(styles.contents, styles.secondary)}>Get it on:</p>
      <div className={styles.linksContainer}>
        {links.map((link) => (
          <BookLinkAnchor href={link.href}>{link.children}</BookLinkAnchor>
        ))}
      </div>
    </MainArea>
  );
};

import clsx from "clsx";
import React from "react";
import { OutlineLink, OutlineLinkProps } from "../OutlineLink";

import styles from "./styles.module.css";

export interface CardsAreaProps {
  children: React.ReactNode;
  className?: string;
  description: string;
  heading: string;
  link: Pick<OutlineLinkProps, "children" | "href">;
}

export const CardsArea = ({
  children,
  className,
  description,
  heading,
  link,
}: CardsAreaProps) => {
  return (
    <div className={clsx(styles.cardsArea, className)}>
      <div className={styles.textArea}>
        <h2 className={styles.heading}>{heading}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.cardsList}>{children}</div>
      <OutlineLink className={styles.seeAll} {...link} />
    </div>
  );
};

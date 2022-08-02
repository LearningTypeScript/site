import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

export interface CardProps {
  className?: string;
  description: string;
  href: string;
  meta?: string;
  title: string;
}

export const Card = ({
  className,
  description,
  href,
  meta,
  title,
}: CardProps) => {
  return (
    <a className={clsx(styles.card, className)} href={href}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      {meta && <div className={styles.meta}>{meta}</div>}
    </a>
  );
};

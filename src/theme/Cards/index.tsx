import clsx from "clsx";
import React from "react";
import { Card, CardProps } from "../Card";
import { OutlineLink, OutlineLinkProps } from "../OutlineLink";

import styles from "./styles.module.css";

export interface CardsProps {
  cards: CardProps[];
  className?: string;
  description: string;
  heading: string;
  link: Pick<OutlineLinkProps, "children" | "href">;
}

export const Cards = ({
  cards,
  className,
  description,
  heading,
  link,
}: CardsProps) => {
  return (
    <div className={clsx(styles.cards, className)}>
      <h2 className={styles.heading}>{heading}</h2>
      <p>{description}</p>
      <div className={styles.cardsList}>
        {cards.map((card) => (
          <Card className={styles.card} {...card} key={card.href} />
        ))}
      </div>
      <OutlineLink className={styles.seeAll} {...link} />
    </div>
  );
};

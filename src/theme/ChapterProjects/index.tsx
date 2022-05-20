import clsx from "clsx";
import React from "react";
import { Card, CardProps } from "../Card";

import styles from "./styles.module.css";

export interface CardsAreaProps {
  className?: string;
  index: number;
  name: string;
  projects: CardProps[];
}

export const ChapterProjects = ({
  className,
  index,
  name,
  projects,
}: CardsAreaProps) => {
  const label = index < 10 ? `0${index}` : index;

  return (
    <div className={clsx(styles.chapterProjects, className)}>
      <div className={styles.textArea}>
        <h2 className={styles.heading}>Chapter {label}</h2>
        <p>{name}</p>
      </div>
      <a
        className={styles.goToHub}
        href={name.replace(/ /g, "-").toLowerCase()}
      >
        {/* TODO: arrow icon */}
        Go to Chapter {label} Hub ➡
      </a>
      <div className={styles.cards}>
        {projects.map((project) => (
          <Card
            className={styles.card}
            {...project}
            key={project.href}
            meta={`${label}. ${project.meta}`}
          />
        ))}
      </div>
    </div>
  );
};

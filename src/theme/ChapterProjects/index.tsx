import { ChapterProjectData } from "@site/src/utils/useChapters";
import clsx from "clsx";
import React from "react";
import { Card } from "../Card";

import styles from "./styles.module.css";

const levelEmojis = {
  appetizer: "🥗",
  entree: "🍲",
  dessert: "🍰",
};

export interface ChapterProjectsProps {
  className?: string;
  index: number;
  name: string;
  projects: ChapterProjectData[];
}

export const ChapterProjects = ({
  className,
  index,
  name,
  projects,
}: ChapterProjectsProps) => {
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
            key={project.name}
            meta={`${label}. ${name}`}
            description={`${levelEmojis[project.level]} ${
              project.level[0].toUpperCase() + project.level.slice(1)
            } Project`}
            href={project.path}
            title={project.name}
          />
        ))}
      </div>
    </div>
  );
};

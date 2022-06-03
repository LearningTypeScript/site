import React from "react";
import { Card, CardProps } from "../Card";
import { CardsArea } from "../CardsArea";
import { MainArea } from "../MainArea";

import styles from "./styles.module.css";

const projects: CardProps[] = [
  {
    description: "🥗 Appetizer Project",
    href: "/from-javascript-to-typescript/the-typeinator/",
    meta: "01. From JavaScript to TypeScript",
    title: "The Typeinator",
  },
  {
    description: "🥗 Appetizer Project",
    href: "/the-type-system/system-of-a-clown",
    meta: "02. The Type System",
    title: "System of a Clown",
  },
  {
    description: "🥗 Appetizer Project",
    href: "/unions-and-literals/primitive-cooking",
    meta: "03. Unions and Literals",
    title: "Primitive Cooking",
  },
  {
    description: "🍲 Entree Project",
    href: "/unions-and-literals/various-lawyerings",
    meta: "03. Unions and Literals",
    title: "Narrow Trails",
  },
  {
    description: "🥗 Appetizer Project",
    href: "/objects/various-lawyerings",
    meta: "04. Objects",
    title: "Various Lawyerings",
  },
  {
    description: "🍲 Entree Project",
    href: "/objects/the-typer",
    meta: "04. Objects",
    title: "The Typer",
  },
];

export const ProjectsSection = () => {
  return (
    <MainArea>
      <CardsArea
        description="Hands on real world projects that will help you exercise your knowledge
      of TypeScript."
        heading="Projects"
        link={{
          children: "See all XYZ projects",
          href: "/projects",
        }}
      >
        {projects.map((project) => (
          <Card className={styles.card} {...project} key={project.href} />
        ))}
      </CardsArea>
    </MainArea>
  );
};

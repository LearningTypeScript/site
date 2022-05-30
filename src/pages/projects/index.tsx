import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import { ChapterProjects } from "../../theme/ChapterProjects";

import { MainArea } from "../../theme/MainArea";

import styles from "./styles.module.css";

const chapters = Array.from(
  [
    "From Javascript To Typescript",
    "The Type System",
    "Unions And Literals",
    "Objects",
    "Functions",
    "Arrays",
    "Interfaces",
    "Classes",
    "Type Modifiers",
    "Generics",
    "Declaration Files",
    "Using IDE Features",
    "Configuration Options",
    "Syntax Extensions",
    "Type Operations",
  ],
  (name) => ({
    name,
    projects: [
      {
        description: "🥗 Appetizer Project",
        href: "/project/analyzing-dna",
        meta: "Lorem ipsum typesum TypeScript etc. etc.",
        title: "Analyzing DNA",
      },
      {
        description: "🍲 Entree Project",
        href: "/project/analyzing-dna",
        meta: "Lorem ipsum typesum TypeScript etc. etc.",
        title: "Analyzing DNA",
      },
      {
        description: "🍰 Dessert Project",
        href: "/project/analyzing-dna",
        meta: "Lorem ipsum typesum TypeScript etc. etc.",
        title: "Analyzing DNA",
      },
    ],
  })
);

export default function Projects(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout description={siteConfig.tagline} title="Projects">
      <MainArea as="main" className={styles.mainArea}>
        <h1 className={styles.heading}>Projects</h1>
        <p>
          Hands on real world projects that will help you exercise your
          knowledge of TypeScript.
          <br />
          <br />
          Each project follows a chapter in the <em>
            Learning TypeScript
          </em>{" "}
          book. Choose between:
          <ul>
            <li>🥗 Appetizers: bite-sized directed warmups</li>
            <li>🍲 Entrees: larger, more hands-off challenges</li>
            <li>🍰 Desserts: entrees with a fun twist</li>
          </ul>
        </p>
        <div className={styles.chapters}>
          {chapters.map((chapter, index) => (
            <ChapterProjects
              {...chapter}
              index={index + 1}
              key={chapter.name}
            />
          ))}
        </div>
      </MainArea>
    </Layout>
  );
}

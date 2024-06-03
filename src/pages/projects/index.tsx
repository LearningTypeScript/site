import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CodeBlock from "@theme/CodeBlock";
import Layout from "@theme/Layout";
import { useChapters } from "@site/src/utils/useChapters";
import React from "react";

import { ChapterProjects } from "../../theme/ChapterProjects";
import { MainArea } from "../../theme/MainArea";
import styles from "./styles.module.css";
import { StandardMetadata } from "@site/src/theme/StandardMetadata";

const chapterNames = [
  "From Javascript To TypeScript",
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
];

const metadata = {
  "twitter:description":
    "Hands on real world projects that will help you exercise your knowledge of TypeScript.",
};

export default function Projects(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const chapters = useChapters();

  return (
    <Layout description={siteConfig.tagline} title="Projects">
      <StandardMetadata overrides={metadata} />
      <MainArea as="main" className={styles.mainArea}>
        <h1>Projects</h1>
        <p>
          Hands on real world projects that will help you exercise your
          knowledge of TypeScript.
        </p>
        <p>
          Learning a new programming language is best when you practice what you
          learn as you learn it. The projects here will help you practice the
          contents of <em>Learning TypeScript</em>'s chapters. They're made so
          you can work through each chapter's projects after you finish reading
          that chapter.
        </p>
        <p>Projects can take the shape of:</p>
        <ul>
          <li>🥗 Appetizers: bite-sized directed warmups</li>
          <li>🍲 Entrees: larger, more hands-off challenges</li>
          <li>🍰 Desserts: entrees with a fun twist</li>
        </ul>
        <h2 className={styles.h2}>Prerequisites</h2>
        <p>You'll want the following tools installed on your computer:</p>
        <ul>
          <li>
            <a href="https://git-scm.com">
              <strong>Git</strong> [download]
            </a>
            : available globally as <code>git</code> <em>(required)</em>
          </li>
          <li>
            <a href="https://nodejs.org">
              <strong>Node</strong> [download]
            </a>
            : available globally as <code>node</code> <em>(required)</em>
          </li>
          <li>
            <a href="https://code.visualstudio.com/">
              <strong>VS Code</strong> [download]
            </a>
            : available globally as <code>code</code>{" "}
            <em>(optional; any IDE with TypeScript support will do)</em>
          </li>
        </ul>
        <p>
          Then, set up the{" "}
          <a href="https://github.com/LearningTypeScript/projects">
            github.com/LearningTypeScript/projects
          </a>{" "}
          repository locally:
        </p>
        <CodeBlock language="shell">
          <div className="code-container line">
              <code>
                {
                `git clone https://github.com/LearningTypeScript/projects learning-typescript-projects
cd learning-typescript-projects
npm i`
                }
              </code>
          </div>
        </CodeBlock>
        <div className={styles.chapters}>
          {chapterNames.map((chapterName, index) => {
            return (
              <ChapterProjects
                index={index + 1}
                key={chapterName}
                name={chapterName}
                projects={
                  chapters[chapterName.toLowerCase().replace(/ /g, "-")]
                }
              />
            );
          })}
        </div>
      </MainArea>
    </Layout>
  );
}

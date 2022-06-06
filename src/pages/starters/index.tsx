import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useChapters } from "@site/src/utils/useChapters";
import React from "react";

import { Card, CardProps } from "../../theme/Card";
import { MainArea } from "../../theme/MainArea";
import styles from "./styles.module.css";
import { OutlineLink } from "@site/src/theme/OutlineLink";

const starters: CardProps[] = [
  {
    description:
      "Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.",
    href: "https://angular.io/guide/typescript-configuration",
    title: "Angular",
  },
  {
    description:
      "Next.js is a popular React framework that provides building blocks for fully interactive and performant full stack apps.",
    href: "https://nextjs.org/docs/basic-features/typescript",
    title: "Next.js",
  },
  {
    description:
      "Remix is an up-and-coming, already popular React framework that enhances web APIs for seamlessly performant full stack apps.",
    href: "https://remix.run/docs/en/v1/guides/typescript",
    title: "Remix",
  },
  {
    description:
      "An approachable, performant and versatile framework for building web user interfaces with an intuitive API.",
    href: "https://vuejs.org/guide/typescript/overview.html",
    title: "Vue",
  },
].sort((a, b) => a.title.localeCompare(b.title));

export default function Starters(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout description={siteConfig.tagline} title="Starters">
      <MainArea as="main" className={styles.mainArea}>
        <h1 className={styles.heading}>Starters</h1>
        <p>
          Links to recommended getting-started / "Hello World" starters for
          common frameworks and toolchains with TypeScript.
        </p>
        <div className={styles.starters}>
          {starters.map((starter) => {
            return (
              <Card className={styles.card} {...starter} key={starter.title} />
            );
          })}
        </div>
        <p className={styles.ad}>Want a template not yet on this list?</p>
        <OutlineLink
          className={styles.link}
          href="https://github.com/LearningTypeScript/site/issues/new?assignees=&amp;labels=type%3A+starter&amp;template=03-starter.yaml&amp;title=%F0%9F%9A%80+Starter%3A+%3Cname+of+the+starter+framework%2Ftoolchain%3E"
          target="_blank"
        >
          Request One Here
        </OutlineLink>
      </MainArea>
    </Layout>
  );
}

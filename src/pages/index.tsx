import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import { AboutTheAuthor } from "../theme/AboutTheAuthor";
import { ArticlesSection } from "../theme/ArticlesSection";

import { HeroSection } from "../theme/HeroSection";
import { SummarySection } from "../theme/SummarySection";
import { ProjectsSection } from "../theme/ProjectsSection";
import { ReadTheBook } from "../theme/ReadTheBook";

import styles from "./styles.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout description={siteConfig.tagline} title=" ">
      <HeroSection />
      <main className={styles.main}>
        <SummarySection />
        <ProjectsSection />
        <ArticlesSection />
        <ReadTheBook />
        <AboutTheAuthor />
      </main>
    </Layout>
  );
}

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import { AboutTheAuthor } from "../theme/AboutTheAuthor";
import { ArticlesSection } from "../theme/ArticlesSection";

import { HeroSection } from "../theme/HeroSection";
import { ProjectsSection } from "../theme/ProjectsSection";
import { ReadTheBook } from "../theme/ReadTheBook";

import styles from "./styles.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout description={siteConfig.tagline} title=" ">
      <div
        style={{
          margin: "2rem auto 0",
          maxWidth: "1000px",
          textAlign: "center",
        }}
      >
        {globalThis?.location?.search?.includes("preview") ? null : (
          <>
            <h2 style={{ fontSize: "3rem" }}>🛠 Site under construction! 🛠</h2>
            <p style={{ fontSize: "2rem" }}>
              <strong>
                I'm still implementing designs and have not yet put articles or
                projects content in it.
                <br />
                Check back the first week of June.
              </strong>
            </p>
          </>
        )}
      </div>
      <HeroSection />
      <main className={styles.main}>
        <ProjectsSection />
        <ArticlesSection />
        <ReadTheBook />
        <AboutTheAuthor />
      </main>
    </Layout>
  );
}

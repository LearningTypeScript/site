import { useLocation } from "@docusaurus/router";
import { PageMetadata } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import React from "react";
import { MainArea } from "../MainArea";

import styles from "./styles.module.css";

export default function NotFound() {
  const location = useLocation();

  return (
    <>
      <PageMetadata title={"Page Not Found"} />
      <Layout>
        <MainArea className={styles.mainArea}>
          <main className="container margin-vert--xl">
            <h1 className={styles.title}>
              Error: Cannot find name '{location.pathname}'.
            </h1>
            <p>Looks like the page you're looking for doesn't exist. 😥</p>
            <p>
              If you were linked here within learningtypescript.com, there's
              probably a bug in the site. Please{" "}
              <a href="https://github.com/LearningTypeScript/site/issues/new/choose">
                file an issue on GitHub
              </a>
              .
            </p>
          </main>
        </MainArea>
      </Layout>
    </>
  );
}

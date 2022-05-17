import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";

import { HeroSection } from "../theme/HeroSection";

import styles from "./styles.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline} title=" ">
      <HeroSection />
      <main className={styles.main}>
        <h2 style={{ fontSize: "3rem" }}>🛠 Site under construction! 🛠</h2>
        <p style={{ fontSize: "2rem" }}>
          <strong>
            I'm still implementing designs and have not yet put articles or
            projects content in it.
            <br />
            Check back the first week of June.
          </strong>
        </p>
        <hr className={styles.split} />
        <div className={styles.promo}>
          <div>
            <p>
              If you find this website useful, consider diving into the full{" "}
              <a
                href="https://learning.oreilly.com/library/view/learning-typescript/9781098110321/"
                target="_blank"
              >
                <strong>
                  <em>Learning TypeScript</em>
                </strong>
              </a>{" "}
              book on O'Reilly.
            </p>
            <p>
              In this practical book, author Josh Goldberg, open source
              maintainer and TypeScript aficionado, takes beginner and advanced
              JavaScript programmers alike from knowing nothing about “types” or
              "type systems" to full mastery of TypeScript fundamentals.
            </p>
            <p>
              More than just a simple means to find bugs and typos, Typescript
              is a useful system for declaring the way JavaScript should work
              for you. You'll learn:
              <ul>
                <li>
                  Benefits of TypeScript and general characteristics of its type
                  system
                </li>
                <li>
                  How TypeScript analyzes and understands code to help you
                  augment your existing development pattern
                </li>
                <li>
                  Why and how TypeScript is useful on top of "vanilla"
                  JavaScript
                </li>
                <li>
                  How to inform your type system by using development-only type
                  annotations
                </li>
                <li>
                  How TypeScript analyzes and understands code to help you
                  augment your existing development pattern
                </li>
                <li>
                  How refactoring code with TypeScript helps you develop quickly
                  with fewer bugs
                </li>
              </ul>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

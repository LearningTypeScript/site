import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__subtitle">
          <strong style={{ fontSize: "2rem" }}>
            ⚒ Site under construction. ⚒
          </strong>
          <br />
          Expect greatness... soon!
        </p>
      </div>
    </header>
  );
}

function Feature({ description, emoji, href, title }) {
  return (
    <li className={styles.feature}>
      <h2 className={styles.featureHeading}>
        <span className={styles.featureEmoji}>{emoji}</span>
        <a href={href}>{title}</a>
      </h2>
      <p>{description}</p>
    </li>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline} title=" ">
      <HomepageHeader />
      <main className={styles.main}>
        <ul className={styles.features}>
          <Feature
            description="Top tips and tricks for why TypeScript behaves the way it does, and how you can work effectively with it."
            emoji="📜"
            href="/articles"
            title="Articles"
          />
          <Feature
            description="Hands-on real-world projects that will help you exercise your knowledge of TypeScript."
            emoji="🏗"
            href="/articles"
            title="Projects"
          />
        </ul>
        <hr className={styles.split} />
        <div className={styles.promo}>
          <div>
            <img
              alt="Book cover: Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript"
              className={styles.promoCover}
              src="/img/cover.png"
            />
          </div>
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

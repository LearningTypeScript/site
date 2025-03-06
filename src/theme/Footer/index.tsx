import React from "react";
import { BookLink } from "../BookLink";

import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.column}>
          <h2 className={styles.heading}>Learning TypeScript</h2>
          <a href="/articles">Articles</a>
          <a href="/projects">Projects</a>
          <a href="/starters">Starters</a>
        </div>
        <div className={styles.column}>
          <BookLink className={styles.getTheBook}>
            Get the Book on O'Reilly
          </BookLink>
          <div className={styles.icons}>
            <a
              href="https://github.com/LearningTypeScript/site"
              target="_blank"
            >
              <svg
                aria-label="GitHub Icon"
                className={styles.icon}
                fill="none"
                height="1024"
                viewBox="0 0 1024 1024"
                width="1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(64)"
                />
              </svg>
            </a>
            <a
              href="https://bsky.app/profile/learningtypescript.com"
              target="_blank"
            >
              <svg
                aria-label="Bluesky Icon"
                className={styles.icon}
                fill="none"
                viewBox="0 0 64 57"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805ZM50.127 3.805C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.credits}>
        Built with 💖 using Docusaurus and TypeScript, and deployed on Vercel.
        <br />
        Designed by{" "}
        <a href="https://jackieis.online" target="_blank">
          Jackie Liu
        </a>{" "}
        and implemented by{" "}
        <a href="https://joshuakgoldberg.com" target="_blank">
          Josh Goldberg
        </a>
        .
      </div>
    </footer>
  );
}

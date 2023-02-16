import ExternalLink from "@theme/Icon/ExternalLink";
import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

export interface BookLinkAnchorProps {
  className?: string;
  children: string;
  href: string;
}

export const BookLinkAnchor = ({
  children,
  className,
  href,
}: BookLinkAnchorProps) => {
  return (
    <a
      className={clsx(styles.bookLinkAnchor, className)}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
      <ExternalLink />
    </a>
  );
};

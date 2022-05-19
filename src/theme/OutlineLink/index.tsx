import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

export interface OutlineLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const OutlineLink = ({ className, ...props }: OutlineLinkProps) => {
  return <a className={clsx(styles.outlineLink, className)} {...props} />;
};

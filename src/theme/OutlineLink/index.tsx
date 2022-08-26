import clsx from "clsx";
import React, { HTMLAttributeAnchorTarget } from "react";

import styles from "./styles.module.css";

export interface OutlineLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  target?: HTMLAttributeAnchorTarget;
  href: string;
}

export const OutlineLink = ({ className, ...props }: OutlineLinkProps) => {
  return <a className={clsx(styles.outlineLink, className)} {...props} />;
};

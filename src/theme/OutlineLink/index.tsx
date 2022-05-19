import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

export const OutlineLink = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLAnchorElement>) => {
  return <a className={clsx(styles.outlineLink, className)} {...props} />;
};

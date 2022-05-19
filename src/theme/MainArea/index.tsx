import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

export interface MainAreaProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof React.ReactHTML;
  size?: "thin" | "normal";
}

export const MainArea = ({
  as: As = "section",
  className,
  size = "normal",
  ...props
}: MainAreaProps) => {
  return (
    <As className={clsx(styles.mainArea, styles[size], className)} {...props} />
  );
};

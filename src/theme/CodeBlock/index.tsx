import clsx from "clsx";
import React from "react";
import CodeBlock from "@theme-original/CodeBlock";

import styles from "./styles.module.css";

export type CodeBlockWrapperProps = React.HTMLAttributes<HTMLPreElement>;

export default function CodeBlockWrapper({
  children,
  className,
  ...props
}: CodeBlockWrapperProps) {
  return (
    <>
      <CodeBlock
        className={clsx("shiki hihi", styles.codeBlock, className)}
        {...props}
      >
        {children}
      </CodeBlock>
    </>
  );
}

import React from "react";

import { OutlineLink } from "./OutlineLink";

export interface BookLinkProps {
  className?: string;
  children: string;
  href?: string;
}

export const BookLink = ({
  children,
  className,
  href = "https://learning.oreilly.com/library/view/learning-typescript/9781098110321",
}: BookLinkProps) => {
  // Todo: arrow glyph
  return (
    <OutlineLink className={className} href={href} target="_blank">
      {children} ↗
    </OutlineLink>
  );
};

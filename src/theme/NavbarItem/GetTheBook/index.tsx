// See https://github.com/facebook/docusaurus/issues/7227

import { useGetTheBook } from "@site/src/utils/useGetTheBook";
import clsx from "clsx";
import React from "react";

import { BookLinkAnchor } from "../../BookLinkAnchor";
import styles from "./styles.module.css";

export interface DropdownLinkLink {
  children: string;
  href: string;
}

export interface DropdownLinkItemProps extends DropdownLinkLink {
  links: DropdownLinkLink[];
}

export interface GetTheBookProps {
  align: "left" | "right";
}

const alignStyles = {
  left: styles.alignLeft,
  right: styles.alignRight,
};

export const GetTheBook = ({ align }: GetTheBookProps) => {
  const { href, links } = useGetTheBook();

  return (
    <div className={clsx(styles.dropdownLinkItem, alignStyles[align])}>
      <BookLinkAnchor
        children="Get The Book"
        className={clsx("navbar__item navbar__link", styles.link)}
        href={href}
      />
      <div className={styles.links}>
        {links.map((link) => (
          <BookLinkAnchor
            className="navbar__item navbar__link"
            {...link}
            key={link.href}
          />
        ))}
      </div>
    </div>
  );
};

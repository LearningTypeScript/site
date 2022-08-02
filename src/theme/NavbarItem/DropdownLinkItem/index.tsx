// See https://github.com/facebook/docusaurus/issues/7227

import React from "react";
import IconExternalLink from "@theme/IconExternalLink";

import styles from "./styles.module.css";

export interface DropdownLinkLink {
  children: string;
  href: string;
}

export interface DropdownLinkItemProps extends DropdownLinkLink {
  links: DropdownLinkLink[];
}

const Anchor = ({ children, href }: DropdownLinkLink) => {
  return (
    <a
      className="navbar__item navbar__link"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
      <IconExternalLink />
    </a>
  );
};

export const DropdownLinkItem = ({ children, href, links }) => {
  return (
    <div className={styles.dropdownLinkItem}>
      <Anchor children={children} href={href} />
      <div className={styles.links}>
        {links.map((link) => (
          <Anchor {...link} key={link.href} />
        ))}
      </div>
    </div>
  );
};

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export interface GetTheBookLink {
  children: string;
  href: string;
}

export interface GetTheBook {
  href: string;
  links: GetTheBookLink[];
}

interface CustomFields {
  getTheBook: GetTheBook;
}

export const useGetTheBook = () => {
  const { siteConfig } = useDocusaurusContext();
  const { getTheBook } = siteConfig.customFields as unknown as CustomFields;

  return getTheBook;
};

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export interface ArticleData {
  date: string;
  description: string;
  href: string;
  meta: string;
  title: string;
}

interface CustomFields {
  articles: ArticleData[];
}

export const useArticles = () => {
  const { siteConfig } = useDocusaurusContext();
  const { articles } = siteConfig.customFields as unknown as CustomFields;

  return articles;
};

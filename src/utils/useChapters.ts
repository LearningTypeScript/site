import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export interface ChapterProjectData {
  level: "appetizer" | "entree" | "dessert";
  name: string;
  slug: string;
  path: string;
  title: string;
}

export type Chapters = Record<string, ChapterProjectData[]>;

interface CustomFields {
  chapters: Chapters;
}

export const useChapters = () => {
  const { siteConfig } = useDocusaurusContext();
  const { chapters } = siteConfig.customFields as unknown as CustomFields;

  return chapters;
};

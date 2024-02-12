import { useArticles } from "@site/src/utils/useArticles";
import React from "react";
import { Card } from "../Card";
import { CardsArea } from "../CardsArea";
import { MainArea } from "../MainArea";

import styles from "./styles.module.css";

export const ArticlesSection = () => {
  const articles = useArticles();

  return (
    <MainArea>
      <CardsArea
        className={styles.articlesSection}
        description="Top tips and tricks for why TypeScript behaves the way it does, and how you can work effectively with it."
        heading="Articles"
        link={{
          children: `See all ${articles.length} articles`,
          href: "/articles",
        }}
      >
        {articles.slice(0, 3).map((article) => (
          <Card
            className={styles.card}
            description={article.description}
            href={`/articles/${article.href}`}
            key={article.href}
            title={article.title}
            meta={`Tags: ${article.meta}`}
          />
        ))}
      </CardsArea>
    </MainArea>
  );
};

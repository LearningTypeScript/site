import Head from "@docusaurus/Head";
import React from "react";

const defaultMetadata = {
  "twitter:description":
    "Enhance your web development skills using type-safe JavaScript",
};

export interface StandardMetadataProps {
  overrides?: Record<string, string>;
}

export const StandardMetadata = ({ overrides = {} }: StandardMetadataProps) => {
  return (
    <Head>
      {Object.entries({ ...defaultMetadata, ...overrides }).map(
        ([property, content]) => (
          <meta content={content} property={property} />
        )
      )}
    </Head>
  );
};

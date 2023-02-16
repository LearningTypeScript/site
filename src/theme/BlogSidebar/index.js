import React from "react";
import BlogSidebar from "@theme-original/BlogSidebar";

export default function BlogSidebarWrapper(props) {
  // Workaround for https://github.com/facebook/docusaurus/discussions/8294
  props.sidebar.items = props.sidebar.items.map((item) =>
    item.title === "The `satisfies` Operator"
      ? {
          ...item,
          title: (
            <>
              The <code>satisfies</code> operator
            </>
          ),
        }
      : item
  );
  return (
    <>
      <BlogSidebar {...props} />
    </>
  );
}

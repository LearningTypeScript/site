const path = require("path");

const basePath =
  "https://www.github.com/LearningTypeScript/projects/tree/main/";

// @ts-check
module.exports.externalProjectLinks = () => {
  return async (root, file) => {
    // Transforms links like:
    //   ./01-step-one
    // to:
    //    https://github.com/.../<chapter>/<project>/01-step-one
    function transformLocalLinks(node) {
      if (node.type === "link") {
        if (/^\.\/\d\d/.test(node.url)) {
          node.url = [
            basePath,
            file.dirname.split("external/")[1],
            node.url,
          ].join("/");
        }
      }

      for (const child of node.children ?? []) {
        transformLocalLinks(child);
      }
    }

    transformLocalLinks(root);

    const setupIndex = root.children.findIndex(
      (child) => child.type === "heading" && child.data.id === "setup"
    );

    if (setupIndex === -1) {
      return;
    }

    // https://github.com/facebook/docusaurus/issues/6520
    // Once Docusaurus supports ESM, this can be a normal file-level import...
    const { fromMarkdown } = await import("mdast-util-from-markdown");

    const [project, chapter] = file.dirname.split("/").reverse();

    root.children = [
      ...root.children.slice(0, setupIndex + 1),
      ...fromMarkdown(`
If you haven't yet, set up the [github.com/LearningTypeScript/projects](https://github.com/LearningTypeScript/projects) repository locally.

\`\`\`shell
git clone https://github.com/LearningTypeScript/projects learning-typescript-projects
cd learning-typescript-projects
npm i
\`\`\`

</details>

Change your terminal directory to this project's:

\`\`\`shell
cd projects/${chapter}/${project}
\`\`\`
      `).children,
      ...root.children.slice(setupIndex + 1),
    ];
  };
};

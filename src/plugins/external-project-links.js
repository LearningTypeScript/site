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

    function findIndex(value) {
      return root.children.findIndex(
        (child) => child.type === "heading" && child.children[0].value === value
      );
    }

    transformLocalLinks(root);

    const setupIndex = findIndex("Setup");

    if (setupIndex === -1) {
      return;
    }

    const stepsIndex = findIndex("Steps");

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

Open your editor in this project's directory:

\`\`\`shell
code projects/${chapter}/${project}
\`\`\`
      `).children,
      ...root.children.slice(setupIndex + 1, stepsIndex),
      ...fromMarkdown(`
> Note: your terminal should be in the \`${project}\` directory, _not_ the root repository's directory.
      `).children,
      ...root.children.slice(stepsIndex),
    ];
  };
};

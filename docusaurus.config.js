// @ts-check
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const lightCodeTheme = require("prism-react-renderer/themes/github");

const {
  externalProjectLinks,
} = require("./src/plugins/external-project-links");

/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: "/",
  favicon: "img/favicon.png",
  onBrokenMarkdownLinks: "throw",
  organizationName: "JoshuaKGoldberg",
  projectName: "learning-typescript",
  stylesheets: [
    // TODO: Reduce these to just the weights I actually need
    "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Red+Hat+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap",
  ],
  tagline: "Companion articles and projects for the Learning TypeScript book.",
  title: "Learning TypeScript",
  url: "https://learning-typescript.com",

  // TODO...
  onBrokenLinks: "warn",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          blogDescription:
            "Articles on TypeScript features. Syntax, type checking, and more!",
          blogSidebarTitle: "Recent Articles",
          blogTitle: "Articles",
          editUrl:
            "https://github.com/JoshuaKGoldberg/learning-typescript/tree/main/",
          path: "src/content/articles",
          routeBasePath: "articles",
          showReadingTime: true,
        },
        docs: {
          editUrl: "https://github.com/LearningTypeScript/projects/tree/main/",
          include: ["*/*.md", "*/*/*.md"],
          path: "src/content/external/projects",
          remarkPlugins: [[externalProjectLinks, {}]],
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Learning TypeScript",
        logo: {
          alt: "Learning TypeScript Logo",
          src: "img/logo.png",
        },
        items: [
          {
            label: "Articles",
            position: "right",
            to: "/articles",
          },
          {
            label: "Projects",
            position: "right",
            to: "/projects",
          },
          {
            href: "https://www.oreilly.com/library/view/learning-typescript/9781098110321",
            label: "The Book",
            position: "right",
          },
        ],
      },
      prism: {
        darkTheme: darkCodeTheme,
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;

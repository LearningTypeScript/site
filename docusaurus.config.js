// @ts-check
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const lightCodeTheme = require("prism-react-renderer/themes/github");

/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: "/",
  favicon: "img/favicon.png",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  organizationName: "JoshuaKGoldberg",
  projectName: "learning-typescript",
  tagline: "Companion articles and projects for the Learning TypeScript book.",
  title: "Learning TypeScript",
  url: "https://learning-typescript.com",

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
          editUrl:
            "https://github.com/JoshuaKGoldberg/learning-typescript/tree/main/",
          path: "src/content/projects",
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
      footer: {
        copyright: `Built with ❤ using Docusaurus and TypeScript. Deployed on Vercel.`,
        links: [
          {
            title: "On Site",
            items: [
              {
                label: "Articles",
                to: "/articles",
              },
              {
                label: "Projects",
                to: "/projects",
              },
            ],
          },
          {
            title: "O'Reilly",
            items: [
              {
                label: "Learning TypeScript",
                to: "https://learning.oreilly.com/library/view/learning-typescript/9781098110321",
              },
              {
                label: "Projects",
                to: "/projects",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/JoshuaKGoldberg/learning-typescript",
              },
              {
                label: "Twitter",
                to: "https://twitter.com/JoshuaKGoldberg",
              },
            ],
          },
        ],
        style: "dark",
      },
      navbar: {
        title: "Learning TypeScript",
        logo: {
          alt: "Learning TypeScript Logo",
          src: "img/logo.png",
        },
        items: [
          {
            label: "Articles",
            position: "left",
            to: "/articles",
          },
          {
            docId: "projects",
            label: "Projects",
            position: "left",
            type: "doc",
          },
          {
            href: "https://github.com/JoshuaKGoldberg/learning-typescript",
            label: "GitHub",
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
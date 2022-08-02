const fs = require("fs");
const readDirRecursive = require("fs-readdir-recursive");
const path = require("path");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const lightCodeTheme = require("prism-react-renderer/themes/github");

const {
  externalProjectLinks,
} = require("./src/plugins/external-project-links");

/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: "/",
  clientModules: [require.resolve("./src/clientModules.js")],
  customFields: {
    articles: (() => {
      const articlesBaseDir = path.join(__dirname, "src/content/articles");

      return fs
        .readdirSync(articlesBaseDir)
        .filter((file) => /\.mdx$/.test(file))
        .map((file) => {
          const contents = fs
            .readFileSync(path.join(articlesBaseDir, file))
            .toString();

          return {
            date: /date: "(.+)"/.exec(contents)[1],
            description: /description: "(.+)"/.exec(contents)[1],
            href: file.split(".")[0],
            meta: /meta: (.+)/.exec(contents)[1],
            title: /# (.+)/.exec(contents)[1],
          };
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    })(),
    chapters: (() => {
      const levelSortOrder = { appetizer: 0, entree: 1, dessert: 2 };
      const projectsBaseDir = path.join(
        __dirname,
        "src/content/external/projects"
      );
      const files = readDirRecursive(projectsBaseDir);

      const chapters = {};

      for (const file of files) {
        const chapterMatch = /^([A-z-]+)\/README\.md$/.exec(file);
        if (chapterMatch) {
          chapters[chapterMatch[1]] = [];
          continue;
        }
      }

      for (const file of files) {
        const projectMatch = /^([A-z-]+)\/([A-z-]+)\/README\.md$/.exec(file);
        if (projectMatch) {
          const readmeText = fs
            .readFileSync(path.join(projectsBaseDir, file))
            .toString();

          const name = /# ([A-z- ]+)/.exec(readmeText)[1];
          const level = / ([A-z]+) project./.exec(readmeText)[1];

          chapters[projectMatch[1]].push({
            level,
            name,
            path: file.replace("README.md", ""),
            slug: projectMatch[2],
          });
        }
      }

      for (const projects of Object.values(chapters)) {
        projects.sort((a, b) =>
          a.level === b.level
            ? a.name.localeCompare(b.name)
            : levelSortOrder[a.level] - levelSortOrder[b.level]
        );
      }

      return chapters;
    })(),
  },
  favicon: "img/favicon.png",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  organizationName: "JoshuaKGoldberg",
  scripts: [
    {
      "data-site": "VIOSSRYT",
      defer: true,
      src: "https://fun.learningtypescript.com/script.js",
    },
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Red+Hat+Mono:ital,wght@0,500&display=swap",
  ],
  tagline: "Companion articles and projects for the Learning TypeScript book.",
  title: "Learning TypeScript",
  url: "https://www.learningtypescript.com",

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
          readingTime: (args) =>
            Math.ceil(Math.pow(args.defaultReadingTime(args), 1.5) / 5) * 5,
          routeBasePath: "articles",
          showReadingTime: true,
        },
        docs: {
          breadcrumbs: false,
          editUrl: ({ docPath }) =>
            `https://github.com/LearningTypeScript/projects/tree/main/projects/${docPath}`,
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
    [
      "docusaurus-preset-shiki-twoslash",
      {
        // Todo: ...is this being respected?!
        defaultCompilerOptions: {
          lib: ["dom", "es2021"],
          target: "esnext",
        },
        themes: ["min-light", "nord"],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content:
            "typescript, learning typescript, O'Reilly, josh goldberg, joshuakgoldberg",
        },
        {
          content: "summary",
          name: "twitter:card",
        },
        {
          content: "@JoshuaKGoldberg",
          name: "twitter:creator",
        },
        {
          content: "@LearningTSBook",
          name: "twitter:description",
        },
        {
          content: "https://learningtypescript.com/img/promo-square.png",
          name: "twitter:image",
        },
        {
          content:
            "Enhance Your Web Development Skills Using Type-Safe JavaScript",
          name: "twitter:site",
        },
        {
          content: "Learning TypeScript",
          name: "twitter:title",
        },
      ],
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
            label: "Starters",
            position: "right",
            to: "/starters",
          },
          {
            children: "The Book",
            href: "https://www.oreilly.com/library/view/learning-typescript/9781098110321",
            links: [
              {
                children: "Amazon",
                href: "https://smile.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331",
              },
              {
                children: "Barnes and Noble",
                href: "https://www.barnesandnoble.com/w/learning-typescript-josh-goldberg/1141119694",
              },
              {
                children: "Goodreads",
                href: "https://www.goodreads.com/book/show/61285675-learning-typescript",
              },
              {
                children: "Google Play",
                href: "https://play.google.com/store/books/details/Josh_Goldberg_Learning_TypeScript?id=Yj5zEAAAQBAJ",
              },
            ],
            position: "right",
            type: "custom-dropdownLinkItem",
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

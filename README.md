# Learning TypeScript Site

This website is built using [Docusaurus 2](https://docusaurus.io), a modern static website generator.

## Setup

This repository includes [LearningTypeScript/projects](https://github.com/LearningTypeScript/projects) via [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

```shell
git clone --recurse-submodules https://github.com/JoshuaKGoldberg/learning-typescript learning-typescript-site
cd learning-typescript-site
yarn
```

To update the submodule:

```shell
git submodule foreach git pull
```

## Local Development

```shell
yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

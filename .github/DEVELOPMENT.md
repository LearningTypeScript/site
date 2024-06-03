# Development

After [forking the repo from GitHub](https://help.github.com/articles/fork-a-repo) and [installing Yarn Classic](https://classic.yarnpkg.com/lang/en):

```shell
git clone https://github.com/<your-name-here>/template-typescript-node-package --recurse-submodules
cd template-typescript-node-package
yarn
```

> This repository includes a list of suggested VS Code extensions.
> It's a good idea to use [VS Code](https://code.visualstudio.com) and accept its suggestion to install them, as they'll help with development.

## Local Development

```shell
yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

## Updating Git Submodules

Whenever the [Learning TypeScript projects repo](https://github.com/LearningTypeScript/projects) is updated, this repo will need to pull in those updates.
Run this command:

```shell
git submodule foreach git pull
git add -A
git commit -m "Latest learning-typescript-projects"
git push
```

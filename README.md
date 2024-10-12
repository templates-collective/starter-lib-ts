# TypeScript Library Starter Template

[![Version](https://img.shields.io/npm/v/starter-lib-ts?style=flat&label=%20&color=0d0d0d)](https://www.npmjs.com/package/starter-lib-ts)

TypeScript library starter template, supports ESM and CJS.

- [Play on Stackblitz](https://stackblitz.com/github/templates-collective/starter-lib-ts)
- [README for 简体中文](./README.zh-CN.md)

## Features

- Build package with [tsup](https://tsup.egoist.dev/) - Bundle your TypeScript library with no config.
- Unit Testing with [Vitest](https://github.com/vitest-dev/vitest).
- Publish to [npm](https://www.npmjs.com) with zero-config.

## Usage

[Create a repo](https://github.com/templates-collective/starter-lib-ts/generate) from this template on GitHub.

```bash
git clone <git remote url>
```

Install npm dependencies.

```bash
cd starter-lib-ts # Or your project directory

pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

Just run `dev` script to build your files.

```bash
pnpm dev
```

To build the library, you can run:

```bash
pnpm build
```

If you want to publish it, you can run:

```bash
pnpm release
```

## Clean Template

If you prefer to do it manually with the cleaner git history:

```bash
npx degit templates-collective/starter-lib-ts starter-lib-ts

cd starter-lib-ts

pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

When you use this template, try follow the checklist to update your info properly:

- [ ] Change the author name in `LICENSE`.
- [ ] Change the package name in `package.json`.

## License

[MIT License](./LICENSE) © 2024 [Kieran Wang](https://github.com/kieranwv/)

# Be-todo-core: playground package

---

### Install

```sh
npm install --save @gurovdmitriy/be-todo-core
```

### See more

- [GurovDmitriy](https://github.com/GurovDmitriy)
- [BeautyLips](https://github.com/BeautyLips)
- [be-library-builder](https://github.com/BeautyLips/be-library-builder)

## Motivation

Provide the most complete templates for building a library.

### Description

Provide an example of how the LernaJs & Nx monorepo works, the example contains 2 packages,
be-todo-core depends on be-todo-strike. Explore this to start building packages.
The example template supercharged with linters and Rollup.

## Example

```js
import { beTodoCore } from "@gurovdmitriy/be-todo-core"

const todoManager = beTodoCore()

todoManager.add("buy milk")
todoManager.add("buy bread")
todoManager.strike(1)

console.log(todoManager.todos)
```

### Resource:

- [Lerna](https://lerna.js.org/)
- [Nx](https://nx.dev/)
- [TurboBuild](https://turbo.build/)
- [Rollup](https://rollupjs.org/)
- [Parcel](https://parceljs.org/)
- [Husky](https://typicode.github.io/husky)
- [Lint-staged](https://github.com/lint-staged/lint-staged/)
- [Commitlint](https://commitlint.js.org/)
- [Eslit](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Semver](https://semantic-release.gitbook.io/semantic-release/)

### Tasks:

- [x] Be-todo-core, todo manager fn
- [x] Be-todo-strike, mark done fn

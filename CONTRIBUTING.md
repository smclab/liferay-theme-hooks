# Contributing

If you want to contribute to this repository there are a few points you have to keep in consideration:

- The javascript code is meant for running on Node, only ES5 (vanilla javascript) is therefore allowed (no `let` or `cont`, just `var` and no arrow functions).
- For this project we use Yarn. The workspace of each hook is located inside the `packages` directory, every hook's dependencies must be located inside it's own `package.json`. For adding a dependency you can use `yarn add dependency-name` replacing `dependency-name` with the name of the dependency you want to add.
- There are linting rules that are meant to be respected. You can run `yarn run eslint` from the root directory (`liferay-theme-hooks`) for visualizing errors or warnings about the used code style.
- We want consistency about indentation/code formatting and for this purpose we use [Prettier](https://github.com/prettier/prettier). To automatically format your code type `yarn run format`.

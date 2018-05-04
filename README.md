# SMC's Liferay Theme Hooks

`liferay-theme-hooks` offers some packages that are meant to be used in combination with [liferay-theme-tasks](https://github.com/liferay/liferay-theme-tasks) in order to make working on a liferay theme a more modern and pleasurable experience.

In particular we let developers

- write modern CSS and automatically add vendor prefixes through [Autoprefixer](https://github.com/postcss/autoprefixer),
- write modern JavaScript and automatically transpile them with [Babel](https://babeljs.io/).

These hooks are run for you when the `build` or `deploy` tasks are run.

## Installation

After you created your theme (for example with the [Liferay Theme Generator](https://github.com/liferay/generator-liferay-theme)) you can add our hooks by installing them inside your root folder:

```bash
cd my-awesome-theme
# With npm:
npm install --save-dev @smclab/liferay-theme-autoprefixer-hook
npm install --save-dev @smclab/liferay-theme-babel-hook
# Or alternatively with Yarn:
yarn add --dev @smclab/liferay-theme-autoprefixer-hook
yarn add --dev @smclab/liferay-theme-babel-hook
```

After installing the desired hook add the following to your liferay theme's `package.json`

```js
{
  "name": "my-awesome-theme",
  // ...the rest of your package.json...
  "liferayTheme": {
    "hookModules": [
      // Here you can choose which hook to keep
      "@smclab/liferay-theme-autoprefixer-hook",
      "@smclab/liferay-theme-babel-hook"
    ]
  }
}
```

## Configuring supported browsers

Both hooks let you specify a list of browsers your project needs to support.
The list of features that need to be transpiled/autoprefixed will be automatically retrived so that you can focus on the important stuff!

For doing this we use [Browserslist](https://github.com/browserslist/browserslist).

The list of browsers you want your theme to support can be defined in the `package.json` or in a `.browserslistrc` file in your theme's root direcotry.

If you want, for example, to support [all the supported browsers supported by Liferay](https://web.liferay.com/it/services/support/compatibility-matrix) you can use the following file `.browserslistrc`

```
last 1 Chrome versions
last 1 Firefox versions
last 1 Edge versions
ie 9
ie 10
Safari 8
Safari 10
```

or you can add the following to you liferay theme's `package.json`

```js
{
  "name": "my-awesome-theme",
  // ...the rest of your package.json...
  "browserslist": {
    "browsers": [
      "last 1 Chrome versions",
      "last 1 Firefox versions",
      "last 1 Edge versions",
      "ie 9",
      "ie 10",
      "Safari 8",
      "Safari 10"
    ],
    "cascade": false
  }
}
```

## Available hooks

### @smclab/liferay-theme-autoprefixer-hook

This hook will execute `gulp-autoprefixer` after the css is delivered to the `build` directory.

The browser compatibility will be retrived through Browserslist settings.

### @smclab/liferay-theme-babel-hook

This hook will compile your javascript source code by using `gulp-babel`.

The browser compatibility will be retrived through Browserslist settings.

## Contributing

If you want to contribute to this repository you are welcome! Just keep in mind that we have some contribution rules that you can find [here](./CONTRIBUTING.md).

## License

This library, *SMC's Liferay Theme Hooks*, is free software ("Licensed
Software"); you can redistribute it and/or modify it under the terms of the [GNU
Lesser General Public License](http://www.gnu.org/licenses/lgpl-2.1.html) as
published by the Free Software Foundation; either version 2.1 of the License, or
(at your option) any later version.

This library is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; including but not limited to, the implied warranty of MERCHANTABILITY,
NONINFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
Public License for more details.

You should have received a copy of the [GNU Lesser General Public
License](http://www.gnu.org/licenses/lgpl-2.1.html) along with this library; if
not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth
Floor, Boston, MA 02110-1301 USA

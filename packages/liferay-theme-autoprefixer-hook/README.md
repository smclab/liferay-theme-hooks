# @smclab/liferay-theme-autoprefixer-hook

> A [Liferay Theme Tasks](https://github.com/liferay/liferay-theme-tasks) hook to automate CSS vendor prefixing

If you found this hook useful you might consider checking out [liferay-theme-hooks](https://github.com/smclab/liferay-theme-hooks)!

## Installation

After you created your theme (for example with the [Liferay Theme Generator](https://github.com/liferay/generator-liferay-theme)) you can add `@smclab/liferay-theme-autoprefixer-hook` by installing it inside your root folder:

```bash
cd my-awesome-theme
# With npm:
npm install --save-dev @smclab/liferay-theme-autoprefixer-hook
# Or alternatively with Yarn:
yarn add --dev @smclab/liferay-theme-autoprefixer-hook
```

After installing the desired hook add the following to your Liferay theme's `package.json`

```js
{
  "name": "my-awesome-theme",
  // ...the rest of your package.json...
  "liferayTheme": {
    "hookModules": [
      "@smclab/liferay-theme-autoprefixer-hook"
    ]
  }
}
```

## Configuring supported browsers

This hook lets you specify a list of browsers your project needs to support.

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


## How it works

This hook will autoprefix your css using `gulp-autoprefixer` after liferay-theme-tasks delivers the transpiled css to the build directory.

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

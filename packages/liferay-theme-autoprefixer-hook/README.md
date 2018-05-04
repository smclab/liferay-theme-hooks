# @smclab/liferay-theme-autoprefixer-hook

This hook is meant to be used in combination with liferay-theme-tasks to automatically autoprefix your css.

If you found this hook useful you might consider checking out [liferay-theme-hooks](https://github.com/smclab/liferay-theme-hooks)!

## Installation

After you created your theme (for example with the [Liferay Theme Generator](https://github.com/liferay/generator-liferay-theme)) you can add @smclab/liferay-theme-autoprefixer-hook by installing it inside your root folder:

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
# liferay-theme-babel-hook

This hook is meant to be used in combination with liferay-theme-tasks to automatically transpile your javascript code.

If you found this hook useful you might consider checking out [liferay-theme-hooks](https://github.com/smclab/liferay-theme-hooks)!

## Installation

After you created your theme (for example with the [Liferay Theme Generator](https://github.com/liferay/generator-liferay-theme)) you can add liferay-theme-babel-hook by installing it inside your root folder:

```bash
cd my-awesome-theme
# With npm:
npm install --save-dev liferay-theme-babel-hook
# Or alternatively with Yarn:
yarn add --dev liferay-theme-babel-hook
```

After installing the desired hook add the following to your Liferay theme's `package.json`

```js
{
  "name": "my-awesome-theme",
  // ...the rest of your package.json...
  "liferayTheme": {
    "hookModules": [
      "liferay-theme-babel-hook"
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

This hook will execute babel to your theme's javascript using `gulp-babel` after it is moved to the build directory.

# Appfolio JS app Yeoman generator

![Dependency Tracker](https://img.shields.io/david/gthomas-appfolio/generator-appfolio-js.svg "Dependency Tracker") 
![Dependency Tracker](https://img.shields.io/david/dev/gthomas-appfolio/generator-appfolio-js.svg "Dev Dependency Tracker")

This template can be used directly for the creation of new JavaScript apps in APM.

#### Includes

- ES2015 using [Webpack](https://webpack.github.io/) and [Babel](https://babeljs.io/)
- CSS with autoprefixing using [PostCSS](http://postcss.org/) 
- SCSS using [sass-loader](https://github.com/jtangelder/sass-loader) 
- Development server and reloading using [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) and [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)
- Unit tests using [Mocha](https://mochajs.org/) and [assert](https://nodejs.org/api/assert.html)
- Headless browser tests using [Mocha](https://mochajs.org/) and [Nightmare](http://www.nightmarejs.org/)
- Linting using [ESLint](http://eslint.org/)
- Code coverage using [nyc](https://github.com/istanbuljs/nyc)

This generator is written in ES2015. This means it is ___not compatible with node.js versions before 4.0___.

---

## Installation
```bash
npm install -g yo
npm install -g generator-appfolio-js
```

## Setting up projects

Create a new directory, and `cd` into it:

```bash
mkdir my-app
cd my-app
```

Run the generator

```
yo appfolio-js
```
and follow the prompts

## Using
The sample code under `/src` is a basic vanilla JS example to ensure bundling works correctly.
No UI or other frameworks have been included and need to be added by you.

Can be forked directly, but also used as the base template of [generator-appfolio-js](https://github.com/gthomas-appfolio/generator-appfolio-js) Yeoman generator.

----

### Setup

    npm install

### Develop

    npm run
Open [http://localhost:8080](http://localhost:8080) in browser

- Uses [hot-module-replacement](https://webpack.github.io/docs/hot-module-replacement.html) to automatically rebuild and reload modules as the files under `src` are modified.

### Test

    npm test

- Runs unit tests using [Mocha](https://mochajs.org/)
- Runs headless browser tests using Mocha and [Nightmare](http://www.nightmarejs.org/)
- Shows code coverage using [nyc/Istanbul](https://github.com/istanbuljs/nyc).
  A coverage report will also be written in the `./coverage/` directory.

### Lint

    npm run lint

- Runs [ESLint](http://eslint.org/) using [airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) as the base configuration

----

### Contributors
- Gary Thomas
- Michael Jewell
- Li Zhang
- Aaron Panchal
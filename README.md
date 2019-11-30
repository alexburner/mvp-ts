# mvp-ts

This is an experiment using Parcel Bundler to assemble a "Minimum Viable Project" for TypeScript on the web.

#### What is "viable"?

With minimum config, we want a production-ready project, with a full quality dev & build experience.

#### Why Parcel?

Parcel requires zero configuration of its own (other than dev/prod build settings passed as `--flags` to its CLI tool). Instead, it relies entirely on 3rd party config files, such as Babel's `.babelrc` and TypeScript's `tsconfig.json`.

## Project Requirements

#### Non-Browser Languages

- TypeScript
- SCSS

#### Development Environment

- Development Server
- Source Maps
- Code formatting
  - Prettier
  - TSLint

#### Production Build

- Transpilation
- Minification
- Tree Shaking
- Dynamic Imports
- Code Splitting
- Polyfills

## Scripts

```sh
# Installation
npm install  #  download all dependencies

# Development
npm run dev   # rm -rf ./dev && parcel --out-dir dev ./src/index.html
npm run tsc   # tsc --watch --noEmit
npm run test  # jest --watch

# Production (outputs to docs/)
npm run build  # rm -rf ./docs && parcel build --out-dir ./docs --public-url ./ ./src/index.html

# Code formatting (optional: most editors can handle these themselves)
npm run format    # npm run tslint && npm run prettier
npm run prettier  # prettier --write 'src/**/*.+(ts|tsx|json|html|scss)'
npm run tslint    # tslint --fix --project tsconfig.json 'src/**/*.+(ts|tsx)'
```

## NPM Dependencies

#### Runtime

```sh
# Babel generator runtime + CoreJS polyfills
@babel/runtime-corejs2

# React [optional]
react
react-dom
```

#### Development

```sh
# Languages
sass # SCSS
typescript

# Parcel
parcel-bundler

# Babel
@babel/core # compiler core
@babel/plugin-transform-runtime # helps with injected code size

# Formatters
prettier # code style auto-formatter
tslint # typescript linter + fixer

# React types [optional]
@types/react
@types/react-dom
```

## Project Config Files

```sh
tsconfig.json    # For the TypeScript compiler

.babelrc         # For Babel, used by Parcel for transpilation
.browserslistrc  # For Babel preset-env browser targets

jest.config.js   # For Jest so it can parse TypeScript

.prettierrc      # For the Prettier auto-formatter
tslint.json      # For the TSLint linter
```

## Note

This project's config will get even simpler with Parcel 2, which will remove the need for specifying Babel polyfill and generator runtime (async/await) behavior. See relevant repo issue comment here: https://github.com/parcel-bundler/parcel/issues/1762#issuecomment-480687638

When it's done, we'll be able to remove these dependencies:

```sh
@babel/core
@babel/plugin-transform-runtime
@babel/runtime-corejs2
```

And the whole `.babelrc` file.

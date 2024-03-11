<a href="https://github.com/CreoWis/next-js-launchpad/blob/master/LICENSE" target="blank"><img src="https://img.shields.io/github/license/CreoWis/next-js-launchpad?style=flat-square" alt="License" /></a>
<a href="https://github.com/CreoWis/next-js-launchpad/fork" target="blank">
<img src="https://img.shields.io/github/forks/CreoWis/next-js-launchpad?style=flat-square" alt="next-js-launchpad forks"/>
</a>
<a href="https://github.com/CreoWis/next-js-launchpad/stargazers" target="blank">
<img src="https://img.shields.io/github/stars/CreoWis/next-js-launchpad?style=flat-square" alt="next-js-launchpad stars"/>
</a>
<a href="https://github.com/CreoWis/next-js-launchpad/issues" target="blank">
<img src="https://img.shields.io/github/issues/CreoWis/next-js-launchpad?style=flat-square" alt="next-js-launchpad issues"/>
</a>
<a href="https://github.com/CreoWis/next-js-launchpad/pulls" target="blank">
<img src="https://img.shields.io/github/issues-pr/CreoWis/next-js-launchpad?style=flat-square" alt="next-js-launchpad pull-requests"/>
</a>

# 🚀 NextJsLaunchpad

The comprehensive toolkit for developing Next.js projects.

With NextJsLaunchpad, you get

- a robust foundation equipped with essential tools,
- configurations, and best practices to streamline your development workflow.

Say goodbye to setup headaches and hello to consistent code quality. Elevate your Next.js projects with NextJsLaunchpad.

## ✨ Features

- **Next.js**: Utilize the power of Next.js for server-rendered React applications.
- **TypeScript**: Enhance your development experience with TypeScript's static typing.
- **Tailwind CSS**: Rapidly build custom designs with Tailwind CSS's utility-first approach.
- **ESLint**: Enforce code quality standards and catch errors early with ESLint.
- **Prettier**: Keep your codebase clean and consistent with automatic code formatting using Prettier.
- **Prettier Plugin Tailwindcss**: Automatic sorting of tailwind classnames using the official prettier plugin.
- **Prettier Plugin Sort Imports**: Organize import declarations alphabetically within groups, which can help improve readability when working on larger projects.
- **Husky**: Ensure code quality and prevent bad commits with pre-commit hooks powered by Husky.

## Getting Started

> Usage

```bash
npx create-next-app -e https://github.com/CreoWis/next-js-launchpad
```

<!-- Project should be public for the above command to work -->

## Folder Structure

```bash
.
├── __tests__
├── lib
├── public
└── src
    ├── app
    └── components
        ├── footer
        └── ui
    ├── config
    ├── constants
    ├── context
    ├── data
    ├── db
    ├── hooks
    ├── modules
    ├── queries
    ├── services
    ├── store
    └── utils
├── styles
├── types
```

**\_\_tests\_\_**: This folder contains all 'tests'.

**lib**: This folder may contain utility functions that can be converted later into packages that are used across multiple applications.

**public**: Self explanatory.

**src/components**: This directory contains your UI components. It's further subdivided into ui for generic UI components and shared for components that might be reused across different parts of your application.

> [Conventions for src/components](#convention)

**src/constants**: As the name suggests this folder contains constants.

**src/context**: The context folder in React JS is a folder that stores all of the context files for the application. Context is a way to pass data through the component tree without having to pass props down manually at every level. This can be useful for data that needs to be accessed by many components, such as the current user or the current state of the application.

**src/data**: The data folder in React JS is used to store data assets such as JSON files that contain information used in the application. It is similar to the assets folder, but it is specifically for storing data.

**src/db**: The db folder in React JS is typically used to store database-related files, such as database configuration files, migration scripts, and seed files.

**src/hooks**: This directory may house custom hooks that are used throughout your application.

> [Conventions for src/hooks](#convention2)

**src/modules**: Modules which is also synonymous with 'sections/features' are logical groupings of code that make up the larger pages.

**src/queries**: This directory may contain GraphQL queries.

**src/services**: This folder helps separate the concerns of your application by isolating data fetching and manipulation logic from the components that render the UI.

**src/store**: The store folder in React JS is used to store global state data that is used throughout the application. This data can be anything from the current user's login status to the contents of a shopping cart. The store folder is typically created in the root directory of the project and contains a number of files, including the store itself, actions, and reducers.

**src/utils**: This directory may contain utility functions that do not make sense to convert into packages later.

**styles**: As the name suggests, this directory contains the css pages that is responsible for styling.

**types**: This folder contains TypeScript type definitions.

## Conventions

Throughout the project, unless otherwise mentioned, we will be using the following convention:

- folders and files are named in lowercase with words separated by hyphen (kebab-case). For example, `my-folder` or `my-file`.
- Functions -> `camelCase` E.g. _filterProductsByType_ , _formatCurrency_
- Variables -> `camelCase` E.g. _products_, _productsFiltered_
- Global constants -> all caps `UPPERCASE`. For example: `MAX_VALUE`, `MIN_VALUE`
- Object constants -> Singular, capitalized with const assertion and optionally satisfies type (if there is one).

```js
const ORDER_STATUS = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    error: 'error',
  } as const satisfies OrderStatus;
```

- component names -> `PascalCase` E.g. _export function Footer() {}_
- types should have `.d.ts` extension. E.g. _root.d.ts_
- use arrow functions wherever possible.
- ui folder can contain granular level components like _button_, _dialog_, _input_ etc which can be used to build other components.
- use given folders for various kinds of files. E.g. _types should reside in types folder_

NOTE: Check granular level README for overiding rules (if any). If there are cases where industry standards over-ride the rules mentioned above, please feel free to use them. For example convention for naming hooks.

> <a id="convention">Conventions for src/components</a>

- ui components will go inside the ui folder
- each component will be a folder of its own. Sub-components, if any will reside in the same folder. Each such folder will have index.ts file which will export all components. E.g. `export { Footer as default } from './footer';` 
- separate folder for routes. E.g. about-us route will have a folder by the same name inside component folder which will have other components inside it.

Example: take a look at the `footer` component.

> <a id="convention2">Conventions for src/hooks</a>

- `camelCase` beginning with the word _use_ e.g. useFetchData: A generic fetching hook for making HTTP requests to a specified endpoint.

## 💡 Authors

- [@Chhakuli Zingare](https://github.com/chhakuli123)
- [@Joy Poddar](https://github.com/joypoddar)
- [@Tapas Adhikary](https://github.com/atapas)

## 🤝 Contributing

Contributions are always welcome!

See [CONTRIBUTING.md](https://github.com/CreoWis/next-js-launchpad/blob/main/CONTRIBUTING.md) for ways to get started.

Please adhere to this project's [code of conduct](https://github.com/CreoWis/next-js-launchpad/blob/main/CODE_OF_CONDUCT.md).

## 🙏 Support Us

This is an OSS project by team [CreoWis](https://www.creowis.com/). We need all the support we can get. Please give this project a ⭐️ to encourage and show that you liked it.

If you found the project helpful, consider supporting us with a coffee.

<a href="https://www.buymeacoffee.com/creowis">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50px">
</a>

## Acknowledgements

- [Next.JS](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)

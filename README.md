# React Component Boilerplate

A simple boilerplate setup for creating a React component library.

## Installation
`npm install && npx npm-install-peers`

## Setup
* Edit `package.json`.
    * Find and change the name, description, author, repository, license, etc. to values appropriate for your library.
* Edit `webpack.config.js`.
    * Find the line that reads `library: 'react-component-boilerplate'` and change `react-component-boilerplate` to the name of your library.

## Testing
`npm run test` which simply runs `jest`... need I say more? :)

## Workflow
Source code for the library should reside in the `src` directory.

`index.js` is the entry point and should export whatever you want for your library.

In order to facilitate working with your library as it would be used in a host application, a barebones React app is included in the `dev` directory. Its `index.js` is the entry point for the host test bed.

Running `npm run dev` will start `webpack-dev-server` and serve content from the `dev` directory.

## Building
`npm run build` will build the production version of the component to the `dist` directory.

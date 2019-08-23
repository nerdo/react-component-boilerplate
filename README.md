# React Component Boilerplate

A simple boilerplate setup for creating a React component library.

## Installation
While in the boilerplate repository path, run this command to create a fresh copy of the boilerplate, replacing `/path/to/new/repo` with an absolute or relative path to where you want the new repository to end up.

```
npx make-fresh-repo /path/to/new/repo
```

## Setup
Change into the new repository's directory and install the necessary modules:

```
cd /path/to/new/repo
npm install && npx npm-install-peers
```

Edit `package.json`. Find and change the name, description, author, repository, license, etc. to values appropriate for your library.

Don't forget to also change the `README.md` and `LICENSE` files if necessary.

## Testing
```
npm run test
```
...which simply runs `jest`... need I say more? :)

## Workflow
Source code for the library should reside in the `src` directory.

`index.js` is the entry point and should export whatever you want for your library.

In order to facilitate working with your library as it would be used in a host application, a barebones React app is included in the `dev` directory. Its `index.js` is the entry point for the host test bed.

For development, run

```
npm run dev
```

...which simply starts `webpack-dev-server` and serves content from the `dev` directory.

## Building
To build the production version of the component to the `dist` directory:

```
npm run build
```

# React Component Boilerplate

A simple boilerplate setup for creating a React component library.

## Installation
While in the boilerplate repository path, run this command to create a fresh copy of the boilerplate, replacing `/path/to/component/repo` with an absolute or relative path to where you want the new repository to end up.

```
npx make-fresh-repo /path/to/component/repo
```

## Setup
Change into the component repository's directory and install the necessary modules:

```
cd /path/to/component/repo
npm install
```

Edit `package.json`. Find and change the name, description, author, repository, license, etc. to
values appropriate for your library. You should also probably do a find in files to find references
to `Boilerplate` and rename any of those boilerplate files to the name of your component.

Don't forget to also change the `README.md` and `LICENSE` files.

## Testing
```
npm run test
```
...which simply runs `jest`... need I say more? :)

## Workflow
Source code for the library should reside in the `src` directory.

`index.js` is the entry point and should export whatever you want for your library.

### Development (built-in)
In order to facilitate working with your library as it would be used in a host application, a barebones React app is included in the `dev` directory. Its `index.js` is the entry point for the host test bed.

It also contains a `Dev` component which is the component root for development purposes.

For development, run

```
npm run dev
```

...which simply starts `live-server` and serves content from the `dev` directory.

### Development (external host)
You may also want to develop your component inside an existing/external host app.

The best way to do this is to...

1. Ensure you've edited your `project.json` and given your component the proper `name`.
2. Run `npm link` inside of `/path/to/component/repo`. This will allow you to symlink your component
   via npm using the `name` in `package.json`.
3. Go to your host app and run `npm link NAME-IN-PACKAGE-JSON`.

For example:

```
cd /path/to/component/repo
# edit package.json to have the name 'foo-component'
npm link
cd /path/to/host/app
npm link foo-component
```

At this point you can go back to your component directory and run `npm watch` which builds the
component for production and watches the directory for changes. Run your host app and develop to
your heart's content :)

## Building for production
To build the production version of the component to the `dist` directory:

```
npm run build
```

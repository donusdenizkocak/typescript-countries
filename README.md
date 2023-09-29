This means you can get started with:

# Creates an app called my-app
npx create-react-app my-app --typescript

cd my-app

# Adds the type definitions
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

echo "Good to go :tada:"
This repo offers some exmples on how to take that project into production and handle testing and state. However, you can also use the official documentation in the Create React App website for that.



Of note:

tsconfig.json contains TypeScript-specific options for our project.
We also have a tsconfig.prod.json and a tsconfig.test.json in case we want to make any tweaks to our production builds, or our test builds.
tslint.json stores the settings that our linter, TSLint, will use.
package.json contains our dependencies, as well as some shortcuts for commands we'd like to run for testing, previewing, and deploying our app.
public contains static assets like the HTML page we're planning to deploy to, or images. You can delete any file in this folder apart from index.html.
src contains our TypeScript and CSS code. index.tsx is the entry-point for our file, and is mandatory.

Running the project is as simple as running

npm run start
This runs the start script specified in our package.json, and will spawn off a server which reloads the page as we save our files. Typically the server runs at http://localhost:3000, but should be automatically opened for you.

This tightens the iteration loop by allowing us to quickly preview changes.
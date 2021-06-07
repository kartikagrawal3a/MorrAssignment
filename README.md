# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Folder Structure

There are 2 main Folders i.e. **public** and **src**. 

The Deployable solution is built in public folder with an entry point of **index.html**. Apart from this, it contains some files like logo192.png, manifest.json, robots.txt. 

**src** folder contains the entire Source Code of the Assignment. It further contains 4 sub directories named as **Assets**, **Components**, **Styles**, **__tests__**. 
- **Assets** folder contains all the media assets, such as images, videos, etc..
- **Components** folder contains all the Components that are used in the Assignment.
- **styles** folder contains CSS Modules for the respective components present inside Components folder.
- **__tests__** folder contains Unit tests for respective Components along with Snapshots of component tree.

Apart from sub directories **src** folder consists following files :
- **App.js** is a sample React Component called "App" which we get when creating a new app. This Component contains Routes to the sub components i.e. **Home, Series, Movies**.
- **App.css** file gives some stylig if needed which is used by **App** components.
- **index.js** stores our main Render call from ReactDOM. It imports **App** component and tells React where to render it.
- **index.css** stores the base styling of the Application (which is used in more than 1 component).

## Architectural Decision

- We have used **React** to build the Application. It facilitates the overall process of writing reusable components which boosts productivity and facilitates further maintenance. It uses concept of Virtual DOM which ensures Fast Rendering. It gaurantees stable code and is SEO friendly. There are many more points which makes **React** the best option for this purpose.
- For styling the components we have used **CSS Modules**. A **CSS Module** is a file in which all class names and animation names are scoped locally by default. It provides Modular and Reusable CSS and avoid styling conflicts.
-  We have used **react testing library** and **react-test-renderer** to test the components. **react testing library** is a very light-weight solution for testing react components. It also exposes a recommended way to find elements by a unique identifier like title, data-testid etc.. **resct-test-renderer** is an external package which makes it easy to grab a snapshot of the "DOM Tree" rendered by a React DOM without using a browser.

## Are there any improvements you could make to your submission?

Every Application have some flaws and Limitations. Though the code is already well managed, I could further improve the quality of code to make it more readable. Quality of Test could also be improved so that it can test the respective component more precisely.

## What would you do differently if you were allocated more time?

This a basic application which is developed in 48 easily. If I were allocated more time, I would add pagination feature in Home, Series and Movies Component so that in future, if count of Categories, Movies or Series increases, it would be handled easily by pagination feature. I would also improve the quality of Tests.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
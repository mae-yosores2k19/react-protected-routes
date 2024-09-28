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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/)

## Protected Routes

Protected routes are routes in a web application that require the user to be authenticated before they can access them. These routes are typically used to protect sensitive or private content that should only be accessible to authenticated users.

To create a protected route, you need to use the React Router Route component and specify the path that you want to protect. Then, you can use the render prop function to conditionally render the component that you want to protect.

If the user is not authenticated, they will be redirected to the login page. Otherwise, they will be able to access the protected route.

A protected route is one that can only be accessed by an authenticated user. If a user tries to access a protected route and they are not logged in, they should be redirected to the login page.

## Significant modifications have been made to React Router V6

This structure will be affected by some key changes with React Route 6.

For one, <Redirect> is now <Navigate>.

Next, <Routes> was added so we no longer use <Switch>. With this change <Route> must always be a child to <Routes> which throws out the option of being able to extend our <Route>. The job of the <Routes> component is to look through all the <Route> components and find a match to render to the UI. If we used <PrivateRoutes> here it would be ignored by <Routes>. So that’s that.

So what do we do now?

With React Router V6 we now have a component called <Outlet>. The <Outlet> component can be used in a parent <Route> element to render out child elements. So the solution would be to nest private routes inside of a parent route.

# Netlify Preview Contentful App

This Contentful app lets you preview your draft content on your static site before your publish to production.

This app is for you if:

- You store your content in Contentful
- You fetch your content at build time to a static site
- You host your site on Netlify
- You want to preview draft content without deploying to production

## Are you new to Contentful apps?

[Check out this tutorial from Contentful](https://www.contentful.com/developers/docs/extensibility/app-framework/tutorial/)
that takes you through building your first app from scratch. If you fork this repo, you won't be building from scratch,
but all of the same concepts apply.

## Want a full tutorial to use this app?

[Read the blog post](https://ntl.fyi/3vcrRDl)

## To use this app in your Contentful space

### 1. Fork this repository to your GitHub account

### 2. Deploy the app to Netlify with the following environment variables

### `REACT_APP_NETLIFY_BUILD_HOOK`

1. Configure a branch deploy on your site that is not your production branch (e.g. `preview`). Ensure the code is
   adapted on the preview branch to
   [fetch and build draft content](https://www.contentful.com/developers/docs/references/content-preview-api/)
2. Set up a [branch deploy on Netlify](https://docs.netlify.com/site-deploys/overview/#branch-deploy-controls) for your
   new preview branch
3. Generate a [build hook in Netlify](https://docs.netlify.com/configure-builds/build-hooks/) to deploy to your preview
   branch
4. In your build and deploy settings, set `REACT_APP_NETLIFY_BUILD_HOOK` as the value of the new build hook

### `REACT_APP_NETLIFY_URL`

This environment variable provides a value to the app that lets you open your Netlify dashboard straight from the
Contentful UI. Set `REACT_APP_NETLIFY_URL` as the URL you wish to open.

### 3. Install the app to Contentful

Configure your app to display on the content types of your choice. It will appear in the sidebar.

### 4. Try it out

Change some content — **don't press publish**!

Click on "Build to Netlify", open up your Netlify dashboard, and watch your preview branch build.

---

## More about Contentful Apps

This project was bootstrapped with [Create Contentful App](https://github.com/contentful/create-contentful-app).

## Available Scripts

In the project directory, you can run:

#### `npm start`

Creates or updates your app definition in Contentful, and runs the app in development mode. Open your app to view it in
the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the
build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

#### `npm run upload`

Uploads the build folder to contentful and creates a bundle that is automatically activated. The command guides you
through the deployment process and asks for all required arguments. Read
[here](https://www.contentful.com/developers/docs/extensibility/app-framework/create-contentful-app/#deploy-with-contentful)
for more information about the deployment process.

#### `npm run upload-ci`

Similar to `npm run upload` it will upload your app to contentful and activate it. The only difference is  
that with this command all required arguments are read from the environment variables, for example when you add the
upload command to your CI pipeline.

For this command to work, the following environment variables must be set:

- `CONTENTFUL_ORG_ID` - The ID of your organization
- `CONTENTFUL_APP_DEF_ID` - The ID of the app to which to add the bundle
- `CONTENTFUL_ACCESS_TOKEN` - A personal
  [access token](https://www.contentful.com/developers/docs/references/content-management-api/#/reference/personal-access-tokens)

## Libraries to use

To make your app look and feel like Contentful use the following libraries:

- [Forma 36](https://f36.contentful.com/) – Contentful's design system
- [Contentful Field Editors](https://www.contentful.com/developers/docs/extensibility/field-editors/) – Contentful's
  field editor React components

## Using the `contentful-management` SDK

In the default create contentful app output, a contentful management client is passed into each location. This can be
used to interact with Contentful's management API. For example

```js
// Use the client
cma.locale.getMany({}).then((locales) => console.log(locales));
```

Visit the
[`contentful-management` documentation](https://www.contentful.com/developers/docs/extensibility/app-framework/sdk/#using-the-contentful-management-library)
to find out more.

## Learn More

[Read more](https://www.contentful.com/developers/docs/extensibility/app-framework/create-contentful-app/) and check out
the video on how to use the CLI.

Create Contentful App uses [Create React App](https://create-react-app.dev/). You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and how to further
customize your app.

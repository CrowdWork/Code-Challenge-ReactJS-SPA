Code-Challenge-ReactJS-SPA

Challenge 1:
Objective - Content Syndication
Goal - Render data from a JSON REST API endpoint into a static frontend HTML webpage template.
Goal - Demonstrate that any frontend language can be used to fetch posts from an API endpoint across various connected repositories.
Goal - Map out all platform and package dependencies

Other Challenge Ideas:

- Update implementation of this template and dependencies.
- Use a different JavaScript framework (other than React) to render posts from this endpoint. New repo will need to be cloned.
- Extend functionality of site by adding additional endpoints.
- Search and Filter posts by post categories.
- Add global CSS styling to all pages.
- Propose your own idea at coopdevcenter.org (coming soon)

Related Reading: https://smartbear.com/learn/performance-monitoring/api-endpoints/

Keywords: REST API, JSON, WordPress, Headless CMS, Micro-Frontend. JavaScript

Request to be added as a contributor to CrowdWork on GitHub to be added to the codesandbox.io project URL for live coding environment.

Changelog 0.2 - 0.1 - Replaced homepage content. Replaced REST endpoint to fetch dcstakeholders.coop posts

Thanks to the original code sponsors - Technical Documentation Below.

# React WordPress REST API Demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/be9fb77e-a2a6-4ef0-b3ac-fd0ae72914af/deploy-status)](https://app.netlify.com/sites/react-wordpress-api-demo/deploys)

Create an single page app using the WordPress [REST API](https://developer.wordpress.org/rest-api/) and Create React App.

_NOTE: This repo is dated, and needs to be refactored to use [React Hooks](https://reactjs.org/docs/hooks-intro.html)._

https://react-wordpress-api-demo.netlify.app/

## Development

Clone the repo:

```bash
git clone git@github.com:gregrickaby/React-WordPress-API-Demo.git
```

Install dependencies:

```bash
cd React-WordPress-API-Demo && yarn
```

Start dev server:

```bash
yarn start
```

Build a production ready app:

```bash
yarn build
```

## FAQ

### I don't see posts

It's because your web broswer is blocking [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). Disable tracking protection in Firefox and/or any ad blockers.

### I want to use my WordPress REST-API endpoint

1. Open `/src/config.js`
2. Change `wordPressURL` to match your website

```js
  options: {
    wordPressUrl: "https://YOUR-WORDPRESS-WEBSITE-URL/wp-json/wp/v2/posts",
  },
```

3. Run `yarn start` or `yarn build` to view your data

---

Built with [Create React App](https://github.com/facebook/create-react-app), [WordPress](https://wordpress.org), and hosted on [Netlify](https://www.netlify.com/)

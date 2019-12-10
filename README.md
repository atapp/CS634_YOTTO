## Static site created for YOTTO

<marquee>
  <div>
  <a href="https://app.netlify.com/sites/cs634-group1-hogg/deploys?utm_source=github">
<img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/9d539254-7026-4387-a832-d27d24cba945/deploy-status?utm_source=github" />
  </a>
  </div>
</marquee>

Features:

- 🔏Authentication (with Netlify Identity)
- 😻External Provider login with GitHub, Bitbucket, Google, etc.
- 🏠Protected Routes
- 👋🏼Dynamic Clientside Pages in Gatsby (enabling all the above)

## How to run this locally

For local development, first make sure you have Netlify CLI:

```bash
npm i -g netlify-cli

## if you are totally new, you will probably need to log in, e.g.
netlify login
```

And then you can run this project with:

```bash
netlify dev # or ntl dev
```

This starts up both the Gatsby server (at port 8000) and a functions server (at a randomly selected port) and proxies them for you to a new port (usually port 8888). So make sure you go to `http://localhost:8888` to have the project work

You can read the [Netlify Dev docs](https://www.netlify.com/docs/cli/?utm_source=github&utm_medium=swyx-jamstack&utm_campaign=devex#netlify-dev-beta) for more info.

## Further Documentation in nested READMEs

- please see the [src README](/src/README.md) for explanation on the layout
- please see the [app README](/src/app/README.md) for explanation on the app

## Other Resources

All images are compressed and stored in the images folder. These are deployed with Netlify Large File CDN

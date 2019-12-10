// TODO: dear user, please change this to your own instance
const netlifyInstance = "https://cs634-group1-hogg.netlify.com"
if (netlifyInstance === "https://cs634-group1-hogg.netlify.com") {
  console.warn(`

**************************
WARNING: currently using Netlify Identity of https://cs634-group1-hogg.netlify.com

this is only meant for the working demo. if you forked or copied this code, you won't have access to this netlify identity instance

Go to your site, enable Netlify Identity, and paste that string here


More docs: https://www.netlify.com/docs/identity/

**************************
`)
}

module.exports = {
  siteMetadata: {
    title: "JAMstack Hackathon Starter",
    description: `Kick off your next, great Gatsby app.`,
    author: `@swyx`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url: netlifyInstance,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}

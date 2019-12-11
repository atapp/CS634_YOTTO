// TODO: dear user, please change this to your own instance
const netlifyInstance = "https://cs634-group1-hogg.netlify.com"

module.exports = {
  siteMetadata: {
    title: "CS634-Project-Hogg",
    description: `Making a site for Yotto`,
    author: `@ataap`,
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
  ],
}

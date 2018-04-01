module.exports = {
  siteMetadata: {
    title: `Brian Perry`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://bpicontenta.backlineint.webfactional.com/`,
        apiBase: `api`, // optional, defaults to `jsonapi`
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-50610760-1",
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
}
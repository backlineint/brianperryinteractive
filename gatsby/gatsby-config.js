module.exports = {
  siteMetadata: {
    title: `Brian Perry`,
    description: `Thoughts about web development and occasionally Nintendo.`,
    siteUrl: `http://brianperryinteractive.com`
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-50610760-1",
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allNodePost } }) => {
              return allNodePost.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.title,
                  description: edge.node.body.value,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.body.value }],
                });
              });
            },
            query: `
            {
              allNodePost(
                limit: 1000,
                sort: { fields: [created], order: DESC },
              ) {
                edges {
                  node {
                    title
                    body {
                      value
                    }
                    fields {
                      slug
                    }
                    created
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
          },
        ],
      },
    },
  ],
}
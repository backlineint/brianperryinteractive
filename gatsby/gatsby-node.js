const path = require(`path`)
const slugify = require('slugify')
const createPaginatedPages = require('gatsby-paginate')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `node__post`) {
    const slug = '/' + node.post_type + '/' + slugify(node.title, { lower: true }) + '/'
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: `type`,
      value: node.post_type,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
    {
      allNodePost(sort: { fields: [created], order: DESC }) {
        totalCount
        edges {
          node {
            id
            title
            link
            body {
              value
            }
            relationships {
              image {
                localFile {
                  childImageSharp {
                    sizes(maxWidth: 1250) {
                      base64
                      aspectRatio
                      src
                      srcSet
                      sizes
                    }
                  }
                }
              }
            }
            fields {
              slug
            }
            post_type
            created
          }
        }
      }
    }
    `
    ).then(result => {
      createPaginatedPages({
        edges: result.data.allNodePost.edges,
        createPage: createPage,
        pageTemplate: "src/templates/index.js",
        pageLength: 5,
      });
      result.data.allNodePost.edges.forEach(({ node }) => {
        if (node.post_type === 'link') {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/link.js`),
            context: {
              slug: node.fields.slug,
            },
          })
        }
        else if (node.post_type === 'note') {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/note.js`),
            context: {
              slug: node.fields.slug,
            },
          })
        }
        else {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/post.js`),
            context: {
              slug: node.fields.slug,
            },
          })
        }
      })
      resolve()
    })
  })
}
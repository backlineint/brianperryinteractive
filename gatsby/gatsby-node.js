const path = require(`path`)
const slugify = require('slugify')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
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
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        allNodePost {
          edges {
            node {
              fields {
                slug
                type
              }
            }
          }
        }
      }
    `
    ).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/post-markdown.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      result.data.allNodePost.edges.forEach(({ node }) => {
        if (node.fields.type === 'link') {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/link.js`),
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
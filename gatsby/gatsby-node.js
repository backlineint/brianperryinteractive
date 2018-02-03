const path = require(`path`)
const slugify = require('slugify')

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
        if (node.fields.type === 'note') {
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
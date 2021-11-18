const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */
module.exports = async ({ actions, graphql, reporter }, options) => {
  const { createPage } = actions
  // query content for WordPress posts
  const {
    data: {
      allWpPost: { nodes: allPosts },
    },
  } = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          uri
        }
      }
    }
  `)
  const postTemplate = path.resolve(`./src/templates/post/post.template.jsx`)
  allPosts.forEach(post => {
    const path = `blog${post.uri}`
    createPage({
      // will be the url for the page
      path: path,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
      },
    })
    reporter.info(`post created:  ${path}`)
  })

  reporter.info(`# -----> POSTS TOTAL: ${allPosts.length}`)
}

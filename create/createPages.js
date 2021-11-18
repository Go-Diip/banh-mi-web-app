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
      allWpPage: { nodes: allPages },
    },
  } = await graphql(`
    query {
      allWpPage {
        nodes {
          id
          uri
        }
      }
    }
  `)
  const pageTemplate = path.resolve(`./src/templates/page/page.template.jsx`)
  allPages.forEach(page => {
    let pagePath = `${page.uri}`

    // Exclude hardcoded pages
    if (pagePath === "/layouts/") return

    /**
     * If the page is the front page, the page path should not be the uri,
     * but the root path '/'.
     */
    if (page.isFrontPage) {
      pagePath = "/"
    }

    createPage({
      // will be the url for the page
      path: pagePath,
      // specify the component template of your choice
      component: slash(pageTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: page.id,
      },
    })
    reporter.info(`page created:  ${page.uri}`)
  })

  reporter.info(`# -----> PAGES TOTAL: ${allPages.length}`)
}

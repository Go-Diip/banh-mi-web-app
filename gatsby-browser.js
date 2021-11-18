/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import Provider from "./src/provider"

export const wrapRootElement = Provider

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#onRouteUpdate
// export const onRouteUpdate = ({ location, prevLocation }) => {
//   window.scrollTo(0, 0)
// }

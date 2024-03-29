import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { getPageLayout } from "../../get-layout-utils"

export const query = graphql`
  query PageQuery($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      isFrontPage
      title
      content
      uri
      slug
      parentId
      seo {
        canonical
        title
        focuskw
        metaDesc
        metaKeywords
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphImage {
          altText
          sourceUrl
          title
        }
        opengraphPublishedTime
        opengraphPublisher
        opengraphSiteName
        opengraphTitle
        opengraphType
        opengraphUrl
        twitterDescription
        twitterTitle
        twitterImage {
          altText
          sourceUrl
          title
        }
      }
      pageBuilder {
        layouts {
          ... on WpPage_Pagebuilder_Layouts_MiscContent {
            ...MiscContent
          }
          ... on WpPage_Pagebuilder_Layouts_ReservationGrid {
            ...ReservationGrid
          }
          ... on WpPage_Pagebuilder_Layouts_AboutUsSection {
            ...AboutUsSection
          }
          ... on WpPage_Pagebuilder_Layouts_Menu {
            ...Menu
          }
          ... on WpPage_Pagebuilder_Layouts_Hero {
            ...Hero
          }
          ... on WpPage_Pagebuilder_Layouts_FullMenu {
            ...FullMenu
          }
          ... on WpPage_Pagebuilder_Layouts_PromoGrid {
            ...PromoGrid
          }
        }
        pageConfiguration {
          hideFooter
          hideHeaderItems
          isHome
        }
      }
    }
  }
`
const PageTemplate = ({ data }) => {
  const { seo, slug, pageBuilder, title } = data.wpPage
  const layouts = pageBuilder.layouts || []
  return (
    <Layout
      {...pageBuilder.pageConfiguration}
      isHome={pageBuilder.pageConfiguration.isHome}
      seo={seo}
    >
      {layouts.map(layout => getPageLayout(layout))}
    </Layout>
  )
}

export default PageTemplate

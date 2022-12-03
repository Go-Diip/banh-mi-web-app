import { graphql } from "gatsby"

export const query = graphql`
  fragment PromoGrid on WpPage_Pagebuilder_Layouts_PromoGrid {
    fieldGroupName
    title
    menu
    images {
      image {
        altText
        sourceUrl
        title
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
      }
    }
    button {
      title
      file {
        altText
        title
        mediaItemUrl
      }
    }
  }
`

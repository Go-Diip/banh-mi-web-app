import { graphql } from "gatsby"

export const query = graphql`
  fragment Menu on WpPage_Pagebuilder_Layouts_Menu {
    fieldGroupName
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
    title
    description
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
    buttons {
      buttonTitle
      fileOrLink
      fileDoc {
        altText
        title
        mediaItemUrl
      }
      link {
        target
        title
        url
      }
    }
  }
`

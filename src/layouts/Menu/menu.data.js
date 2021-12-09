import { graphql } from "gatsby"

export const query = graphql`
  fragment Menu on WpPage_Pagebuilder_Layouts_Menu {
    fieldGroupName
    menuOptions {
      option {
        title
        menuOptions {
          name
          description
          price
        }
      }
    }
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
  }
`

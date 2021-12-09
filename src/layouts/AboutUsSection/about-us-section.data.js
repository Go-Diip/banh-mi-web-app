import { graphql } from "gatsby"

export const query = graphql`
  fragment AboutUsSection on WpPage_Pagebuilder_Layouts_AboutUsSection {
    fieldGroupName
    title
    description
    chefs
    leftImage {
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
`

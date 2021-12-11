import { graphql } from "gatsby"

export const query = graphql`
  fragment ReservationGrid on WpPage_Pagebuilder_Layouts_ReservationGrid {
    fieldGroupName
    title
    numDesc
    number

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
    button {
      title
      url
      target
    }
  }
`

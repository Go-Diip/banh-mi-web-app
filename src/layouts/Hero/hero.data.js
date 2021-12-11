import { graphql } from "gatsby"

export const query = graphql`
  fragment Hero on WpPage_Pagebuilder_Layouts_Hero {
    fieldGroupName
    title
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
    logo {
      altText
      sourceUrl
      title
      localFile {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
    reservationButton {
      title
      url
      target
    }
    orderButton {
      title
      url
      target
    }
  }
`

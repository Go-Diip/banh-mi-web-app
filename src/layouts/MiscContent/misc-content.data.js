import { graphql } from "gatsby"

export const query = graphql`
  fragment MiscContent on WpPage_Pagebuilder_Layouts_MiscContent {
    containerMaxWidth
    content
    fieldGroupName
  }
`

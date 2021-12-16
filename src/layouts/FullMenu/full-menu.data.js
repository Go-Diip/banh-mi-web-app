import { graphql } from "gatsby"

export const query = graphql`
  fragment FullMenu on WpPage_Pagebuilder_Layouts_FullMenu {
    fieldGroupName
    title
  }
`

import React from "react"
import Layout from "../components/layout"
import MiscContent from "../layouts/MiscContent"
import { LayoutTitle } from "../styles/app.styles"
import CustomButton from "../components/custom-button/custom-button.component"
import ReservationGrid from "../layouts/ReservationGrid"
import { graphql, useStaticQuery } from "gatsby"

const Layouts = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  return (
    <Layout
      seo={{
        title: "Layouts - ONLY FOR DEV",
        metaRobotsNoindex: "noindex",
        metaRobotsNofollow: "nofollow",
      }}
    >
      <LayoutTitle>MiscContent</LayoutTitle>
      <MiscContent content={`<p>Some content Here</p>`} />
      <LayoutTitle>ReservationGrid</LayoutTitle>
      <ReservationGrid
        images={[
          { image: staticQuery.hero },
          { image: staticQuery.hero },
          { image: staticQuery.hero },
        ]}
      />
    </Layout>
  )
}

export default Layouts

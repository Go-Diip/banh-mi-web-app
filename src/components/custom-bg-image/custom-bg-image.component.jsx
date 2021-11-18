import React from "react"
import PropTypes from "prop-types"
import * as S from "./custom-bg-image.styles"
import { GatsbyImage } from "gatsby-plugin-image"

const CustomBgImage = props => {
  const { img, tag, fallback, children, ...otherProps } = props

  if (!img) {
    return <section {...props}>{children}</section>
  }

  let image = ""

  if (img.localFile) {
    image = img.localFile.childImageSharp.gatsbyImageData
  }

  if (img.childImageSharp) {
    image = img.childImageSharp.gatsbyImageData
  }

  if (!img && fallback) {
    if (fallback.localFile) {
      image = img.localFile.childImageSharp.gatsbyImageData
    }
    if (fallback.childImageSharp) {
      image = fallback.childImageSharp.gatsbyImageData
    }
  }

  return (
    <S.Wrapper component={tag ? tag : "section"} {...otherProps}>
      {image && <GatsbyImage image={image} role="presentation" />}
      {children}
    </S.Wrapper>
  )
}

CustomBgImage.propTypes = {
  img: PropTypes.object.isRequired,
  tag: PropTypes.string,
}

export default CustomBgImage

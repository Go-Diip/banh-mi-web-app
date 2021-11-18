import React from "react"
import PropTypes from "prop-types"
import * as S from "./custom-image.styles"
import { GatsbyImage } from "gatsby-plugin-image"

const CustomImage = ({
  img,
  alt,
  className,
  placeholderStyle,
  arPaddingPercentage,
  withFallback = false,
  ...props
}) => {
  if (!img) return null

  let image = ""
  let imgAlt = alt

  if (!imgAlt) {
    imgAlt = img.altText ? img.altText : img.title
  }

  if (img.localFile && img.localFile.childImageSharp) {
    image = img.localFile.childImageSharp.gatsbyImageData
  }

  if (img.childImageSharp) {
    image = img.childImageSharp.gatsbyImageData
  }

  if (image) {
    return (
      <S.Wrapper paddingpercentage={arPaddingPercentage} className={className}>
        <GatsbyImage image={image} alt={imgAlt} {...props} />
      </S.Wrapper>
    )
  }

  if (img.sourceUrl || typeof img === "string" || img instanceof String) {
    return (
      <S.Wrapper
        paddingpercentage={arPaddingPercentage}
        className={className}
        {...props}
      >
        <img src={img.sourceUrl ? img.sourceUrl : img} alt={alt} />
      </S.Wrapper>
    )
  }
}

CustomImage.propTypes = {
  img: PropTypes.object.isRequired,
  arPaddingPercentage: PropTypes.number,
}

export default CustomImage

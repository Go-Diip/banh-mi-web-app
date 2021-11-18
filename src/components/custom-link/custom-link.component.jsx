import React from "react"
import PropTypes from "prop-types"
import * as S from "./custom-link.styles"

const CustomLink = ({ url, children, ...otherProps }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(url)
  const file = /\.[0-9a-z]+$/i.test(url)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    if (file) {
      return (
       <S.CustomRegularLink href={url} {...otherProps}>
          {children}
        </S.CustomRegularLink>
      )
    }
    return (
     <S.CustomLink
        partiallyActive={true}
        activeClassName="active"
        to={url}
        {...otherProps}
      >
        {children}
      </S.CustomLink>
    )
  }

  // <S.CustomAniLink
  //   fade to={url}
  //>
  //   {children}
  // </S.CustomAniLink

  return (
    <S.CustomRegularLink href={url} {...otherProps}>
      {children}
    </S.CustomRegularLink>
  )
}

CustomLink.propTypes = {
  url: PropTypes.string.isRequired,
  target: PropTypes.string,
}

export default CustomLink

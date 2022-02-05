import styled, { css } from "styled-components"
import { Link } from "gatsby"

const styledLink = css`
  text-decoration: none;
  cursor: pointer;
  color: inherit;
`

export const CustomRegularLink = styled.a`
  ${styledLink};
`

export const CustomLink = styled(Link)`
  ${styledLink};
`

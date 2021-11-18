import styled from "styled-components"

export const CustomTitle = styled.h2`
  color: ${({ theme, colorInherit }) =>
    colorInherit ? "inherit" : theme.palette.text.primary};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}rem` : "2rem")};
  margin-top: ${({ mt }) => (mt ? `${mt}em` : "")};
  margin-bottom: ${({ mb }) => (mb ? `${mb}em` : "")};
  padding-top: ${({ pt }) => (pt ? `${pt}em` : "")};
  padding-bottom: ${({ pt }) => (pt ? `${pt}em` : "")};
  max-width: ${({ mw }) => (mw ? `${mw}px` : "")};
`

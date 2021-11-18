import styled from "styled-components"
import { getColor } from "../../utils"
import Typography from "@mui/material/Typography"

export const Text = styled(Typography)`
  color: ${({ theme, colorInherit, color }) =>
    colorInherit ? "inherit" : getColor(color, theme)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}rem` : "1rem")};
  margin-top: ${({ mt }) => (mt ? `${mt}em` : "")};
  margin-bottom: ${({ mb }) => (mb ? `${mb}em` : "")};
  padding-top: ${({ pt }) => (pt ? `${pt}em` : "")};
  padding-bottom: ${({ pt }) => (pt ? `${pt}em` : "")};
  max-width: ${({ mw }) => (mw ? `${mw}px` : "")};
`

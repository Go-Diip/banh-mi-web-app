import styled from "styled-components"
import SectionWrapper from "../section-wrapper/section-wrapper.component"
import CustomImage from "../custom-image/custom-image.component"
import { Container, Grid } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;

  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiGrid-item {
      ${({ invert }) =>
        !invert ? "&:first-child{ order: 2 } &:last-child{ order:  1}" : ""}
    }
  }
`

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover !important;
  }
`

export const CustomContainer = styled(Container)`
  height: 100%;
`

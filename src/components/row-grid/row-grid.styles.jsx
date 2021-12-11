import styled from "styled-components"
import SectionWrapper from "../section-wrapper/section-wrapper.component"
import CustomImage from "../custom-image/custom-image.component"
import { Container, Grid } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
`

export const Image = styled(CustomImage)`
  width: 100%;
  max-height: 100vh;
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

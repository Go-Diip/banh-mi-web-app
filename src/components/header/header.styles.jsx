import styled from "styled-components"
import SectionWrapper from "../section-wrapper/section-wrapper.component"
import CustomImage from "../custom-image/custom-image.component"
import { Container, Grid } from "@mui/material"
import CustomButton from "../custom-button/custom-button.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
`

export const LeftImage = styled(CustomImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CustomGrid = styled(Grid)`
  height: 100vh;
`
export const RightGrid = styled(Grid)`
  background-color: black;
`

export const LeftWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3em 0;

  svg {
    fill: #ffffff;
    width: 75px;
    height: 75px;
  }
`

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 14px;
    color: #ffffff;
    margin-top: -10px;
  }
`
export const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`

export const Title = styled.h1`
  font-size: 90px;
`

export const Subtitle = styled.h2`
  font-size: 48px;
  margin-bottom: 2em;
`

export const CustomContainer = styled(Container)`
  height: 100%;
  overflow: auto;
`

export const Button = styled(CustomButton)`
  margin-bottom: 2em;
`

export const LocationText = styled.span`
  color: #ffffff;
  font-size: 32px;
`

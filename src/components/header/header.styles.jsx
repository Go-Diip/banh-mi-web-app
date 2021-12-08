import styled from "styled-components"
import SectionWrapper from "../section-wrapper/section-wrapper.component"
import CustomImage from "../custom-image/custom-image.component"
import { Container, Grid } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import PepperIcon from "../../assets/pepper.svg"
import PepperBg from "../../assets/pepperBg.svg"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
  min-height: 900px;
`

export const LeftImage = styled(CustomImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const RightGrid = styled(Grid)`
  background-color: black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3em 0;
  position: relative;

  svg {
    fill: #ffffff;
    width: 75px;
    height: 75px;
  }
`

export const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  svg {
    height: 178px;
  }
`

export const Subtitle = styled.span`
  font-weight: 100;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #ffffff;
  padding: 2em 0;
`

export const Icon = styled(MenuIcon)`
  position: absolute;
  color: white;
  z-index: 2;
  top: 30px;
  right: 30px;
  width: 32px;
  height: 32px;
`

export const Pepper = styled(PepperIcon)`
  width: 60px;
  height: 60px;
  object-fit: cover;
  position: absolute;
  top: 30px;
  left: 30px;
`

export const BigPepper = styled(PepperBg)`
  position: absolute;
  z-index: 2;
`

export const ImageBg = styled(CustomImage)`
  width: 100%;
  height: 100%;
`

export const GeneralGrid = styled(Grid)`
  min-height: 900px;
`

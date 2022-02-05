import styled from "styled-components"
import CustomImage from "../../components/custom-image/custom-image.component"
import Pepper from "../../assets/pepper.svg"
import { Container, Typography } from "@mui/material"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import { ParallaxBanner } from "react-scroll-parallax"

export const LeftImage = styled(CustomImage)`
  width: 100%;
  height: 100%;
`

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.quaternary};
  font-weight: bold;
  font-size: 32px;
  line-height: 27px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
`

export const Description = styled(Typography)`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 180%;
  text-align: center;
  max-width: 710px;
  margin: 0 auto;
  padding: 1em 0;
`

export const Chefs = styled(Typography)`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  padding-top: 2em;
`

export const ContentWrapper = styled.div`
  height: 100%;
  position: relative;
  color: ${({ theme }) => theme.palette.text.secondary};
`

export const PepperIcon = styled(Pepper)`
  width: 215px;
  height: 226px;
  opacity: 0.2;
  position: absolute;
  top: -460px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`

export const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const CustomContainer = styled(Container)`
  height: 100%;
`

export const BgImage = styled(CustomBgImage)`
  height: 100vh;
`

export const CustomParallax = styled(ParallaxBanner)`
  height: 100vh;
`

export const WhiteIcon = styled(Pepper)`
  width: 42px;
  height: 45px;
`

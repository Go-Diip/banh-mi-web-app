import styled from "styled-components"
import CustomImage from "../../components/custom-image/custom-image.component"
import Pepper from "../../assets/pepper.svg"
import { Container, Typography } from "@mui/material"

export const LeftImage = styled(CustomImage)`
  width: 100%;
  height: 100%;
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.22em;
`

export const Description = styled(Typography)`
  font-size: 14px;
  font-weight: 200;
  line-height: 18px;
  letter-spacing: 0;
  text-align: left;
  max-width: 514px;
  margin: 0 auto;
  padding: 1em 0;
`

export const Chefs = styled(Typography)`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
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

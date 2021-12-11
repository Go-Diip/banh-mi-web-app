import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid, Typography } from "@mui/material"
import PoweredByIcon from "../../assets/poweredby.svg"
import Pepper from "../../assets/pepperBg.svg"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomButton from "../../components/custom-button/custom-button.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.primary.dark};
`

export const TopWrapper = styled.div`
  height: 100%;
  position: relative;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  font-weight: 200;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #ffffff;
  padding: 1em 0;
`

export const PepperBg = styled(Pepper)`
  position: absolute;
  right: 0;
  left: 0;
  opacity: 0.05;
  width: 100%;
  height: 100%;
`

export const Logo = styled(CustomImage)`
  width: 58px;
  height: 178px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Button = styled(CustomButton)`
  margin-bottom: 1.5em;
`

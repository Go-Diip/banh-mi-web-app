import styled from "styled-components"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import PepperIcon from "../../assets/pepper.svg"
import WhiteLogo from "../../assets/logo4.svg"
import CustomButton from "../../components/custom-button/custom-button.component"
import { Container } from "@mui/material"
import { Parallax } from "react-parallax"
import LogoMenu from "../../assets/pepper-line.svg"

export const Wrapper = styled(CustomBgImage)`
  height: 100vh;
`

export const TopWrapper = styled.div`
  position: relative;
  height: 100%;
`

export const Icon = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100px;
  height: 100px;
`

export const Pepper = styled(PepperIcon)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 58px;
  height: 61px;
`

export const LogoVertical = styled(LogoMenu)`
  margin: auto;
`

export const Logo = styled(WhiteLogo)``

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 625px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding-top: 2em;
`

export const Button = styled(CustomButton)`
  margin: 0 0 1em;
  min-width: 275px;
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.tertiary};
  padding: 1.5em 0;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.01em;
  color: #f6faf4;

  &:hover {
    font-weight: 500;
  }
`

export const CustomContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BgImage = styled(CustomBgImage)`
  height: 100vh;
`

export const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

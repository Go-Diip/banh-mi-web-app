import styled, { keyframes } from "styled-components"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import WhiteLogo from "../../assets/logo4.svg"
import CustomButton from "../../components/custom-button/custom-button.component"
import { Container } from "@mui/material"
import LogoMenu from "../../assets/pepper-line.svg"

const expand = keyframes`
  0% {
    width: 0;
    height: 0;
  }

  100% {
    width: 5000px;
    height: 5000px;
  }
`

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    //border-top-left-radius: 100%;
    //border-top-right-radius: 100%;
  }

  to {
    transform: translateY(0);
  }
`

const showUp = keyframes`
  from {
    height: 100%;
  }

  to {
    height: 0;
  }
`

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Wrapper = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 2;
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

export const Pepper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  overflow: hidden;
  opacity: 0;
  animation: ${fadeIn} 0.6s linear 0.4s forwards;

  > div {
    position: absolute;
    height: 100%;
    width: 100%;
    background: black;
    animation: ${showUp} 0.5s linear 0.5s forwards;
    top: 0;
    left: 0;
  }

  svg {
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`

export const LogoVertical = styled(LogoMenu)`
  margin: auto;
  opacity: 0;
  animation: ${fadeIn} 0.7s linear 1.9s forwards;
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
  opacity: 0;
  will-change: opacity;
  &:first-child {
    animation: ${fadeIn} 0.7s linear 2.1s forwards;
  }

  &:last-child {
    animation: ${fadeIn} 0.7s linear 2.3s forwards;
  }
`

export const Title = styled.h1`
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

export const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BgImage = styled(CustomBgImage)`
  height: 100%;
  position: relative;
  z-index: 2;
  will-change: transform;
  transform: translateY(100%);
  animation: ${slideUp} 0.4s linear 1.5s forwards;
`

export const Circle = styled.div`
  background: black;
  position: absolute;
  top: 50%;
  left: 50%;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-radius: 100%;
  will-change: transform;
  transform: translate(-50%, -50%);
  animation: ${expand} 1.8s linear forwards;
`

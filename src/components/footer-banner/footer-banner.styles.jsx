import styled from "styled-components"
import Pepper from "../../assets/middlePepper.svg"
import { Typography } from "@mui/material"
import CustomButton from "../custom-button/custom-button.component"
import PepperIcon from "../../assets/pepper.svg"
import CustomBgImage from "../custom-bg-image/custom-bg-image.component"

export const Wrapper = styled.div`
  //background-color: #c2312c;
  position: relative;
`

export const MiddlePepper = styled(Pepper)`
  position: absolute;
  height: 100%;
  top: 0;
  right: 225px;
  opacity: 0.2;
`

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //height: 100%;
  height: 625px;
  max-width: 428px;
  margin-left: auto;
`

export const TextWrapper = styled.div`
  text-align: center;
`

export const BannerTitle = styled.span`
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  line-height: 36px;
  letter-spacing: 0.16em;
  text-align: center;
  text-transform: uppercase;
  color: #f6faf4;
`

export const BannerDescription = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  font-weight: 300;
  line-height: 120%;
  letter-spacing: 0;
  color: #f6faf4;
  padding: 2em 0;
`

export const Button = styled(CustomButton)`
  max-width: 200px;
`

export const BgWrapper = styled(CustomBgImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: black;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover !important;
  }
`

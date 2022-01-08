import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid, Typography } from "@mui/material"
import PoweredByIcon from "../../assets/poweredby.svg"
import Pepper from "../../assets/pepperBg.svg"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.primary.dark};
`

export const TopWrapper = styled.div`
  height: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
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
  margin: 1em 0 1.5em;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  line-height: 36px;
  letter-spacing: 0.16em;
  color: ${({ theme }) => theme.palette.text.secondary};
  text-transform: uppercase;
`

export const Desc = styled(Typography)`
  padding-top: 3em;
  color: rgba(246, 250, 244, 0.76);
  text-align: center;
  font-weight: 300;
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  line-height: 22px;
  opacity: 0.76;
`

export const Number = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.secondary};
`

export const RightGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PoweredIcon = styled(PoweredByIcon)`
  margin-top: 1em;
`

export const PepperBg = styled(Pepper)`
  position: absolute;
  right: 0;
  left: 0;
  opacity: 0.05;
  width: 100%;
  height: 100%;
`

export const BgImage = styled(CustomBgImage)`
  height: 100%;
`

export const PhoneWrapper = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  padding: 1.5em 0;
`

export const Phone = styled.a`
  text-decoration: none;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
  color: rgba(246, 250, 244, 1);
`

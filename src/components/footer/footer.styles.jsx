import styled from "styled-components"
import { Typography } from "@mui/material"
import PoweredIcon from "../../assets/poweredby.svg"
import Logo from "../../assets/logo.svg"
import CustomBgImage from "../custom-bg-image/custom-bg-image.component"

export const Wrapper = styled.footer`
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.tertiary.main};
  padding: 4em 0 2.5em;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    .MuiContainer-root {
      padding-right: 2.5em;
      padding-left: 2.5em;
    }
  }
`

export const FooterLogo = styled(Logo)`
  margin-bottom: 4em;
`
export const Text = styled(Typography)`
  font-style: normal;
  font-weight: 300;
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  line-height: 29px;
  letter-spacing: -0.01em;
  opacity: 0.76;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  strong {
    font-weight: 500;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  svg {
    fill: #f6faf4;
    width: 30px;
    height: 30px;
    margin-right: 1em;
  }
`

export const ExternalLink = styled.a`
  text-decoration: none;
`

export const Line = styled.div`
  margin: 2em 0 1em;
  height: 1px;
  background-color: rgba(246, 250, 244, 0.28);
`

export const PoweredWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const PoweredBy = styled(PoweredIcon)`
  width: 125px;
`
export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const WorkText = styled.span`
  transition: 0.3s all ease;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  color: #f6faf4;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export const VerticalLine = styled.div`
  width: 1px;
  height: 35px;
  background-color: rgba(246, 250, 244, 0.25);
  margin: 0 0 0 1em;
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
  font-size: 24px;
  line-height: 22px;
  color: rgba(246, 250, 244, 1);
`

export const PhoneContainer = styled.div`
  max-width: 300px;
  margin-left: auto;
  text-align: center;
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

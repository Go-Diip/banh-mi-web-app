import styled from "styled-components"
import { Typography } from "@mui/material"
import PoweredIcon from "../../assets/poweredby.svg"
import Logo from "../../assets/logoVertical.svg"
import CustomBgImage from "../custom-bg-image/custom-bg-image.component"

export const Wrapper = styled.footer`
  // color: ${({ theme }) => theme.palette.text.secondary};
  // background-color: ${({ theme }) => theme.palette.tertiary.main};
  // padding: 4em 0 2.5em;
  //
  // ${({ theme }) => theme.breakpoints.down("sm")} {
  //   .MuiContainer-root {
  //     padding-right: 2.5em;
  //     padding-left: 2.5em;
  //   }
  // }
`

export const BgImage = styled(CustomBgImage)`
  height: 100%;
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
  width: 28px;
  height: 90px;
  object-fit: cover;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-bottom: 0;
  }
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
  gap: 1em;
  svg {
    fill: #f6faf4;
    width: 30px;
    height: 30px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 1em 0;
  }
`

export const ExternalLink = styled.a`
  text-decoration: none;
`

export const Line = styled.div`
  margin: 2em 0 1em;
  height: 1px;
  background-color: rgba(246, 250, 244, 0.28);
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
`

export const PoweredWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
    align-items: center;
  }
`
export const PoweredBy = styled(PoweredIcon)`
  width: 125px;
`
export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
  }
`

export const WorkText = styled.span`
  transition: 0.3s all ease;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  color: #f6faf4;
  cursor: pointer;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #f6faf4;
    // color: ${({ theme }) => theme.palette.primary.dark};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 1em 0 2em;
  }
`

export const VerticalLine = styled.div`
  width: 1px;
  height: 35px;
  background-color: rgba(246, 250, 244, 0.25);
  margin: 0 0 0 1em;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
`
export const PhoneWrapper = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  padding: 1.5em 0;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    justify-content: center;
  }
`

export const Phone = styled.a`
  text-decoration: none;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
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
  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: row;
    align-items: center;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-top: 1em 0;
  }
`

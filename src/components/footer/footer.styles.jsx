import styled from "styled-components"
import { Typography } from "@mui/material"
import PoweredIcon from "../../assets/poweredby.svg"

export const Wrapper = styled.footer`
  color: ${({ theme }) => theme.palette.text.secondary};
  padding: 4em 0 2em;
  background-color: ${({ theme }) => theme.palette.primary.dark};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    .MuiContainer-root {
      padding-right: 2.5em;
      padding-left: 2.5em;
    }
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
  padding: 1em 0 2em;
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
  justify-content: flex-end;
`
export const PoweredBy = styled(PoweredIcon)`
  width: 107px;
`

export const PhoneDescription = styled.span`
  color: rgba(246, 250, 244, 0.4);
`

export const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5em 0;
`

export const Phone = styled.a`
  text-decoration: none;
  font-size: 2rem;
  color: rgba(246, 250, 244, 1);
`

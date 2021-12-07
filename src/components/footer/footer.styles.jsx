import styled from "styled-components"
import { Typography } from "@mui/material"

export const Wrapper = styled.footer`
  color: ${({ theme }) => theme.palette.text.secondary};
  padding: 4em 0 0;
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
`

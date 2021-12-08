import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid, Typography } from "@mui/material"
import PoweredByIcon from "../../assets/poweredby.svg"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
  min-height: 900px;
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.primary.dark};
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 248px;
`

export const Title = styled.h2`
  margin-top: 1em;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  line-height: 27px;
  letter-spacing: 0.22em;
`

export const Desc = styled(Typography)`
  padding: 2em 0;
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
  margin-top: 0.5em;
`

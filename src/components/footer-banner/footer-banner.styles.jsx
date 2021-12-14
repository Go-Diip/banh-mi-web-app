import styled from "styled-components"
import Pepper from "../../assets/middlePepper.svg"
import { Typography } from "@mui/material"

export const Wrapper = styled.div`
  background-color: #c2312c;
  position: relative;
`

export const MiddlePepper = styled(Pepper)`
  position: absolute;
  height: 100%;
  top: 0;
  right: 100px;
  opacity: 0.3;
`

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 4em 0;
`

export const TextWrapper = styled.div`
  max-width: 472px;
`

export const BannerTitle = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  line-height: 27px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #f6faf4;
`

export const BannerDescription = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  font-weight: 200;
  line-height: 18px;
  letter-spacing: 0;
  color: #f6faf4;
  max-width: 200px;
`

import styled from "styled-components"
import { Dialog, IconButton, Typography } from "@mui/material"
import CustomImage from "../custom-image/custom-image.component"

export const Wrapper = styled(Dialog)`
  .MuiPaper-root {
    max-width: 700px;
    background-color: white;
    overflow: unset;
    padding: 1em 0;
    overflow-y: scroll;
  }
`

export const CloseIcon = styled(IconButton)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding: 0;
  svg {
    fill: ${({ theme }) => theme.palette.primary.main};
    width: 100%;
    height: 100%;
  }
`

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  color: #111212;
  padding-top: 0.5em;
`

export const Description = styled(Typography)`
  font-family: Montserrat, sans-serif;
  padding: 0 0 1em;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 200%;
  color: #091211;
`

export const TextWrapper = styled.div`
  padding: 1em 0;
`

export const RightWrapper = styled.div`
  max-width: 90%;
  margin-left: auto;
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 2em 0 0;
    max-width: 100%;
  }
`

export const Image = styled(CustomImage)`
  height: 80%;
  margin: auto;
  img {
    width: 100%;
    height: 100%;
  }
  padding-bottom: 1em;
`

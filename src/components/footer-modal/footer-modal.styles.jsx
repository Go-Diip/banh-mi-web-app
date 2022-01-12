import styled from "styled-components"
import { Select, TextField, Typography } from "@mui/material"
import CustomImage from "../custom-image/custom-image.component"

export const Wrapper = styled.div`
  max-width: 700px;
  max-height: 680px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f6faf4;
  padding: 2em 0;

  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 90%;
    height: 85%;
    overflow: scroll;
  }
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

export const CustomTextField = styled(TextField)`
  background-color: #edecea;
  margin-bottom: 1em;
`

export const CustomSelect = styled(Select)`
  background-color: #edecea;
  margin-bottom: 1em;
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

export const RightWrapper = styled.div`
  max-width: 90%;
  margin-left: auto;
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 2em 0 0;
    max-width: 100%;
  }
`

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.palette.primary.main};
  }
`

export const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  color: #111212;
  padding-top: 0.5em;
`

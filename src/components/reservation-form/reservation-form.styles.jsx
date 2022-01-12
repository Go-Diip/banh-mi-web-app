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
  padding: 1em 0;
`

export const Description = styled(Typography)`
  font-family: Montserrat, sans-serif;
  padding: 1em 0;
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
`

export const RightWrapper = styled.div`
  max-width: 90%;
  margin-left: auto;
`

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.palette.primary.main};
  }
`

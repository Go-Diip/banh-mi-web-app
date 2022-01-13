import styled from "styled-components"
import { Box, CircularProgress, Select, TextField, Typography } from "@mui/material"
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
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 90%;
    height: 85%;
    overflow: scroll;
  }
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
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 2em 0 0;
    max-width: 100%;
  }
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


export const FormSpinner = styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  //background-color: rgba(0,0,0,0.1);
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`

export const CustomSpinner = styled(CircularProgress)`
  color: ${({ theme }) =>
  theme.palette ? theme.palette.secondary.main : `black`};
  width: 60px !important;
  height: 60px !important;
`

export const SuccessMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.5rem;
    text-align: center;
  }
`

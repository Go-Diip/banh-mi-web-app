import styled from "styled-components"
import {
  Box,
  CircularProgress,
  Select,
  TextField,
  Typography,
} from "@mui/material"
import CustomImage from "../custom-image/custom-image.component"

export const CustomTextField = styled(TextField)`
  background-color: #edecea;
  margin-bottom: 1em;
`

export const CustomSelect = styled(Select)`
  background-color: #edecea;
  margin-bottom: 1em;
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

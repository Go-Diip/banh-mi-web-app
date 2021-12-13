import styled from "styled-components"
import { CircularProgress } from "@mui/material"
import Box from "@mui/system/Box"

export const Wrapper = styled.div`
  &.MuiInputBase-root:before {
    border-bottom: 1px solid white;
  }
`

export const FormTitle = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #f6faf4;
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
    theme.palette ? theme.palette.primary.main : `black`};
  width: 60px !important;
  height: 60px !important;
`

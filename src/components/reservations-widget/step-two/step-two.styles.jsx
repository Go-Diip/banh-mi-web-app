import styled from "styled-components"
import { FormControlLabel } from "@mui/material"

export const Wrapper = styled.div`
  min-height: calc(100vh - 300px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .MuiFormControl-root {
    width: 100%;
  }

  .MuiFormControlLabel-root {
    margin: 0;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`

export const CustomRadioButton = styled(FormControlLabel)`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  width: 100%;
  min-height: 68px;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 1.5em;
  }

  .MuiRadio-root:not(.Mui-checked) {
    span {
      color: ${({ theme }) => theme.palette.primary.dark};
    }
  }
`

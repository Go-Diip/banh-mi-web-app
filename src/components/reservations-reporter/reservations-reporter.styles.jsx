import styled from "styled-components"
import { IconButton } from "@mui/material"

export const Wrapper = styled.div`
  .pending {
    background-color: yellow;
  }
  .approved {
    background-color: lightgreen;
  }
  .canceled {
    background-color: lightcoral;
  }

  .MuiTableCell-root {
    cursor: pointer;
  }
`

export const DialogWrapper = styled.div`
  padding: 2em;
  position: relative;

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

  .MuiFormControl-root {
    margin: 0;
  }

  .MuiInputLabel-root {
    color: ${({ theme }) => theme.palette.inputs.main};
  }
`

export const CloseIconButton = styled(IconButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${({ theme }) => theme.palette.inputs.main};
`

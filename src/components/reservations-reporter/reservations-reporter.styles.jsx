import styled, { css } from "styled-components"
import { IconButton } from "@mui/material"

const statusStyle = css`
  > div {
    border-radius: 50px;
    padding: 0.5em 1em;
    text-align: center;
  }
`

export const Wrapper = styled.div`
  .pending {
    ${statusStyle};
    > div {
      background-color: yellow;
    }
  }
  .approved {
    ${statusStyle};
    > div {
      background-color: lightgreen;
    }
  }
  .canceled {
    ${statusStyle};
    > div {
      background-color: lightcoral;
    }
  }

  .MuiTableCell-root {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
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

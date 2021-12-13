import styled from "styled-components"
import { TextField } from "@mui/material"

export const Wrapper = styled(TextField)`
  color: ${({ theme }) => theme.palette.text.main};

  label {
    color: rgba(0, 0, 0, 0.23);
  }
`

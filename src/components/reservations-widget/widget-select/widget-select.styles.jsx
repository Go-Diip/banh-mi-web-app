import styled from "styled-components"
import { FormControl } from "@mui/material"

export const Wrapper = styled(FormControl)`
  .MuiInputLabel-root {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`

import styled from "styled-components"
import { Typography } from "@mui/material"
import WidgetTextField from "../widget-text-field/widget-text-field.component"

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  border-bottom: 1px solid rgba(9, 18, 17, 0.25);
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  padding-bottom: 0.25em;
  margin-bottom: 1em;
`

export const ReviewBox = styled.div`
  &:not(:last-child) {
    margin-bottom: 1.5em;
  }
  label {
    color: ${({ theme }) => theme.palette.text.light};
    font-weight: 300;
    font-size: ${({ theme }) => theme.typography.pxToRem(12)};
  }

  p {
    font-weight: normal;
    font-size: 1rem;
  }
`

export const NotesField = styled.div`
  padding-top: 1em;
  margin-top: 2em;
  border-top: 1px solid rgba(9, 18, 17, 0.25);
`

export const ImportantInfo = styled.div`
  background-color: white;
  padding: 1.5em;
  flex: 1;
  border: 1px solid rgba(9, 18, 17, 0.16);
  border-radius: 4px;
  margin-bottom: 1.5em;
  p {
    margin-top: 0;
  }
`

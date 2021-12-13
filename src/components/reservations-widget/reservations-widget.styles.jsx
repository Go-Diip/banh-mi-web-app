import styled from "styled-components"
import CustomBgImage from "../custom-bg-image/custom-bg-image.component"
import { Tabs } from "@mui/material"
import Typography from "@mui/material/Typography"

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f7f7f7;

  ${({ theme }) => theme.breakpoints.up("md")} {
    min-height: 600px;
    height: 100vh;
  }

  .MuiInputBase-root {
    min-height: 68px;
  }

  .continueBtn {
    min-height: 68px;
    text-transform: unset;
    font-size: ${({ theme }) => theme.typography.pxToRem(18)};
    color: white;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.palette.primary.main};
    display: flex;
    align-items: center;
    svg {
      margin-left: 0.25em;
    }
  }

  //.MuiInputBase-input {
  //}
`

export const ImageWrapper = styled(CustomBgImage)`
  ${({ theme }) => theme.breakpoints.up("lg")} {
    width: 500px;
  }
`

export const MainWrapper = styled.div`
  flex: 1;
  padding: 2em;
  height: 100%;
  color: ${({ theme }) => theme.palette.text.primary};
  ${({ theme }) => theme.breakpoints.up("lg")} {
    padding: 4em;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const StepperTabs = styled(Tabs)`
  margin-bottom: 2.5em;
  .MuiTab-root {
    color: ${({ theme }) => theme.palette.text.primary};
    opacity: 0.5;
    text-transform: unset;
    &:not(.Mui-selected) {
      border-bottom: 1px solid rgba(9, 18, 17, 0.25);
    }
    &.Mui-selected {
      opacity: 1;
      color: ${({ theme }) => theme.palette.text.primary} !important;
    }
  }
`

export const Subtitle = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  font-weight: 500;
  margin-bottom: 1em;
`

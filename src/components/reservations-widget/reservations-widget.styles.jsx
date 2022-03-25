import styled from "styled-components"
import CustomBgImage from "../custom-bg-image/custom-bg-image.component"
import { Dialog, Tabs } from "@mui/material"
import Typography from "@mui/material/Typography"
import CustomButton from "../custom-button/custom-button.component"
import BgLogo from "../../images/logo-bg.svg"

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f7f7f7;
  margin-top: -${({ theme }) => theme.navHeight}px;
  position: relative;
  &:after {
    content: "";
    opacity: 0.03;
    background: url(${BgLogo}) no-repeat center center;
    background-size: cover;
    width: 500px;
    height: 500px;
    bottom: 0;
    right: 0;
    position: absolute;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    min-height: 600px;
    height: 100vh;
    overflow: hidden;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    min-height: 100vh;
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
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.palette.text.primary};
  overflow-y: auto;
  ${({ theme }) => theme.breakpoints.up("lg")} {
    padding: 4em;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const StepperTabs = styled(Tabs)`
  margin-bottom: 1.5rem;
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
  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 2.5rem;
  }
`

export const Subtitle = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  font-weight: 500;
  margin-bottom: 0.5rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 1rem;
  } ;
`

export const Disclaimer = styled.div`
  margin-top: 3em;
  padding-top: 1.5em;
  border-top: 1px solid rgba(17, 18, 18, 0.2);
  p {
    font-size: ${({ theme }) => theme.typography.pxToRem(14)};
    color: black;
    opacity: 0.75;
    margin-bottom: 0.75em;
  }
`

export const CustomModal = styled(Dialog)`
  .MuiPaper-root {
    border: 5px solid ${({ theme }) => theme.palette.tertiary.main};
    padding: 1.5em;
    max-width: 700px;
    ${({ theme }) => theme.breakpoints.up("md")} {
      padding: 3em;
    }
  }

  color: #111212;

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiGrid-item:last-child {
      position: relative;
      &:before {
        content: "";
        position: absolute;
        left: 18px;
        bottom: 0;
        width: 1px;
        height: calc(100% - 2.7em);
        background-color: rgba(0, 0, 0, 0.23);
      }
    }
  } ;
`

export const ModalName = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  font-weight: 500;
  margin-bottom: 0.5em;
`
export const ModalDescription = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  opacity: 0.78;
`

export const ModalLabel = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
`

export const ModalText = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`

export const ModalButton = styled(CustomButton)`
  margin-top: 2em;
  width: 100%;
  max-width: 325px;
  text-transform: unset;
  display: block;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: normal;
  background-color: ${({ theme }) => theme.palette.tertiary.main};
`

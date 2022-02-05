import styled from "styled-components"
import Button from "@mui/material/Button"
import { darken } from "@mui/system"

export const CustomButton = styled(Button)`
  color: white;
  background-color: ${({ theme, color }) =>
    theme.palette[color]
      ? theme.palette[color].main
      : theme.palette.primary.main};
  padding: 0.5em 1.5em;
  border: 2px solid transparent;
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  line-height: 27px;
  letter-spacing: 0.22em;
  font-weight: 500 !important;
  border-radius: 5px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0.5em 1.5em;
  }
  &.light {
    background-color: white;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  &.transparentMenuButton {
    background-color: transparent;
    border: 1px solid transparent;
    color: black;
    border-radius: 50%;
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: white;
    }
  }

  &.lightRed {
    color: white;
    border: 1px white solid;
    background-color: transparent;

    &:hover {
      background-color: white;
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  &.lightBorder {
    color: white;
    border: 1px ${({ theme }) => theme.palette.primary.light} solid;
    background-color: transparent;
  }

  &.darkBorder {
    color: black;
    border: 1px solid black;
    background-color: transparent;
    &:hover {
      border: 1px ${({ theme }) => theme.palette.primary.main} solid;
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: white;
    }
  }

  &.lightBorderBlack {
    color: white;
    border: 1px ${({ theme }) => theme.palette.primary.light} solid;
    background-color: transparent;
    &:hover {
      border: 1px black solid;
      background-color: black;
      color: white;
    }
  }

  &.lightBorderWhite {
    color: white;
    border: 1px ${({ theme }) => theme.palette.primary.light} solid;
    background-color: transparent;
    &:hover {
      border: 1px white solid;
      background-color: rgba(255, 255, 255, 0.09);
      color: white;
    }
  }

  &.moreWidth {
    min-width: 250px;
  }

  &:not(.light):not(.darkBorder):not(.transparentMenuButton):not(.lightRed):not(.lightBorderBlack):not(.lightBorderWhite):hover {
    background-color: ${({ theme, color }) =>
      darken(
        theme.palette[color]
          ? theme.palette[color].main
          : theme.palette.primary.main,
        0.1
      )};
    // border: 1px solid ${({ theme }) =>
      darken(theme.palette.primary.main, 0.1)};
  }

  &.Mui-disabled {
    color: rgba(0, 0, 0, 0.26);
    background: lightgray;
    border-color: lightgray;
    cursor: not-allowed;
  }
`

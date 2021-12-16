import styled from "styled-components"
import PepperMenu from "../../assets/menuPepper.svg"
import LArrow from "../../assets/leftArrow.svg"
import RArrow from "../../assets/rightArrow.svg"
import CancelIcon from "@mui/icons-material/Cancel"

export const Wrapper = styled.div`
  background-color: #f6faf4;
  padding: 5em 0;
`

export const MenuWrapper = styled.div`
  height: 100%;
`

export const MenuCategory = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  text-transform: uppercase;
  color: #091211;
  margin: 0 1em;
  text-align: center;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4em 0;
`

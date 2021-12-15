import styled from "styled-components"
import PepperIcon from "../../../assets/pepperBlack.svg"
import { Link } from "react-scroll"

export const MenuWrapper = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
  background-color: white;
`
export const Wrapper = styled.div`
  position: relative;
  height: 100%;
`
export const Pepper = styled(PepperIcon)`
  position: absolute;
  top: 30px;
  left: 48px;
`

export const ItemsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SLink = styled(Link)`
  margin: 1em 0;
`

export const MenuItem = styled.span`
  transition: 0.3s all ease;
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #091211;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

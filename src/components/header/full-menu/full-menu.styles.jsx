import styled from "styled-components"
import PepperIcon from "../../../assets/pepperBlack.svg"
import { Link } from "react-scroll"
import CustomLink from "../../custom-link/custom-link.component"

export const MenuWrapper = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
  background-color: transparent;
  transition: all 0.6s ease;
  right: ${({ isactive }) => (isactive ? `0` : "-100%")}; ;
`
export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100vw;
  margin-left: auto;
  background-color: #f6faf4;
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

export const CSLink = styled(CustomLink)`
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
  border-bottom: 2px solid transparent;
  cursor: pointer;
  &:hover {
    color: #111212;
    font-weight: 500;
    border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
  }
`

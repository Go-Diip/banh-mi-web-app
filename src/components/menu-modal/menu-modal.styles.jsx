import styled from "styled-components"
import PepperMenu from "../../assets/menuPepper.svg"
import LArrow from "../../assets/leftArrow.svg"
import RArrow from "../../assets/rightArrow.svg"
import CancelIcon from "@mui/icons-material/Cancel"

export const Wrapper = styled.div`
  width: 95vw;
  height: 90vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f6faf4;
`

export const MenuWrapper = styled.div`
  height: 100%;
  position: relative;
`

export const Pepper = styled(PepperMenu)`
  position: absolute;
  bottom: 0;
  left: 70%;
  transform: translateX(-70%);
`

export const MenuCategory = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  text-transform: uppercase;
  color: #091211;
  border-radius: 50%;
  margin: 0 1em;
  text-align: center;
  cursor: pointer;
  &.active {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4em 0;
`

export const LeftArrow = styled(LArrow)`
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
`

export const RightArrow = styled(RArrow)`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
`

export const Close = styled(CancelIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  border: ${({ theme }) => theme.palette.primary.main};
  cursor: pointer;
`

import styled from "styled-components"
import CustomButton from "../custom-button/custom-button.component"

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

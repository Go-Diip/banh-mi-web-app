import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import PepperMenu from "../../assets/menuPepper.svg"
import CustomImage from "../../components/custom-image/custom-image.component"
import CustomButton from "../../components/custom-button/custom-button.component"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
  background-color: #f6faf4;
  min-height: 700px;
`

export const RightWrapper = styled.div`
  height: 100%;
  position: relative;
`

export const Pepper = styled(PepperMenu)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`

export const NavWrapper = styled.div`
  padding: 2em 0;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 3px;
  }
  &::-webkit-scrollbar-track {
    height: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: red;
  }
`

export const NavButton = styled(CustomButton)`
  border-radius: 50%;
  width: 86px;
  height: 86px;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 0.09em;
  color: #f6faf4;
  margin-right: 2em;
`

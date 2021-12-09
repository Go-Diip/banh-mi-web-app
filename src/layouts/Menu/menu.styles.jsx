import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import PepperMenu from "../../assets/menuPepper.svg"

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

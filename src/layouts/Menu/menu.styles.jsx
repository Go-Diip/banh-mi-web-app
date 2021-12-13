import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import PepperMenu from "../../assets/menuPepper.svg"
import PepperIcon from "../../assets/pepperBlack.svg"

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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const BlackPepper = styled(PepperIcon)`
  width: 38px;
  height: 38px;
`

export const Title = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #091211;
  padding: 2em 0;
`

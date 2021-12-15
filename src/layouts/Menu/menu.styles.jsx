import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import PepperMenu from "../../assets/redPepper.svg"
import PepperIcon from "../../assets/pepperBlack.svg"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

export const RightWrapper = styled.div`
  height: 100%;
  position: relative;
`

export const Pepper = styled(PepperMenu)`
  position: absolute;
  bottom: -75px;
  left: -125px;
  width: 100%;
  height: 100%;
  opacity: 0.1;
`

export const TopWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
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
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 27px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #091211;
  padding: 2em 0;
`

export const BgImage = styled(CustomBgImage)`
  height: 100%;
`

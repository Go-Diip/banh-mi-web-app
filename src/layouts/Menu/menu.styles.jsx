import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import PepperMenu from "../../assets/redPepper.svg"
import PepperIcon from "../../assets/pepperBlack.svg"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import CustomButton from "../../components/custom-button/custom-button.component"

export const RightWrapper = styled.div`
  height: 100%;
  position: relative;
  background-color: #f6faf4;
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 5em 0;
  }
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
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  line-height: 36px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #091211;
  //padding: 2em 0 0;
`

export const BgImage = styled(CustomBgImage)`
  height: 100%;
`

export const MenuDescription = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #091211;
  padding: 2em 0;
  text-align: center;
`

export const ButtonsWrapper = styled.div`
  max-width: 200px;
  width: 100%;
`

export const Button = styled(CustomButton)`
  letter-spacing: 0.02em;
  font-size: 1rem;
  text-transform: uppercase;
  width: 100%;
  margin-bottom: 0.875rem;
`

export const FadeWrapper = styled.div`
  max-width: 332px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

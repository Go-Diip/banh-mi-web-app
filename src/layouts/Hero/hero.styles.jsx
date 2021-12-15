import styled from "styled-components"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"
import PepperIcon from "../../assets/pepper2.svg"
import WhiteLogo from "../../assets/logo4.svg"
import CustomButton from "../../components/custom-button/custom-button.component"

export const Wrapper = styled(CustomBgImage)`
  height: 100vh;
`

export const TopWrapper = styled.div`
  position: relative;
  height: 100%;
`

export const Icon = styled(PepperIcon)`
  position: absolute;
  top: 20px;
  left: 20px;
`

export const Logo = styled(WhiteLogo)`
  position: absolute;
  top: 200px;
  right: 30px;
`

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 30px;
  top: 350px;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Button = styled(CustomButton)`
  margin: 0 0 1em;
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 3em;
  color: #ffffff;
`

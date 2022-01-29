import styled, { css } from "styled-components"
import CustomImage from "../custom-image/custom-image.component"
import Logo from "../../assets/logo.svg"
import Slider from "react-slick"
import LeftArrow from "../../assets/leftArrow.svg"
import RightArrow from "../../assets/rightArrow.svg"

const imageHeightRule = css`
  height: 380px;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    height: 500px;
  }
  ${({ theme }) => theme.breakpoints.up("lg")} {
    height: 800px;
  }
`

export const Wrapper = styled.div`
  position: relative;
  ${imageHeightRule};

  .slick-dots {
    bottom: 285px;
    ${({ theme }) => theme.breakpoints.down("sm")} {
      bottom: 100px;
    }
  }

  .slick-dots li.slick-active button::before {
    color: white;
    opacity: 1;
  }

  .slick-dots li button:before {
    color: dimgray;
    font-size: 10px;
  }
`

export const SlideImage = styled(CustomImage)`
  width: 100%;
  ${imageHeightRule};

  .gatsby-image-wrapper {
    ${imageHeightRule};
  }
  img {
    width: 100%;
    ${imageHeightRule};
    object-fit: cover !important;
  }
`

export const Icon = styled(Logo)`
  position: absolute;
  z-index: 2;
  top: 30px;
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const CustomSlider = styled(Slider)`
  //.slick-list {
  //  height: 100% !important;
  //}
  //.slick-track {
  //  height: 100%;
  //}

  //.slick-slide {
  //  height: 100%;
  //  object-fit: cover;
  //  > div {
  //    height: 100%;
  //  }
  //}
`

export const LArrow = styled(LeftArrow)`
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
`

export const RArrow = styled(RightArrow)`
  position: absolute;
  cursor: pointer;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
`

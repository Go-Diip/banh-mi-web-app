import styled from "styled-components"
import CustomImage from "../custom-image/custom-image.component"

export const Wrapper = styled.div`
  .slick-dots {
    bottom: 10px;
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
  height: 100%;
  object-fit: cover;
`

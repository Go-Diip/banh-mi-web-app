import React from "react"
import * as S from "./common-slider.styles"
import Slider from "react-slick"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import "../../../node_modules/slick-carousel/slick/slick.css"
import CustomImage from "../custom-image/custom-image.component"
const CommonSlider = ({ images }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  return (
    <S.Wrapper>
      <Slider {...sliderSettings}>
        {images.map(({ image }, index) => (
          <S.SlideImage key={`image-slide-${index}`} img={image} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default CommonSlider

import React from "react"
import * as S from "./common-slider.styles"
import Slider from "react-slick"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import "../../../node_modules/slick-carousel/slick/slick.css"
import { Container } from "@mui/material"

const CommonSlider = ({ images, haveIcon }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 5000,
  }
  return (
    <S.Wrapper>
      {haveIcon && (
        <Container maxWidth="xl">
          <S.Icon />
        </Container>
      )}
      <Slider {...sliderSettings}>
        {images.map(({ image }, index) => (
          <S.ImageWrapper key={`image-slide-${index}`}>
            <S.SlideImage img={image} />
          </S.ImageWrapper>
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default CommonSlider

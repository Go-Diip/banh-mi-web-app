import React, { useRef } from "react"
import * as S from "./common-slider.styles"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import "../../../node_modules/slick-carousel/slick/slick.css"
import { Container } from "@mui/material"

const CommonSlider = ({ images, haveIcon, classSlider }) => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  }
  let slider = useRef(null)
  const next = () => {
    slider.slickNext()
  }

  const previous = () => {
    slider.slickPrev()
  }
  return (
    <S.Wrapper className={classSlider}>
      {haveIcon && (
        <Container maxWidth="xl">
          <S.Icon />
        </Container>
      )}
      <S.CustomSlider ref={c => (slider = c)} {...sliderSettings}>
        {images.map(({ image }, index) => (
          <S.SlideImage key={`image-slide-${index}`} img={image} />
        ))}
      </S.CustomSlider>
      {images?.length > 1 && (
        <>
          <S.LArrow onClick={previous} />
          <S.RArrow onClick={next} />
        </>
      )}
    </S.Wrapper>
  )
}

export default CommonSlider

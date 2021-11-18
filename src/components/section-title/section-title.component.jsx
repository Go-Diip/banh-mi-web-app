import React from "react"
import * as S from "./section-title.styles.jsx"
import PropTypes from "prop-types"

const SectionTitle = ({
  children,
  style,
  mb,
  mt,
  pb,
  pt,
  mw,
  className,
  fontSize,
  colorInherit,
}) => (
  <S.CustomTitle
    className={className}
    style={style}
    mb={mb}
    mt={mt}
    mw={mw}
    pt={pt}
    pb={pb}
    fontSize={fontSize}
    colorInherit={colorInherit}
  >
    {children}
  </S.CustomTitle>
)

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  mb: PropTypes.number,
  mt: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  mw: PropTypes.number,
  fontSize: PropTypes.number,
  colorInherit: PropTypes.bool,
}

export default SectionTitle

import React from "react"
import * as S from "./custom-typography.styles.jsx"
import PropTypes from "prop-types"

const CustomTypography = ({
  children,
  component,
  className,
  style,
  mb,
  mt,
  pb,
  pt,
  mw,
  fontSize,
  colorInherit,
  color,
}) => (
  <S.Text
    component={component}
    className={className}
    style={style}
    mw={mw}
    mb={mb}
    mt={mt}
    pt={pt}
    pb={pb}
    color={color}
    fontSize={fontSize}
    colorInherit={colorInherit}
  >
    {children}
  </S.Text>
)

CustomTypography.propTypes = {
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

export default CustomTypography

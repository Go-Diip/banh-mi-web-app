import styled from "styled-components"
import Box from "@mui/system/Box"

export const Wrapper = styled(Box)`
  position: relative;
  overflow: hidden;
  z-index: 1;

  > .gatsby-image-wrapper {
    width: 100% !important;
    height: 100% !important;
    z-index: -1;
    position: absolute !important;
    top: 50%;
    transform: translateY(-50%);
  }
`

import styled from "styled-components"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import CustomLink from "../../components/custom-link/custom-link.component"

export const Wrapper = styled.div`
  background-color: #f6faf4;
  padding: 0 0 5em;
`

export const TitleWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
  padding: 7em 0 5em;
  h1 {
    font-family: ${({ theme }) => theme.fonts.tertiary};
    font-weight: 600;
    font-size: 32px;
    line-height: 27px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: white;
  }
`

export const MenuWrapper = styled.div`
  height: 100%;
`

export const MenuCategory = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  text-transform: uppercase;
  color: #091211;
  margin: 0 1em;
  text-align: center;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4em 0 0;
`

export const OptionsWrapper = styled.div`
  max-width: 550px;
  margin: auto;
  padding: 4em 0 0;
`
export const Line = styled.div`
  height: 1px;
  background-color: black;
  width: 100%;
  margin: 0.5em 0;
`

export const Description = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #091211;
`

export const DescWrapper = styled.div`
  text-align: center;
`

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

export const BarWrapper = styled.div`
  padding: 1em 0;
  background-color: black;
`

export const Link = styled(CustomLink)``

export const ArrowIcon = styled(ArrowBackIcon)`
  transition: 0.3s all ease;
  color: #f6faf4;
`

export const HomeText = styled.span`
  transition: 0.3s all ease;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  color: #f6faf4;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;
  transition: 0.3s all ease;

  &:hover {
    svg {
      transform: translate(-5px);
      fill: ${({ theme }) => theme.palette.primary.main};
    }
    span {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`

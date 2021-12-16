import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: #f6faf4;
  padding: 0 0 5em;
`

export const TitleWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
  padding: 7em 0 5em;
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
  padding: 1em 0 2em;
`

export const OptionsWrapper = styled.div`
  max-width: 550px;
  margin: auto;
  padding: 1.5em 0;
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

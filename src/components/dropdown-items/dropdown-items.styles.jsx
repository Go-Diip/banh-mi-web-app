import styled from "styled-components"

export const ProductTitle = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #091211;
  text-transform: uppercase;
`

export const ProductDescription = styled.span`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: rgba(9, 18, 17, 0.75);
`

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0 0;
`

export const CategoryWrapper = styled.div`
  max-width: 600px;
`

export const CategoryTitle = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  padding-right: 16px;
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2em;
`

export const MenuWrapper = styled.div`
  max-width: 500px;
  margin: auto;
  padding-top: 2em;
`

export const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em 0;
  svg {
    width: 20px;
    height: 20px;
  }
`

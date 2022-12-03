import styled from "styled-components"

export const TopWrapper = styled.div`
  height: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.palette.tertiary.main};
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 5em 0;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  margin-bottom: 2.25rem;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  line-height: 36px;
  letter-spacing: 0.16em;
  color: ${({ theme }) => theme.palette.text.secondary};
  text-transform: uppercase;
`

export const MenuWrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  line-height: 22px;
  margin-bottom: 2.25rem;

  ul {
    padding: 0;
    margin: 0;
    justify-content: center;
    text-align: center;
    list-style-type: none;
    font-weight: 400;

    li {
      margin-bottom: 0.5rem;
    }
  }
`

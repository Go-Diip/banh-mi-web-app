import styled from "styled-components"
import Logo from "../../../assets/logoVertical-dark.svg"
export const Wrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5em;
  margin-bottom: 1rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-bottom: 2rem;
  }
`

export const CustomLogo = styled(Logo)`
  height: 40px;
  width: auto;
  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 80px;
  } ;
`

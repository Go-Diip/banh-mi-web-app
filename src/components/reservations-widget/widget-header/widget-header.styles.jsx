import styled from "styled-components"

export const Wrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5em;
  margin-bottom: 3em;
`

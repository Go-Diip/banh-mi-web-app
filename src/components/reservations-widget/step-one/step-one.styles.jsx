import styled from "styled-components"

export const Wrapper = styled.div`
  .MuiInputLabel-root {
    color: ${({ theme }) => theme.palette.text.primary};
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    .MuiGrid-item {
      &:first-child {
        .MuiInputBase-root {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
      }

      &:nth-child(2) {
      }
    }

    .continueBtn {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  } ;
`

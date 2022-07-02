import styled from "styled-components"

export const Wrapper = styled.div`
  .MuiInputLabel-root {
    color: ${({ theme }) => theme.palette.text.primary};
  }

  .MuiInputBase-root {
    border-radius: 0;
  }

  .date,
  .time {
    .MuiInputBase-root,
    input {
      cursor: pointer;
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiFormControl-root {
      margin-bottom: 1.5em;
    }
  }

  //.MuiIconButton-root {
  //  display: none;
  //}

  ${({ theme }) => theme.breakpoints.up("lg")} {
    .MuiGrid-item {
      &:first-child {
        .MuiInputBase-root {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
      }

      &:nth-child(2) {
        fieldset {
          border-left-color: transparent;
          border-right-color: transparent;
        }
      }
    }

    .continueBtn {
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
    }
  } ;
`

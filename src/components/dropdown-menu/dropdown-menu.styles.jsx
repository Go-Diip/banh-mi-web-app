import styled from "styled-components"
import SectionWrapper from "../section-wrapper/section-wrapper.component"
import { InputLabel, Select } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  padding: 0;
`

export const Hero = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 4em 0;
`
export const CustomSelect = styled(Select)``

export const Label = styled(InputLabel)`
  color: ${({ theme }) => theme.palette.primary.main};
`

export const MenuWrapper = styled.div`
  padding: 2em 0;
`

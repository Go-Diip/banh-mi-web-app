import React from "react"
import * as S from "./menu-items.styles"
import { Container } from "@mui/material"

const MenuItems = ({ items, title }) => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  )
}

export default MenuItems

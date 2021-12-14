import React from "react"
import * as S from "./reservation-form.styles"
import {
  Container,
  Grid,
  Box,
  InputAdornment,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material"
import Logo from "../../assets/logo-red.svg"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined"
import CustomButton from "../custom-button/custom-button.component"
import { graphql, useStaticQuery } from "gatsby"
import CancelIcon from "@mui/icons-material/Cancel"

const ReservationForm = ({ close }) => {
  const [age, setAge] = React.useState("")

  const handleChange = event => {
    setAge(event.target.value)
  }

  const staticQuery = useStaticQuery(graphql`
    query {
      menu: file(relativePath: { eq: "full-menu.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <Container>
        <S.TopWrapper>
          <Logo />
          <CancelIcon onClick={close} />
        </S.TopWrapper>
        <S.Description>
          Banh Mi offers seasonally inspired menus featuring the highest quality
          seafood and meats available from the local Gulf coast and beyond.
        </S.Description>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Box component="form" noValidate autoComplete="off">
              <S.CustomTextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Full Name"
                fullWidth
              />
              <S.CustomTextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Email"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <S.CustomTextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Phone"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <PhoneOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <S.CustomTextField
                    variant="outlined"
                    placeholder="Number of Guests"
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <S.CustomTextField
                    id="date"
                    type="date"
                    required
                    fullWidth
                    defaultValue="Event Day"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <S.CustomTextField
                    id="time"
                    type="time"
                    defaultValue="Event Hour"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  {" "}
                  <FormControl fullWidth>
                    <InputLabel
                      style={{ color: "#a9a9a9" }}
                      id="demo-simple-select-helper-label"
                    >
                      Type of Menu
                    </InputLabel>
                    <S.CustomSelect
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={age}
                      label="Type of Menu"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </S.CustomSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel
                      style={{ color: "#a9a9a9" }}
                      id="demo-simple-select-helper-label"
                    >
                      Type of Event
                    </InputLabel>
                    <S.CustomSelect
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={age}
                      label="Type of Event"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </S.CustomSelect>
                  </FormControl>
                </Grid>
              </Grid>

              <S.CustomTextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Special Request (optional)"
                fullWidth
              />
              <CustomButton fullWidth type="submit">
                Submit
              </CustomButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <S.RightWrapper>
              <S.Image img={staticQuery.menu} />
              <S.Description>
                Banh Mi offers seasonally inspired menus featuring the highest
                quality seafood and meats available from the local Gulf coast
                and beyond.
              </S.Description>
            </S.RightWrapper>
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default ReservationForm

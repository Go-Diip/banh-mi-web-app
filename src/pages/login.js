import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { useEffect, useRef, useState } from "react"
import { auth } from "../services/firebase"
import * as S from "../styles/pages/login.styles"
import { navigate } from "gatsby"
import Spinner from "../components/spinner/spinner.component"
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://godiip.com/">
        Diip
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

export default function SignIn() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  console.log("user Logged Token", user)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      }
      if (userAuth) {
        console.log("userAuth", userAuth)
        setUser(user)
        navigate("/iniciar-sesion/")
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    if (user) {
      navigate("/reservaciones-reporte/")
    }
  }, [user])

  const signIn = e => {
    e.preventDefault()
    setIsLoading(true)
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(user => {
        setIsLoading(false)
        console.log("user", user)
      })
      .catch(err => {
        setIsLoading(false)
        console.log(err)
      })
  }

  const signUp = e => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(user => {
        console.log(user)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <S.Wrapper>
      {isLoading && <Spinner />}
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>
          <Box component="form" onSubmit={signIn} noValidate sx={{ mt: 1 }}>
            <TextField
              inputRef={emailRef}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              color="inputs"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              inputRef={passwordRef}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              color="inputs"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/*<FormControlLabel*/}
            {/*  control={<Checkbox value="remember" color="primary" />}*/}
            {/*  label="Remember me"*/}
            {/*/>*/}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {/*<Grid container>*/}
            {/*  <Grid item xs>*/}
            {/*    <Link href="#" variant="body2">*/}
            {/*      Forgot password?*/}
            {/*    </Link>*/}
            {/*  </Grid>*/}
            {/*  <Grid item>*/}
            {/*    <Link href="#" variant="body2">*/}
            {/*      {"Don't have an account? Sign Up"}*/}
            {/*    </Link>*/}
            {/*  </Grid>*/}
            {/*</Grid>*/}
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </S.Wrapper>
  )
}

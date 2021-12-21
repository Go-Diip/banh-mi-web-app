import React, { useEffect, useRef, useState } from "react"
import Layout from "../components/layout"
import { auth } from "../services/firebase"

const Login = () => {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const [user, setUser] = useState(null)


  console.log("user Logged Token", user)


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth.uid,
        email: userAuth.email
      }
      if (userAuth) {
        console.log('userAuth', userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])

  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value, passwordRef.current.value
    ).then(user => {
      console.log('user', user)
    }).catch(err => {
      console.log(err)
    })
  }

  const signUp = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value, passwordRef.current.value
    ).then(user => {
      console.log(user)
    }).catch(err => {
      console.log(err)
    })
  }


  return (
    <Layout seo={{ title: "Login" }} showFooter={false} showHeader={false}>
      <div className="signin">
        <form action="">
          <h1>Sign in</h1>
          <input ref={emailRef} type="email" />
          <input ref={passwordRef} type="password" />
          <button onClick={signIn}> Sign in</button>
          <h6>Not yet register? <span className="signin__link" onClick={signUp}>sign up</span></h6>
        </form>
        <button onClick={() => auth.signOut()}>Signout</button>
      </div>
    </Layout>
  )
}

export default Login

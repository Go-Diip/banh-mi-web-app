import firebase from "firebase/compat/app"
import "firebase/compat/firestore"


const config = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  projectId: process.env.GATSBY_PROJECT_ID,
  storageBucket: process.env.GATSBY_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_APP_ID,
  measurementId: process.env.GATSBY_MEASUREMENT_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const firestore = firebase.firestore()

export { firestore }
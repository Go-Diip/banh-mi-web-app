import firebase from "firebase/compat/app"
import "firebase/compat/firestore"


console.log("firebase", firebase)

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const firestore = firebase.firestore()

export { firestore }
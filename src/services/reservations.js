import { firestore } from "./firebase"
import moment from "moment"

export const getReservations = async () => {
  const snapshot = await firestore.collection("reservations").get()

  return snapshot.docs.map(doc => ({
    ...doc.data(),
    date: moment.unix(doc.data().date.seconds).format("DD/MM/YYYY kk:mm")
  }))
}

export const setReservation = async data => {
  await firestore.collection("reservations").add({
    ...data,
  })
}

import { firestore } from "./firebase"
import moment from "moment"

export const getReservations = async () => {
  const snapshot = await firestore.collection("reservations").get()

  return snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
    date: moment.unix(doc.data().date.seconds).format("DD/MM/YYYY kk:mm")
  }))
}

export const setReservation = async data => {
  await firestore.collection("reservations").add({
    ...data,
  })
}

export const updateReservationStatus = async (id, status) => {
  const snapshot = await firestore.collection("reservations").doc(id);
  const res = await snapshot.update(status);
  return res
}

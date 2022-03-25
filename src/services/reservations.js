import { firestore } from "./firebase"
import moment from "moment"

export const getReservations = async () => {
  try {
    const snapshot = await firestore.collection("reservations").get()
    return snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
      date: moment.unix(doc.data().date.seconds).format("DD/MM/YYYY HH:mm"),
    }))
  } catch (e) {
    return e
  }
}

export const setReservation = async data => {
  try {
    return firestore
      .collection("reservations")
      .add({
        ...data,
      })
      .then(e => {})
      .catch(e => ({
        error: e,
      }))
  } catch (e) {
    return { error: e }
  }
}

export const deleteReservation = async id => {
  try {
    const snapshot = await firestore.collection("reservations").doc(id)
    return await snapshot.delete()
  } catch (e) {
    return e
  }
}

export const updateReservationData = async (id, data) => {
  try {
    const snapshot = await firestore.collection("reservations").doc(id)
    return await snapshot.update(data)
  } catch (e) {
    return e
  }
}

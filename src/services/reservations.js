import { firestore } from "./firebase"

export const getReservations = async () => {
  const snapshot = await firestore.collection("reservations").get()
   snapshot.docs.forEach(doc => console.log(doc.data()))
}

// export const getReservations2 = async () => {
//   const snapshot = await firestore.collection("reservations").get()
//
//   if (!snapshot || !snapshot.docs) {
//     return [];
//   }
//
//   return snapshot.docs.map((doc) => {
//     return (
//       console.log("data read", doc.data())
//       // id: doc.id,
//       // ...doc.data()
//     )
//   });
// };

export const setReservation = async (data) => {
  await firestore.collection("reservations").add({
    ...data
  })
}
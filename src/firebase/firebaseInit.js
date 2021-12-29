import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD8nHLSwp8CWEIT-JRvhbqMuqJb7IiWPrY",
  authDomain: "fireblog-fc04f.firebaseapp.com",
  projectId: "fireblog-fc04f",
  storageBucket: "fireblog-fc04f.appspot.com",
  messagingSenderId: "1079136441299",
  appId: "1:1079136441299:web:3a1611ace64d349f57d526",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const firestore = firebaseApp.firestore()


const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp }
export { firestore }

export default firebase
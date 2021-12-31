import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8nHLSwp8CWEIT-JRvhbqMuqJb7IiWPrY",
  authDomain: "fireblog-fc04f.firebaseapp.com",
  projectId: "fireblog-fc04f",
  storageBucket: "fireblog-fc04f.appspot.com",
  messagingSenderId: "1079136441299",
  appId: "1:1079136441299:web:3a1611ace64d349f57d526",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firestore = firebaseApp.firestore();
const auth = firebase.auth();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { timestamp, firestore, auth };

export default firebase;




// create User in firebase Auth & add it in db
export const createUser = async ( userData) => {
  
  const {email, password, firstName, lastName, userName} = userData

  const user = await auth.createUserWithEmailAndPassword(email, password);
  const result = await user;
  const dataBase = firestore.collection("users").doc(result.user.uid);

  await dataBase.set({
    email,
    firstName,
    lastName,
    userName
  });
};









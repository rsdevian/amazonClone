// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnrk-BhHIAagUo-1f2OfYEamrXs9n1FHA",
  authDomain: "challenge-ca542.firebaseapp.com",
  projectId: "challenge-ca542",
  storageBucket: "challenge-ca542.appspot.com",
  messagingSenderId: "481957008783",
  appId: "1:481957008783:web:cf4a28d0b5efdb5a00a7fa",
  measurementId: "G-NF52V1G0B7"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };

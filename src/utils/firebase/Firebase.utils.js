import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBt7dq0YV6JOwbLKdeqjDDoGsJY55tXwDk",
  authDomain: "clothing-ecommerce-db-6f7c7.firebaseapp.com",
  projectId: "clothing-ecommerce-db-6f7c7",
  storageBucket: "clothing-ecommerce-db-6f7c7.appspot.com",
  messagingSenderId: "516808798496",
  appId: "1:516808798496:web:dafde33506924e5e772745",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
const createUserDocumentFromAuth = async () => {};

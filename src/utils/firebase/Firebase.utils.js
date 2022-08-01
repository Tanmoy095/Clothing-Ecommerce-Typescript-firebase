import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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
//initializing firebase apk
const firebaseApp = initializeApp(firebaseConfig);

//getting google provider
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

//generating Auth
export const auth = getAuth();
//Sign in with popup method with google provider passing value of google provider we created and auth generated
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
//Singin with redirect method
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
//creating database from firestore
export const db = getFirestore();

//create method and we recive userAuth from firebase

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  //doc first take database,then second argument will be collection
  const userDocRef = doc(db, "user", userAuth.uid);

  //console.log(userDocRef);
  //get the document for our userSnapshot
  const userSnapshot = await getDoc(userDocRef);
  //console.log(userSnapshot);
  //console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user,email already in use");
      } else {
        console.log(err.message);
      }
    }
  }
  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);
//whenEver you instiate the function you have to give me a callback
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcPjPBm8qJtGj3_nzlZ7jml-oGLL91suc",
  authDomain: "fir-learning-785fd.firebaseapp.com",
  projectId: "fir-learning-785fd",
  storageBucket: "fir-learning-785fd.appspot.com",
  messagingSenderId: "598439458829",
  appId: "1:598439458829:web:d8f6ceeb330b56f0f37d44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

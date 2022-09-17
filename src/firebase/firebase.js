// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCkAaAKU3PbL7412aFQTAms_kWFEqep2TU",
  authDomain: "mjpdevs.firebaseapp.com",
  projectId: "mjpdevs",
  storageBucket: "mjpdevs.appspot.com",
  messagingSenderId: "263351530035",
  appId: "1:263351530035:web:1479c29ce6c9249d45a946",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

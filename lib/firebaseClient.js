// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv1ziHX019n1A08IyNNPHU_PsYZg40c1k",
  authDomain: "hmps-si.firebaseapp.com",
  projectId: "hmps-si",
  storageBucket: "hmps-si.firebasestorage.app",
  messagingSenderId: "66040341209",
  appId: "1:66040341209:web:d4feb9404ee7ac814114c8",
  measurementId: "G-QGYJE9GW32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

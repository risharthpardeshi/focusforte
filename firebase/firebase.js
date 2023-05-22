
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCjr_q_CjTeFrXI1hyXxATy_-0pDEklBM8",
  authDomain: "procastination-terminator.firebaseapp.com",
  projectId: "procastination-terminator",
  storageBucket: "procastination-terminator.appspot.com",
  messagingSenderId: "515704629456",
  appId: "1:515704629456:web:cfebc72fa73ee3ca9356d5",
  measurementId: "G-6MQX9C5LJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
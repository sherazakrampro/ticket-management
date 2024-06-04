// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ticket-mangement-system-mern.firebaseapp.com",
  projectId: "ticket-mangement-system-mern",
  storageBucket: "ticket-mangement-system-mern.appspot.com",
  messagingSenderId: "763467495196",
  appId: "1:763467495196:web:18778f5ee8ca06070a2cd9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEVph_KwqJw4sqaxorZTx9SylTtsFFSzo",
  authDomain: "hashbits-9f11f.firebaseapp.com",
  projectId: "hashbits-9f11f",
  storageBucket: "hashbits-9f11f.appspot.com",
  messagingSenderId: "914337366298",
  appId: "1:914337366298:web:0405066e883a727c8e6ca3"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
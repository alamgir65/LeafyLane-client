// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0cd7A0Wsum7rZAn3p7dT1mn90zFX1CjA",
  authDomain: "leafylane-3be24.firebaseapp.com",
  projectId: "leafylane-3be24",
  storageBucket: "leafylane-3be24.firebasestorage.app",
  messagingSenderId: "691224059461",
  appId: "1:691224059461:web:b457150c4aa49b989f8d2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
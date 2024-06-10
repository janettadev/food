import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF1FxpYKJSIxB-kbrjGnScK0JZ_G69M-Y",
  authDomain: "food-27f2d.firebaseapp.com",
  projectId: "food-27f2d",
  storageBucket: "food-27f2d.appspot.com",
  messagingSenderId: "275083101778",
  appId: "1:275083101778:web:fb2fed974628410d74818b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth( app)
export default app
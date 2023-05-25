import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJZvLdS8NqqUNJYm0hQ3km2csFZ7wuiy0",
  authDomain: "e-commerce-authenticatio-51f5d.firebaseapp.com",
  projectId: "e-commerce-authenticatio-51f5d",
  storageBucket: "e-commerce-authenticatio-51f5d.appspot.com",
  messagingSenderId: "615178928579",
  appId: "1:615178928579:web:6b456b990d9b6b7af23d76",
  measurementId: "G-R57SXL77MM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app

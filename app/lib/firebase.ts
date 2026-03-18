import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlKQUQubvZUhklMI-lLJzvrPuKyFZY2bc",
  authDomain: "restaurant-academy.firebaseapp.com",
  projectId: "restaurant-academy",
  storageBucket: "restaurant-academy.firebasestorage.app",
  messagingSenderId: "124222800583",
  appId: "1:124222800583:web:d34d0bd5f03c6f345ff4e2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
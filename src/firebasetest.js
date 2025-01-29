import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBb3kj0p_rtv9fHirwSzKRoJCmHv6tulsk",
  authDomain: "react-amateallover.firebaseapp.com",
  projectId: "react-amateallover",
  storageBucket: "react-amateallover.firebasestorage.app",
  messagingSenderId: "40025528593",
  appId: "1:40025528593:web:c691c2beee1a0d5cb314b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 2. Conexión con la base de datos de Firestore
const db = getFirestore(app);
console.log(db);
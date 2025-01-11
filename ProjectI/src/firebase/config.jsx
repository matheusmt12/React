import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDCMfe96f2tw1RadVn41PL9TcLCzbdaQGk",
  authDomain: "projetoi-9805b.firebaseapp.com",
  projectId: "projetoi-9805b",
  storageBucket: "projetoi-9805b.firebasestorage.app",
  messagingSenderId: "65957117867",
  appId: "1:65957117867:web:d00564a79a9c81d5971cee",
  measurementId: "G-8B3F5JTT8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}
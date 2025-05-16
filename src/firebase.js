// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAfzHtddzQvGBKT3fxxJzN1ANAS-R0akn8",
  authDomain: "bank-of-scotland-5908c.firebaseapp.com",
  projectId: "bank-of-scotland-5908c",
  storageBucket: "bank-of-scotland-5908c.firebasestorage.app",
  messagingSenderId: "567893959803",
  appId: "1:567893959803:web:996b3bc7940d63d6d16ede",
  measurementId: "G-W8MMBLK8LG"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

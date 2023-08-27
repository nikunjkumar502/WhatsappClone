
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6Bp08P1WqQxKUfnwGt5ZMjR366kr5gcU",
  authDomain: "whatsappclone-81388.firebaseapp.com",
  projectId: "whatsappclone-81388",
  storageBucket: "whatsappclone-81388.appspot.com",
  messagingSenderId: "552771204856",
  appId: "1:552771204856:web:f3d34a385cdc027fdded0d",
  measurementId: "G-S5LQSP1RQ4"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseAuth = getAuth(app);
// firebaseConfig.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCykxTuqKTpLFOecypJAM5d1OwjDxwjRIQ",
  authDomain: "custom-kicks-ca63e.firebaseapp.com",
  projectId: "custom-kicks-ca63e",
  storageBucket: "custom-kicks-ca63e.firebasestorage.app",
  messagingSenderId: "555965914762",
  appId: "1:555965914762:web:7100e2a17a0d6834ba1773",
  measurementId: "G-9HEQX8N793",
};

// Ensure the app is initialized only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
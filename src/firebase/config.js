import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAj5uy5ygPdZ7qY77qFsGvgdEtOGlTTWJw",
  authDomain: "turi-velas.firebaseapp.com",
  projectId: "turi-velas",
  storageBucket: "turi-velas.firebasestorage.app",
  messagingSenderId: "298917861302",
  appId: "1:298917861302:web:e36a16b504cabef39f1317",
  measurementId: "G-NTEFTW90KF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }; 
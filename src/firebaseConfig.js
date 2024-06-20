// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyArqhd-UruhyQEHMkGTSsoAvhrfZeHtnUk",
    authDomain: "social-project-iitr.firebaseapp.com",
    projectId: "social-project-iitr",
    storageBucket: "social-project-iitr.appspot.com",
    messagingSenderId: "577054064391",
    appId: "1:577054064391:web:82856d4c865542e7098fa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

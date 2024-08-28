// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmdr4w6ItCYih3xwhlOq_Evj-jy-NzDx0",
  authDomain: "contact-app-87b7d.firebaseapp.com",
  projectId: "contact-app-87b7d",
  storageBucket: "contact-app-87b7d.appspot.com",
  messagingSenderId: "814529969542",
  appId: "1:814529969542:web:793d7e78dbda7796748007",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

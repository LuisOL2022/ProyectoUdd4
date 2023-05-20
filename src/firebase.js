// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjtWM28Eu1XGgllgbHf6AimHsv73qp2I4",
  authDomain: "restaurant-5f79b.firebaseapp.com",
  databaseURL: "https://restaurant-5f79b-default-rtdb.firebaseio.com",
  projectId: "restaurant-5f79b",
  storageBucket: "restaurant-5f79b.appspot.com",
  messagingSenderId: "1094812779446",
  appId: "1:1094812779446:web:2ad16cba30e91a64bd3717"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const db = getFirestore();
//export default db;
export const db = getFirestore();
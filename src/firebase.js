import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDpwzxNUJRH4_Y1i9PK0zleMh86EBrttkQ",
   authDomain: "todo-a-5aef2.firebaseapp.com",
   projectId: "todo-a-5aef2",
   storageBucket: "todo-a-5aef2.appspot.com",
   messagingSenderId: "913193422028",
   appId: "1:913193422028:web:725a71b79c515d616d0669"
 };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
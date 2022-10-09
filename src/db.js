import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBWO3IeHllWM719ndN9wgBYOcH0sJKWo1s",
    authDomain: "melody-c61fb.firebaseapp.com",
    databaseURL: "https://melody-c61fb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "melody-c61fb",
    storageBucket: "melody-c61fb.appspot.com",
    messagingSenderId: "999971416646",
    appId: "1:999971416646:web:bb85d9e89e0c846e87b847",
    measurementId: "G-04V2MLXKL0"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = { 
  apiKey: "AIzaSyAVJn044ZeUccK86PkdwUuCv9i2r-v0GPo",
  authDomain: "ar-textiles.firebaseapp.com",
  projectId: "ar-textiles",
  storageBucket: "ar-textiles.appspot.com",
  messagingSenderId: "357722451299",
  appId: "1:357722451299:web:45e30402d55d5106e77756",
  measurementId: "G-XQFPWD56L2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth()
export const fireBaseAuth = getAuth(app)

export {db}

export const storage = getStorage(app)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAvu4f4h5FacIIMdZ3b7xt2o0Y7FeWC_1M",
    authDomain: "instagram-5911f.firebaseapp.com",
    projectId: "instagram-5911f",
    storageBucket: "instagram-5911f.appspot.com",
    messagingSenderId: "225046747257",
    appId: "1:225046747257:web:29d6ebb4db9c8c9a491ca8",
    measurementId: "G-JK9VXPR5R0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,auth,firestore,storage};
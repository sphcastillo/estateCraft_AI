import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAc0JrQxvFajbJXtAnZr9hRD_xjG2mAQOg",
    authDomain: "propertypitch-ai.firebaseapp.com",
    projectId: "propertypitch-ai",
    storageBucket: "propertypitch-ai.appspot.com",
    messagingSenderId: "512841398373",
    appId: "1:512841398373:web:374bddaea618ac6e6aae8c"
  };

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

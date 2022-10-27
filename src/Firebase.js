import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpj0_gvhFu6anBhy-z2CF0SdJbqNh4I1I",
  authDomain: "smarthome-e9a26.firebaseapp.com",
  projectId: "smarthome-e9a26",
  storageBucket: "smarthome-e9a26.appspot.com",
  messagingSenderId: "699644907929",
  appId: "1:699644907929:web:848c5471da44bba36e0308"
};


firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

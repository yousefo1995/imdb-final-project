import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAPC-VbKpIBZVXF043h5wBuCijPg3lIRKg",

  authDomain: "imdb-clone-2.firebaseapp.com",

  projectId: "imdb-clone-2",

  storageBucket: "imdb-clone-2.appspot.com",

  messagingSenderId: "792473352950",

  appId: "1:792473352950:web:b7c315963c4c108a828ad7",

  measurementId: "G-R29ZJ9006F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

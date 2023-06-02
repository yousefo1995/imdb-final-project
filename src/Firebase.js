import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCKqbwk5jMch3AKINLDKVaIor34l4stLvg",
  authDomain: "imdb-clone-62dac.firebaseapp.com",
  projectId: "imdb-clone-62dac",
  storageBucket: "imdb-clone-62dac.appspot.com",
  messagingSenderId: "254427168131",
  appId: "1:254427168131:web:d2e77e529106a073b30ab6",
  measurementId: "G-P0J344WQY6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcJ8hJicU2JItsuItpbBTSnApLJ67lr8g",
  authDomain: "test-project-2b7c6.firebaseapp.com",
  projectId: "test-project-2b7c6",
  storageBucket: "test-project-2b7c6.appspot.com",
  messagingSenderId: "966880280137",
  appId: "1:966880280137:web:67cfc0fb17bbb596018998",
  measurementId: "G-Q2F035W99J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// firebase.initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage }; // Export the storage reference
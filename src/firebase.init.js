// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8hpd_4diknZOjxF818lQVS5Y428z8YlU",
    authDomain: "photographic-place.firebaseapp.com",
    projectId: "photographic-place",
    storageBucket: "photographic-place.appspot.com",
    messagingSenderId: "821266110682",
    appId: "1:821266110682:web:af002d1c113833205cede3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
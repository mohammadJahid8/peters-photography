// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhVACRWhXJJcDsllg4pYX5qQHgKEPiFLU",
    authDomain: "assignment-10-5eb12.firebaseapp.com",
    projectId: "assignment-10-5eb12",
    storageBucket: "assignment-10-5eb12.appspot.com",
    messagingSenderId: "951884211161",
    appId: "1:951884211161:web:95f060e063d11743b46fc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from '/firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDon5wXsHOAv1AL1y-1_3Ne7bCSH2aJakA",
    authDomain: "ema-john-shopping-95d45.firebaseapp.com",
    projectId: "ema-john-shopping-95d45",
    storageBucket: "ema-john-shopping-95d45.appspot.com",
    messagingSenderId: "838391885439",
    appId: "1:838391885439:web:936c4f433adecfd839594a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth
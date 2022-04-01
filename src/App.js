import'./style.scss'
import Stopwatch from "./Stopwatch";
import Dice from "./Dice";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKOKsSBJ_aR5VNk_H7IFFTyPy3YW7JsLo",
    authDomain: "kids-a930c.firebaseapp.com",
    projectId: "kids-a930c",
    storageBucket: "kids-a930c.appspot.com",
    messagingSenderId: "90935907735",
    appId: "1:90935907735:web:bc5af8b75efd3313b460d2",
    measurementId: "G-X3SBYNMQEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {

    return (
    <div>

        <textarea>
        Write the question
        </textarea>

        <Stopwatch/>


        <Dice/>
    </div>
  );
}

export default App;

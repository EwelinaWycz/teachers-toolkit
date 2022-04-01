import {initializeApp} from "firebase/app";
import {getDatabase, ref, set} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCKOKsSBJ_aR5VNk_H7IFFTyPy3YW7JsLo",
    authDomain: "kids-a930c.firebaseapp.com",
    projectId: "kids-a930c",
    storageBucket: "kids-a930c.appspot.com",
    messagingSenderId: "90935907735",
    appId: "1:90935907735:web:bc5af8b75efd3313b460d2",
    measurementId: "G-X3SBYNMQEG"
};

const app = initializeApp(firebaseConfig);

    function writeStudentData(studentname) {
    const db = getDatabase();
    const reference = ref(db, 'kids/' + kidId);
    set(reference, {
        studentname: name,
    });
}

writeStudentData("Ania");
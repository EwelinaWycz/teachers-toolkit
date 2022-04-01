import { useEffect, useState } from 'react';
import { getDatabase, ref, set, get, child } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCKOKsSBJ_aR5VNk_H7IFFTyPy3YW7JsLo",
    authDomain: "kids-a930c.firebaseapp.com",
    databaseURL: "https://kids-a930c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kids-a930c",
    storageBucket: "kids-a930c.appspot.com",
    messagingSenderId: "90935907735",
    appId: "1:90935907735:web:bc5af8b75efd3313b460d2",
    measurementId: "G-X3SBYNMQEG"
};

initializeApp(firebaseConfig);

async function loadUsersData() {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `/`))
}

function getRandomStudent(students) {
    return students[Math.floor(Math.random() * students.length)];
}

function Selector() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        loadUsersData()
            .then(snapshot => setStudents(Object.values(snapshot.val())))
            .catch(console.error);
    }, []);

    return (
            <div className={"selector-container"}>
                <h2>Students</h2>
                {students.map((student) => (
                    <div key={student}>{student}</div>
                ))}
                <button onClick={() => alert(getRandomStudent(students))}>Get random student</button>

            </div>
    );
}

export default Selector;

import'./style.scss'
import 'react-dice-complete/dist/react-dice-complete.css'
import Stopwatch from "./Stopwatch";
import Dice from "./Dice";
import Selector from "./Selector";
import Board from "./Board";
import Monster from './Monster';
import {useState} from "react";


function App() {
    const [popupText, setPopupText] = useState();
    const [laps, setLaps] = useState([]);

    return (

        <div>

            <header>
                Teacher's Toolkit
            </header>

            <Board laps={laps}/>

            <Selector setPopupText={setPopupText} />

            <Stopwatch laps={laps} setLaps={setLaps} />

            <Dice setPopupText={setPopupText} />

            <Monster text={popupText} />
        </div>
    );
}

export default App;

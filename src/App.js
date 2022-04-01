import'./style.scss'
import Stopwatch from "./Stopwatch";
import Dice from "./Dice";
import Selector from "./Selector";
import Board from "./Board";



function App() {

    return (

        <div>

            <header>
                Teacher's Toolkit
            </header>

            <Board/>

            <Selector/>

            <Stopwatch/>

            <Dice/>

        </div>
    );
}

export default App;

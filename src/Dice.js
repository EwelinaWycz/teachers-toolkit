import Dice from "react-dice-roll";
import {useState} from "react";

const Roll = () => {

    const [dice, setDice] = useState();

    return (

        <div className={"dice-container"}>
            <Dice onRoll={(value) => {
                setDice(value);
            }}/>
            <p> Wynik to {dice}</p>
        </div>
    );
}

export default Roll;

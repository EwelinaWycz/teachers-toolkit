import ReactDice from 'react-dice-complete'

const Roll = ({ setPopupText }) => {
    return (
        <div className={"dice-container"}>
            <h2>Dice</h2>
            <ReactDice
                defaultRoll={1}
                dieSize={110}
                numDice={1}
                rollTime={1}
                faceColor="#3c096c"
                dotColor="#ffffff"
                rollDone={(value) => {
                    setPopupText(`Dice roll is ${value}`);
                }}
            />
        </div>
    );
}

export default Roll;

import React, { useState } from "react";


const Board = ({ laps }) => {
    const [value, setValue] = useState();

    return (
        <div className={"board"}>
            <div className={"board-overlay"}>
                {Boolean(laps.length) && `Laps: ${laps.join('s, ')}s`}
            </div>
            <textarea spellCheck={false} value={value} onChange={e => setValue(e.target.value)} placeholder="Write the directions" />
        </div>
    );
}

export default Board;


import React, { useEffect, useState } from "react";

const Stopwatch = ({ laps, setLaps }) => {
    const [time, setTime] = useState(0);
    const [counter, setCounter] = useState(0);
    const [active, setIsActive] = useState(false);
    const [int, setInt] = useState(false);

    useEffect(() => {
        setInt(
            setInterval(() => {
                setCounter((prev) => prev + 1);
            }, 1000)
        );

        return () => {
            clearInterval(int);
        };
    }, []);

    useEffect(() => {
        if (active) {
            setTime((prev) => prev + 1);
        }
    }, [counter]);

    return (
        <div className={"stopwatch-container"}>
            <h2>Timer </h2>
            <h1>{time}s</h1>
            <button
                onClick={() => {
                    setIsActive(true);
                }}
            >
                Start
            </button>
            <button
                onClick={() => {
                    if (active) {
                        setLaps([...laps.slice(-3), time]);
                    }
                }}
            >
                Lap
            </button>
            <button
                onClick={() => {
                    setIsActive(false);
                }}
            >
                Stop
            </button>
            <button
                onClick={() => {
                    // clearInterval(int);
                    setLaps([])
                    setTime(0)
                    // setInt((prev) => {
                    //   !prev &&
                    //     setInterval(() => {
                    //       setCounter((prev) => prev + 1);
                    //     }, 1000);
                    // });

                }}
            >
                Restart
            </button>
        </div>
    );
};

export default Stopwatch;
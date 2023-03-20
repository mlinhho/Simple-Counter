import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const Timer = (props) => {
    const [intervalId, setIntervalId] = useState(undefined);
    const [time, setTime] = useState(0);
    function start(event) {
        if (intervalId === undefined) {
            // create an interval because there is no
            // intervalId
            const _intervalId = setInterval(() => {
                setTime((previousTime) => previousTime + 1);
            }, 1000);
            setIntervalId(_intervalId);
        }
    };
    function stop(event) {
        clearInterval(intervalId);
        setIntervalId(undefined);
    };
    function reset(event) {
        setTime(0);
    }
    useEffect(() => {
        start();
    }, []);
    return (
        <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
                <p className="w-auto">{time.toString().length < 6
                    ? 0
                    : time.toString().charAt(time.toString().length - 6)}</p>
                <p className="w-auto">{time.toString().length < 5
                    ? 0
                    : time.toString().charAt(time.toString().length - 5)}</p>
                <p className="w-auto">{time.toString().length < 4
                    ? 0
                    : time.toString().charAt(time.toString().length - 4)}</p>
                <p className="w-auto">{time.toString().length < 3
                    ? 0
                    : time.toString().charAt(time.toString().length - 3)}</p>
                <p className="w-auto">{time.toString().length < 2
                    ? 0
                    : time.toString().charAt(time.toString().length - 2)}</p>
                <p className="w-auto">{time.toString().charAt(time.toString().length - 1)}</p>
            </div>
            <div className="d-flex justify-content-center">
                <button
                    onClick={start}
                >{"start"}</button>
                <button
                    onClick={reset}
                >{"reset"}</button>
                <button
                    onClick={stop}
                >{"stop"}</button>
            </div>
        </div>
    );
};

Timer.propTypes = {
    time: PropTypes.number
};

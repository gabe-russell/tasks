import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    const handleStart = () => {
        if (attempt > 0) {
            setProgress(true);
            setAttempt(attempt - 1);
        }
    };
    const handleStop = () => {
        setProgress(false);
    };
    const handleMulligan = () => {
        setAttempt(attempt + 1);
    };
    return (
        <div>
            <Button onClick={handleStart} disabled={progress || attempt === 0}>
                Start Quiz
            </Button>
            <Button onClick={handleStop} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={handleMulligan} disabled={progress}>
                Mulligan
            </Button>
            <div>Attempts left: {attempt} </div>
        </div>
    );
}

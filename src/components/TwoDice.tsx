import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftdie, setLeftdie] = useState(1);
    const [rightdie, setRightdie] = useState(2);
    const [result, setResult] = useState<string | null>(null);

    const rollLeft = () => {
        const newleft = d6();
        setLeftdie(newleft);
        resultcheck(newleft, rightdie);
    };
    const rollRight = () => {
        const newright = d6();
        setRightdie(newright);
        resultcheck(newright, leftdie);
    };
    const resultcheck = (left: number, right: number) => {
        if (left === right && left === 1) {
            setResult("Lose");
        } else if ((left === right && left !== 1) || right !== 1) {
            setResult("Win");
        } else {
            setResult(null);
        }
    };
    return (
        <div>
            <span data-testid="left-die">{leftdie}</span>
            <span data-testid="right-die">{rightdie}</span>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            {result && <div data-testid="result">{result}</div>}
        </div>
    );
}

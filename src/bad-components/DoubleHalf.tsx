import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

function Doubler({
    currentValue,
    onDouble
}: {
    currentValue: number;
    onDouble: (value: number) => void;
}): JSX.Element {
    return <Button onClick={() => onDouble(2 * currentValue)}>Double</Button>;
}

function Halver({
    currentValue,
    onHalve
}: {
    currentValue: number;
    onHalve: (value: number) => void;
}): JSX.Element {
    return <Button onClick={() => onHalve(0.5 * currentValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler currentValue={dhValue} onDouble={setDhValue} />
            <Halver currentValue={dhValue} onHalve={setDhValue} />
        </div>
    );
}

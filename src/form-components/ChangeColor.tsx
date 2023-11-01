import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "black",
    "grey"
];
export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((clr) => (
                <Form.Check
                    key={clr}
                    type="radio"
                    name="color"
                    value={clr}
                    inline
                    label={clr}
                    checked={color === clr}
                    onChange={updateColor}
                />
            ))}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </div>
        </div>
    );
}

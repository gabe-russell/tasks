import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="dropdownQuiz">
                <Form.Label>Multiple Choice</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((selection: string) => (
                        <option key={selection} value={selection}>
                            {selection}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <h3>
                The Answer is
                {choice === expectedAnswer ? "✔️" : "❌"}
            </h3>
        </div>
    );
}

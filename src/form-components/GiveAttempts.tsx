import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempt] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const request = parseInt(requestedAttempts) || 0;

    function changeAttempt(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestedAttempts(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formQuiz">
                <Form.Label>Attempts left: {attempts}</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={changeAttempt}
                    placeholder="Enter number of attempts"
                />
                <Button
                    onClick={() => setAttempt(attempts - 1)}
                    disabled={attempts <= 0}
                >
                    Use
                </Button>
                <Button onClick={() => setAttempt(attempts + request)}>
                    Gain
                </Button>
            </Form.Group>
            <h3>Give Attempts</h3>
        </div>
    );
}

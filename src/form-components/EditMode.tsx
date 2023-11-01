import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleStudentChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setStudent(event.target.checked);
    };

    const switchEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                label="Edit Mode"
                checked={isEditMode}
                onChange={switchEditMode}
            />

            {isEditMode ? (
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formStudent">
                        <Form.Check
                            type="checkbox"
                            label="Is a student"
                            checked={student}
                            onChange={handleStudentChange}
                        />
                    </Form.Group>
                </Form>
            ) : (
                <p>
                    {name} {student ? "is a student" : "is not a student"}.
                </p>
            )}
        </div>
    );
}

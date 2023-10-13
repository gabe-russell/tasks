import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    const handleButtonClick = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <Button onClick={handleButtonClick}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}

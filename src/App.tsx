import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "blackwhite" }}
            >
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Gabe Russell
            </p>
            <h1>Hello World</h1>
            <img src="test.jpeg" alt="A software engineer" />;
            <ul>
                <li>Basketball</li>
                <li>Football</li>
                <li>Baseball</li>
            </ul>
            <Button onClick={() => console.log("Hello World")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "30",
                                width: "10",
                                backgroundColor: "blue"
                            }}
                        >
                            First Column
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: "30",
                                width: "10",
                                backgroundColor: "blue"
                            }}
                        >
                            Second Column
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

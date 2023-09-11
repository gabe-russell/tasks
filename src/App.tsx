import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import img from "./images/test.jpeg";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Gabe Russell
            </p>
            <h1>Hello World</h1>
            <img src={img} alt="a software engineer" />
            <ul>
                Unordered List
                <li>Basketball</li>
                <li>Football</li>
                <li>Baseball</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p></p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "100",
                                width: "60",
                                backgroundColor: "orange"
                            }}
                        >
                            First Column
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: "100",
                                width: "60",
                                backgroundColor: "orange"
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

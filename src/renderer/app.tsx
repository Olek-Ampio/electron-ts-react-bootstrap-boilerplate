import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

import electronApi from "./electronBridgeApi";

export default function App() {
  useEffect(() => {
    electronApi.on("fromMain", (data) => {
      console.log(data);
    });
  });

  const debug = () => {
    console.log("debug");
    electronApi.send("toMain", ["debug"]);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/">
                Ampio
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/devices">
                  Devices
                </Nav.Link>
                <Nav.Link as={Link} to="/programmer">
                  Programmer
                </Nav.Link>
                <Nav.Link as={Link} to="/dev-test">
                  Tester
                </Nav.Link>
                <Nav.Link as={Link} to="/main_window">
                  mainWindow
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <br />
        </>
        <div>
          <Routes>
            <Route path="/devices" element={<h1>Devices</h1>} />
            <Route path="/programmer" element={<h1>Programmer</h1>} />
            <Route path="/dev-test" element={<h1>DeviceTest</h1>} />
            <Route path="/main_window" element={<h1>mainWindow</h1>} />
            <Route path="/" element={<h1>Home</h1>} />
          </Routes>
        </div>
      </div>
      <Button onClick={debug} variant="primary">
        Primary
      </Button>{" "}
    </BrowserRouter>
  );
}

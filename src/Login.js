import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        username,
        password,
      });

      localStorage.setItem("jwt", response.data.token);
      localStorage.setItem("username", username);
      window.location.href = "/about";
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="logincontainer">
      <Navbar className="aboutnavbar" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand className="logoleft"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
         
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="logo"></Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1 className="head_er">EDUCATION AND SKILL DEVELOPMENT</h1>
      <div className="imagecont"></div>
      <div className="formcont">
        <form onSubmit={handleSubmit}>
          <div className="username">
            <div className="usern">Sign in to continue!</div>
            <input
              className="beta"
              type="text"
              placeholder="Username"
              label="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>

          <div className="pwd">
            <input
              label="Password"
              className="gamma"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div className="btnlast">
            <Button className="btt" type="submit">
              Login
            </Button>
          </div>
          {error && <p>{error}</p>}
        </form>
      </div>
      
    </div>
  );
};

export default Login;

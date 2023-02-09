import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
// import {FaSignInAlt} from "react-icons/fa";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_AUTH_URL_PROD
      : process.env.REACT_APP_AUTH_URL_DEV;
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/login`, {
        username,
        password,
      });

      localStorage.setItem("jwt", response.data.token);
      localStorage.setItem("username", username);
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="logincontainer">
      <h1 className="head_er">TATA EDUCATION AND SKILL DEVELOPMENT</h1>
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
          {/* <div className="pasw">Password:</div> */}
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

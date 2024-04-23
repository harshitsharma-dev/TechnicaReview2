import React, { useState } from "react";
import "./login.css";
import Axios from "axios";
import { redirect } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validateUsername = (username) => {
    return username.trim() !== "" && username.length >= 4;
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const register = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }

    if (!validateUsername(username)) {
      setError("Username should be at least 4 characters long");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password should be at least 6 characters long");
      return;
    }

    Axios.post("http://localhost:3001/register", {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else {
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
    });
  };

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].email);
        redirect('/');
        console.log("reached here");
      }
    });
  };

  return (
    <div className="container">
      <div className="card">
        <h4>Login Here</h4>
        <form>
          <label htmlFor="username">Username*</label>
          <input
            className="textInput"
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your Username"
            required
          />
          <label htmlFor="password">Password*</label>
          <input
            className="textInput"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            required
          />
          <input
            className="button"
            type="submit"
            onClick={login}
            value="Login"
          />
          <h1 className="status">
  {loginStatus == "WRONG USERNAME OR PASSWORD!" || loginStatus == "" ? 
    loginStatus 
    : <a href="/vite-deploy/LoggedIN.html">Back to HOME</a>}
</h1>

        </form>
      </div>
      <div className="card">
        <h4>Register Here</h4>
        <form>
          <label htmlFor="email">Email Address*</label>
          <input
            className="textInput"
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email Address"
            required
          />
          <label htmlFor="username">Username*</label>
          <input
            className="textInput"
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your Username"
            required
          />
          <label htmlFor="password">Password*</label>
          <input
            className="textInput"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            required
          />
          <input
            className="button"
            type="submit"
            onClick={register}
            value="Create an account"
          />
          <h1 className="status">{registerStatus}</h1>
        </form>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default LoginPage;

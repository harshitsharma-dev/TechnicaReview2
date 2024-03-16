import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement login logic here (e.g., send data to server for authentication)
    console.log('Login attempted:', formData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div style={{ width: '630px' }}> {/* Wrapper div with maxWidth */}
        <div className="card p-5 shadow-sm" > {/* Card inside the wrapper div */}
          <h2 className="text-center mb-4" >Login page</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Enter username"
                onChange={handleChange}
                value={formData.username}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
                name="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary mt-4 w-100">
              Login
            </button>
            {/* <a href='../signup.html'><button className="btn btn-secondary">
              SignUp
            </button></a> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

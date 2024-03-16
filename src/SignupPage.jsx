import React, { useState } from 'react';
import Input from './Input'; // Custom component for input fields

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: '',
  });
  const [errors, setErrors] = useState({}); // To store validation errors

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: '' }); // Clear error on change
  };

  const validateForm = () => {
    let error = {};
    // Name validation
    if (!formData.name) {
      error.name = 'Name is required';
    }

    // Email validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(formData.email)) {
      error.email = 'Invalid email format';
    }

    // Password validation
    if (formData.password.length < 8) {
      error.password = 'Password must be at least 8 characters long';
    }

    // Confirm password validation
    if (formData.confirmPassword !== formData.password) {
      error.confirmPassword = 'Passwords do not match';
    }

    // OTP validation
    if (!formData.otp) {
      error.otp = 'OTP is required';
    }

    return error;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit data
      console.log('Form Submitted:', formData);
      // Implement submission logic here (e.g., send data to server)
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center"> {/* Center align the row */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <Input label="Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} />
                {/* <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} error={errors.phone} /> */}
                <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
                <Input label="Password" name="password" type="password" value={formData.password} onChange={handleChange} error={errors.password} />
                <Input label="Re-enter Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} />
                <Input label="OTP" name="otp" value={formData.otp} onChange={handleChange} error={errors.otp} />
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </form>
              {Object.keys(errors).length > 0 && (
                <div className="alert alert-danger" role="alert">
                  {Object.values(errors).map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

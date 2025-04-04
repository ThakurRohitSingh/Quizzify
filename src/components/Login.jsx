import React, { useState } from 'react';
import blobTop from "../assets/blobTop.svg";
import blobBottom from "../assets/blobBottom.svg";
import '../Styles/Auth.css';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <div className="LandingPage-container">
      <img className="blob-top" src={blobTop} alt="Top Blob" />
      <div className="container">
        <h2>Login</h2>
        <p>Enter Credentials to Start Quizzing Now</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="email"
              name="email"
              className="input-field"
              placeholder="Email"
              {...register("email", {
                required: "Email is required", // Required field validation
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i,
                  message: "Please enter a valid email address", // Email format validation
                }
              })}
            />
            {errors.email && <p id='error'>{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="password"
              name='password'
              className="input-field"
              placeholder="Password"
              {...register("password", {
                required: "Password is required", // Required field validation
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long", // Minimum length validation
                }
              })}
            />
            {errors.password && <p id='error'>{errors.password.message}</p>}
          </div>

          <div className="forgot-password">
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <div className="auth-link">
          <p>Don't have an account? <span className="auth-link-text">Sign Up</span></p>
        </div>
      </div>
      <img className="blob-bottom" src={blobBottom} alt="Bottom Blob" />
    </div>
  );
};

export default Login;

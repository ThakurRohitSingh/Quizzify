import React from 'react';
import blobTop from "../assets/blobTop.svg";
import blobBottom from "../assets/blobBottom.svg";
import "../Styles/Auth.css";
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSignUp = (data) => {
    // Handle sign-up logic here
    console.log(data);
  };

  return (
    <div className="LandingPage-container">
      <img className="blob-top" src={blobTop} alt="Top Blob" />
      <div className="container">
        <h2>Sign Up</h2>
        <p>Unlock Quizzes by Creating an Account!</p>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div>
            <input
              type="text"
              className="input-field"
              placeholder="Enter your Full Name"
              {...register("fullName", {
                required: "Full Name is required", // Required field validation
              })}
            />
            {errors.fullName && <p id="error">{errors.fullName.message}</p>}
          </div>

          <div>
            <input
              type="email"
              className="input-field"
              placeholder="Enter your Email"
              {...register("email", {
                required: "Email is required", // Required field validation
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i,
                  message: "Please enter a valid email address", // Email format validation
                }
              })}
            />
            {errors.email && <p id="error">{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="password"
              className="input-field"
              placeholder="Enter your Password"
              {...register("password", {
                required: "Password is required", // Required field validation
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long", // Minimum length validation
                }
              })}
            />
            {errors.password && <p id="error">{errors.password.message}</p>}
          </div>

          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <div className="auth-link">
          <p>Already have an account? <span className="auth-link-text">Login</span></p>
        </div>
      </div>
      <img className="blob-bottom" src={blobBottom} alt="Bottom Blob" />
    </div>
  );
};

export default SignUp;

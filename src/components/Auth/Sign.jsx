import React from 'react';
import "../../Styles/Auth.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const onSubmit = async (data) => {
    try {
      await axios.post(`${baseURL}/addUser`, data);
      toast.success("User registered successfully!");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="LandingPage-container">
      <div className="container">
        <h2>Sign Up</h2>
        <p>Unlock Quizzes by Creating an Account!</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              className="input-field"
              placeholder="Enter your Full Name"
              {...register("fullname", { required: "Full name is required" })}
            />
            {errors.fullname && <p id="error-text">{errors.fullname.message}</p>}
          </div>

          <div>
            <input
              type="email"
              className="input-field"
              placeholder="Enter your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && <p id="error-text">{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="password"
              className="input-field"
              placeholder="Enter your Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
            />
            {errors.password && <p id="error-text">{errors.password.message}</p>}
          </div>

          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <div className="auth-link">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default SignUp;

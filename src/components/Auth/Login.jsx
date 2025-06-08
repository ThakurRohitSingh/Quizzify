import React, { useState, useContext } from 'react';
import '../../Styles/Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Auth/AuthProvider'; 

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext); 

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/api/quiz/user/loginUser", data);
      const token = response.data.token; 

      loginUser(token); 
      toast.success(response.data.message);
      navigate("/select");
    } catch (err) {
      console.error(err);
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="LandingPage-container">
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
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format"
                }
              })}
            />
            {errors.email && <p id="error-text">{errors.email.message}</p>}
          </div>

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input-field"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
            />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </span>
            {errors.password && <p id="error-text">{errors.password.message}</p>}
          </div>

          <div className="forgot-password">
            <Link to="/forgotpassword">Forgot password?</Link>
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>

        <div className="auth-link">
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default Login;

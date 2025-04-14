import React, { useState } from 'react';
import '../../Styles/Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const changeForm = ({ target: { name, value } }) => {
    setLoginData({ ...loginData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post("http://localhost:5000/quiz/user/loginUser", loginData);
      toast.success(user.data.message);
      navigate("/select");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="LandingPage-container">
      <div className="container">
        <h2>Login</h2>
        <p>Enter Credentials to Start Quizzing Now</p>
        <form onSubmit={login}>
          <div>
            <input
              type="email"
              name="email"
              className="input-field"
              placeholder="Email"
              required
              onChange={changeForm}
            />
          </div>

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input-field"
              placeholder="Password"
              required
              onChange={changeForm}
            />
            <span
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
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

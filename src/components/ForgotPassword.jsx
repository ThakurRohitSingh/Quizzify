import React, { useState } from 'react';
import '../Styles/Auth.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/quiz/user/requestPasswordReset", {
        email,
      });
      console.log(email)

      toast.success(response.data.message || "Reset password link sent successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send reset link");
    }
  };

  return (
    <div className="LandingPage-container">
      <div className="container">
        <h2>Forgot Password</h2>
        <p>Enter your email to receive a reset link</p>
        <form onSubmit={handleForgotPassword}>
          <div>
            <input
              type="email"
              name="email"
              className="input-field"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-button">Send Reset Link</button>
        </form>
        <div className="auth-link">
          <p>Remembered your password? <Link to="/login">Login</Link></p>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default ForgotPassword;

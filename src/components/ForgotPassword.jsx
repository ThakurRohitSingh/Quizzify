import React from 'react';
import '../Styles/Auth.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const handleForgotPassword = (e) => {
    e.preventDefault();
  
    toast.success("Reset password link sent successfully!");
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
              required
            />
          </div>
          <button type="submit" className="auth-button">Send Reset Link</button>
        </form>
        <div className="auth-link">
          <p>Remembered your password? <Link to="/login">Login</Link></p>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default ForgotPassword;

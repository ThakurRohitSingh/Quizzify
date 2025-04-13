import React from 'react';
import '../Styles/Auth.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdatePassword = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle the form submission logic here (e.g., API call)
    toast.success('Password updated successfully!');
  };

  return (
    <div className="LandingPage-container">
      <div className="container">
        <h2>Update Password</h2>
        <p>Enter a new password and confirm it below</p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="password"
              className="input-field"
              placeholder="New Password"
            />
          </div>

          <div>
            <input
              type="password"
              className="input-field"
              placeholder="Confirm Password"
            />
          </div>

          <button type="submit" className="auth-button">Update Password</button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default UpdatePassword;

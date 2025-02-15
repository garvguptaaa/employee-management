import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./ManageUser.css";

const ManageUser = (props) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  console.log('errors',errors)
  const handleLogin = (data) => {
    localStorage.setItem('UserData',JSON.stringify(data));
    props.onLogin()
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to TeamPulse</h2>

        {/* Show error message if invalid credentials */}

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="input-group">
            <input
              type="text"
              autoComplete="off"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
              })}
            />
            <div>
              {errors.email && (
                <span className="text-danger fs-12">{errors.email.type == 'pattern' ? 'Please Enter Valid Email' : 'Please Enter Email'}</span>
              )}
            </div>
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                // pattern: /^^(?=.*[A-Za-z0-9])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,20}$/
              })}
            />
            <div>
              {errors.password && (
                <span className="text-danger fs-12">Please Enter Password</span>
              )}
            </div>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <div className="forgot-password">
            <Link to="/forget password">forget password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageUser;

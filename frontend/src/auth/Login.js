import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  //for form data
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  //handling error
  const handleError = (err) => {
    setError(err);
     setFormData({
        email: "",
        password: "",
      });
  };

  //handling success
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // API call
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        formData,
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        setTimeout(() => {
          window.location.href = "http://localhost:3001";
        });
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Login failed. Please try again.");
    }
  };

  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-card"]}>
        {/* Logo Section */}

        <div className="logo d-flex justify-content-center pt-0">
          <img
            src="media/images/Nav.png"
            alt="IntraTrading"
            style={{
              width: "30%",
              height: "auto",
            }}
          />
        </div>
        <h2 className="text-center pt-1">Welcome Back</h2>

        {error && <div className={styles["error-message"]}>{error}</div>}
        <form onSubmit={handleSubmit} className={styles["login-form"]}>
          <div className={styles["form-group"]}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="password">Password</label>
            <div className={styles["password-input-container"]}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className={styles["password-toggle"]}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <div className={styles["form-options"]}>
            <label className={styles["remember-me"]}>
              <input type="checkbox" />
              <span className={styles["checkmark"]}></span>
              Remember me
            </label>
          </div>

          <button type="submit" className={styles["login-button"]}>
            {" "}
            Sign In
          </button>
        </form>

        <div className={styles["signup-link"]}>
          Don't have an account? <Link to="/signupPage">Sign up now</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

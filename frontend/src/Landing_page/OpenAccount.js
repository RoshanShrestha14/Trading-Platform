import React from "react";
import "./OpenAccount.css";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <h2 className="text-center">
        Sign Up Now and Start Your Trading Journey
      </h2>
      <p className="text-center mt-4" style={{ fontSize: "1.2rem" }}>
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <div className=" d-flex justify-content-center ">
        <Link
          style={{ textDecoration: "none", display: "block" }}
          to="/signupPage"
        >
          <button type="button" class="btn btn-outline-primary btn-lg">
            Sign up Now{" "}
          </button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;

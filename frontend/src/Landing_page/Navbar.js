import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark glow-navbar">
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="media/images/Nav.png"
            alt="TradeStack"
            className="brand-logo ms-0 ms-lg-5"
          />
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarGlowContent"
          aria-controls="navbarGlowContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarGlowContent">
          <ul className="navbar-nav mx-lg-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link nav-glow-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-glow-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-glow-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-glow-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-glow-link" to="/support">
                Support
              </Link>
            </li>
          </ul>

          {/* Auth actions */}
          <div style={{ display: "flex", gap: "10px" }}>
            <Link to="/loginPage" className=" w-lg-auto">
              <button 
                style={{
                  padding: "8px 20px",
                  borderRadius: "6px",
                  background: "transparent",
                  color: "rgba(59, 130, 246, 0.5)",
                  cursor: "pointer",
                   border: "1px solid rgba(59, 130, 246, 0.5)",
          transition: "all 0.3s ease"
                }}onMouseEnter={(e) => {
          e.target.style.background = "rgba(59, 130, 246, 0.2)";
          e.target.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "transparent";
          e.target.style.transform = "translateY(0)";
        }}

              >
                Login
              </button>
            </Link>
            <Link to="/signupPage" className="w-100 w-lg-auto">
              <button
        style={{
          padding: "8px 20px",
          borderRadius: "6px",
          color: "white",
          border: "none",
          cursor: "pointer",
           border: "1px solid rgba(59, 130, 246, 0.5)",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.target.style.background = "rgba(59, 130, 246, 0.2)";
          e.target.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "rgba(59, 130, 246, 0.8)";
          e.target.style.transform = "translateY(0)";
        }}
      >
        Sign up
      </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

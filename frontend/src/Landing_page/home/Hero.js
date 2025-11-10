import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center text-center flex-column">
        <img
          src="media/images/homeHero.jpg"
          alt="HeroImage"
          className="image-with-fade"
          style={{
            lineHeight: "0",
            width: "100%",
            maxWidth: "90rem",
            height: "auto",
            objectFit: "cover",
            transform: "translateX(5rem)",
          }}
        />

        <h1
          className="heroH1 mb-1 display-5 display-md-4 "
          style={{ lineHeight: "0.0" }}
        >
          Hold a piece of everything
        </h1>

        <p className="heroPara mb-1 lead mt-5">
          An all-in-one online platform to invest in stocks, derivatives, mutual
          funds, ETFs, bonds, and more.”
        </p>

        <Link to="/signupPage" className="w-100 w-lg-auto">
          <button
            style={{
              padding: "8px 20px",
              borderRadius: "6px",
              background: "rgba(92, 149, 240, 0.43)",
              color: "white",
              border: "none",
              cursor: "pointer",
              border: "1px solid rgba(59, 130, 246, 0.5)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(59, 130, 246, 0.2)";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(92, 149, 240, 0.43)";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Sign up Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;

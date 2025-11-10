import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <h3 className="text-center aboutH1">
          TradeStack is a comprehensive trading platform simulation built to
          master modern web development technologies.
        </h3>
        <hr className="mt-5"></hr>
        <div className="col-6">
          <h6 className="text-start">
            TradeStack is a comprehensive, full-stack paper trading platform
            meticulously developed to simulate the core functionalities of a
            real-world financial trading website.
            <br />
            <br />
            The platform features a sophisticated technical architecture
            utilizing the MERN stack, with a React.js frontend delivering a
            dynamic and responsive user experience. Bootstrap ensures a
            professional, mobile-first interface that adapts seamlessly across
            all devices, providing traders with consistent access to market data
            and trading tools. 
            <br />
            <br />
            On the backend, Node.js and Express.js power a secure RESTful API
            that handles complex business logic including user authentication,
            portfolio management, and transaction processing. The server
            architecture is designed for scalability and performance, capable of
            handling multiple concurrent users and real-time data streams.
          </h6>
        </div>
        <div className="col-6">
          <h6 className="text-start">
            MongoDB serves as the primary database, chosen for its flexibility
            in managing diverse financial data models. The database schema
            efficiently stores user profiles, portfolio holdings, transaction
            history, watchlists, and real-time market information while ensuring
            data integrity and fast query performance.
            <br />
            <br /> This comprehensive end-to-end solution showcases my ability
            to architect, develop, and deploy sophisticated web applications.
            TradeStack stands as a testament to my full-stack development skills
            and my understanding of building production-ready applications that
            solve real-world problems through elegant technical solutions.
          </h6>
        </div>
        <hr className="mt-5"></hr>
      </div>
    </div>
  );
}

export default Hero;

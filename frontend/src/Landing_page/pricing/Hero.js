import React from "react";


function Hero() {
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-5">
          Experience More at Industry Standard Prices
        </h2>
        <p
          className="text-center awardPara mt-4"
          style={{ fontSize: "1.2rem" }}
        >
          Incredible stock trading & investing at industry standard prices.
        </p>
        <div className="row mt-5">
          <div className="col-12 col-md-6 col-lg-3 mb-4 money">
            <div
              className="glow-card p-3 text-white"
              style={{ height: "20rem" }}
            >
              <h5>
                For Account Opening,
                <br />
                AMC & Platform Fees
              </h5>

              <p className="mt-4">
                Open free account with zero AMC or platform fees.
              </p>
              <img
                src="media/images/doller.png"
                alt="HeroImage"
                className="mt-1 doller"
                style={{
                

                  height: "60%",
                  objectFit: "cover",
                  borderRadius: "2rem",
                }}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4 money">
            <div
              className="glow-card p-3 text-white"
              style={{ height: "20rem" }}
            >
              <h5>For All Segment Options</h5>

              <p className="mt-4">
                ₹20 per executed order for equity & commodity options.
                <br />
                <br />
              </p>
              <img
                src="media/images/doller.png"
                alt="HeroImage"
                className="mt-1 doller"
                style={{
                  

                  height: "60%",

                  objectFit: "cover",
                  borderRadius: "2rem",
                }}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4 money">
            <div
              className="glow-card p-3 text-white"
              style={{ height: "20rem" }}
            >
              <h5>
                For Equity Delivery,
                <br />
                IPO & Mutual Funds
              </h5>

              <p className="mt-4">Absolutely FREE! No hidden charges ever.</p>
              <img
                src="media/images/doller.png"
                alt="HeroImage"
                className="mt-1 doller"
                style={{
                 

                  height: "60%",
                  objectFit: "cover",
                  borderRadius: "2rem",
                }}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4 money">
            <div
              className="glow-card p-3 text-white"
              style={{ height: "20rem" }}
            >
              <h5>For Equity Intraday & All Segment Futures</h5>

              <p className="mt-4">
                ₹20 or 0.03% of trade value per executed order, whichever is
                lower.
              </p>
              <img
                src="media/images/doller.png"
                alt="HeroImage"
                className="doller"
                style={{
                 

                  height: "60%",
                  objectFit: "cover",
                  borderRadius: "2rem",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

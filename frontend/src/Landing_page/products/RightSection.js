import React from "react";
import "./RightSection.css"

function RightSection() {
  return (
    <div className="container mt-5">
      <div className="row" style={{ marginTop: "5rem" }}>
        <div className="col-6">
          <img
            src="media/images/console.jpg"
            alt="IntraTrading"
            className=" rightSectionImg"
            style={{
              width: "80%",
             marginTop:"4rem",
              height: "auto",
              objectFit: "cover",
              borderRadius: "2rem",
              
            }}
          />
        </div>
        <div className="col-6 mt-5">
          <h2 className="rightSectionH2 awardH1">Console</h2>

          <h5 className="pricingH5 awardPara mt-4">
            The central dashboard for your Zerodha account. Gain insights into
            your trades and investments with in-depth reports and
            visualisations.
            <br />
            <br /> Console crunches tens of billions of rows of historical trade
            breakdowns to keep track of corporate actions, splits, transfers,
            and more to compute the most accurate profit and loss statements
            (P&L) for your portfolio.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default RightSection;

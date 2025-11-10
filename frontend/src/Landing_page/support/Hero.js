import React from "react";

function Hero() {
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-5">How can we Help you?</h2>
        <p
          className="text-center awardPara mt-4"
          style={{ fontSize: "1.2rem" }}
        >
          If possible try to contact our team for our full Support .
        </p>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <img
              src="media/images/support.png"
              alt="IntraTrading"
              style={{
                width: "60%",
                marginTop: "4rem",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
          
           
        </div>
      </div>
    </>
  );
}

export default Hero;

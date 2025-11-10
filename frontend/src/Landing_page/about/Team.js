import React from "react";
import "./Team.css";

function Team() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex align-items-center justify-content-center">
            <img
              src="media/images/owner.jpg"
              alt="IntraTrading"
              className="teamImg"
             
            />
          </div>
          <div className="col-6">
            <h6 className="text-start mt-5">
                This project was independently conceived and executed by Roshan Shrestha as a capstone demonstration of full-stack development capabilities. The TradeStack platform represents my hands-on experience with modern web technologies and my ability to transform complex requirements into functional, user-friendly applications <br/>
                <br/>
                It serves as a tangible representation of my proficiency in architecting complete software solutions from initial concept to final implementation. The development process honed my skills in both front-end aesthetics and back-end logic, ensuring a seamless and secure user experience. Furthermore, this endeavor underscores my capacity for self-directed learning and problem-solving when navigating the intricacies of a complex, multi-technology stack. By building this platform from the ground up, I demonstrated a comprehensive understanding of the entire software development lifecycle. This work stands as a testament to my dedication to writing clean, efficient, and maintainable code in a production-like environment. Ultimately, the project exemplifies my readiness to undertake challenging development roles and contribute effectively to sophisticated web applications.

</h6> 

            
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;

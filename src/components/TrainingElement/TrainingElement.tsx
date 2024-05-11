import React from "react";
import { Link } from "react-router-dom";
import focal_logo from "./../../assets/focal_logo.jfif";
function TrainingElement() {
  return (
    <div className="trainig-element">
      <div className="row">
        <div className="col-md-9">
          <div className="training-title">
            <h3>Frontend Beginners Cource</h3>
          </div>
          <div className="tarinig-company">
            <h4>Focal X Agency</h4>
          </div>
          <div className="trainig-description">
            <p>
              I worked inI underwent a paid training program at FOCAL X ,
              spanning a period of four months. This comprehensive training
              program focused on front end development and provided me with
              valuable expertise in web technologies. During the training, I
              acquired hands on experience in building user interfaces using
              Html, css, Bootstrap, JavaScript and React I mastered the art of
              crafting responsive and visually appealing web interfaces,
            </p>
          </div>
          <div className="certificate-links">
            <h6>
              you can see the <Link to="/">Certificate here</Link> and the{" "}
              <Link to="/">Recomendation letter</Link>
            </h6>
          </div>
        </div>
        <div className="col-md-3">
          <div className="company-logo">
            <Link to="https://www.focal-x.com/">
              {" "}
              <img src={focal_logo} alt="focal-x-logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingElement;

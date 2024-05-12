import React from "react";
import { Link } from "react-router-dom";
import focal_logo from "./../../assets/focal_logo.jfif";
type Ttraining ={
    title : string ,
    company_name : string ,
    description : string ,
    certif_link : string ,
    recomen_link : string ,
    logo_url: string ,
}
function TrainingElement({title , company_name, description,certif_link,recomen_link,logo_url}: Ttraining) {
  return (
    <div className="trainig-element">
      <div className="row">
        <div className="col-md-9">
          <div className="training-title">
            <h3>{title}</h3>
          </div>
          <div className="tarinig-company">
            <h4>{company_name}</h4>
          </div>
          <div className="trainig-description">
            <p>
              {description}
            </p>
          </div>
          <div className="certificate-links">
            <h6>
              you can see the <Link to={certif_link}>Certificate here</Link> and the{" "}
              <Link to={recomen_link}>Recomendation letter</Link>
            </h6>
          </div>
        </div>
        <div className="col-md-3">
          <div className="company-logo">
            <Link to="https://www.focal-x.com/">
              {" "}
              <img src={logo_url} alt="focal-x-logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingElement;

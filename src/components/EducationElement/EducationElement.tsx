import React from "react";
import certificate from "./../../assets/certificate.jpg";
function EducationElement() {
  return (
    <div className="education-body">
      <div className="row">
        <div className="col-md-8">
          <div className="certificate-title mt-4">
            <h3>Bashelor's Degree In Information Technology</h3>
          </div>
          <div className="certificate-description">
            <p>
              I hold a degree in Information Technology Engineering, which has
              equipped me with a solid foundation in computer science and
              engineering principles. including , software development database
              management, network engineering During my academic journey, I
              gained hands on experience in coding, system design, and the
              development of software applications. I honed my skills in
              programming languages like Java, react, Html, css, JavaScript,
              python, php, Laravel, C# and C++ allowing me to create efficient
              and reliable software solutions My educational background in
              information Technology Engineering has not only equipped me with a
              strong technical skill set but has also fostered problem solving
              abilities and a commitment to staying updated with the latest
              advancements in the IT field. I am eager to apply my knowledge and
              skills to contribute effectively to any technology related project
              or organization .
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="certificate-image mt-4">
            <img src={certificate} alt="photo of certificate" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationElement;

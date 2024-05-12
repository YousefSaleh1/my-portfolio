import React, { useEffect, useState } from "react";
import axios from "axios";

type TEducation = {
  id: number;
  title: string;
  description: string;
  photo: string;
}

function EducationElement() {

  const [educationData, setEducationData] = useState<TEducation[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/educations")
      .then((response) => setEducationData(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {
        educationData.map((education) => (
          <div className="education-body">
            <div className="row">
              <div className="col-md-8">
                <div className="certificate-title mt-4">
                  <h3>{education.title}</h3>
                </div>
                <div className="certificate-description">
                  <p>
                    {education.description}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="certificate-image mt-4">
                  <img src={education.photo} alt="photo of certificate" />
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
}

export default EducationElement;

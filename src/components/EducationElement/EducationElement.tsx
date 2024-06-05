import { useAppContext } from "../../contexts/AppContext";


function EducationElement() {

  const { educationData } = useAppContext();

  return (
    <>
      {

        educationData?.map((education, index) => (
          <div key={index} className="education-body">

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
                  <img src={education.photo} alt="photo of certificate" loading="lazy" />
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

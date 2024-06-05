import { useAppContext } from "../../contexts/AppContext";

function TrainingElement() {

  const { trainingData } = useAppContext();

  return (
    <>
      {trainingData?.map((training, index) => (
        <div key={index} className="trainig-element">
          <div className="row">
            <div className="col-md-9">
              <div className="training-title">
                <h3>{training.training_name}</h3>
              </div>
              <div className="tarinig-company">
                <h4>{training.company_name}</h4>
              </div>
              <div className="trainig-description">
                <p>
                  {training.description}
                </p>
              </div>
              <div className="certificate-links">
                <h6>
                  you can see the{" "}
                  <a href={training.certificate_link}>Certificate here</a> and
                  the{" "}
                  <a href={training.recomendation_letter_link}>
                    Recomendation letter
                  </a>
                </h6>
              </div>
            </div>
            <div className="col-md-3">
              <div className="company-logo">
                <a href={training.company_link}>
                  <img src={training.company_logo} alt="company-logo" loading="lazy" />
                </a>
              </div>
            </div>

          </div>
        </div>
      ))}
    </>
  );
}

export default TrainingElement;

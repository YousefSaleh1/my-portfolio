import "./ProjectCard.css";
import { IoIosLink } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";

function ProjectCard() {

  const { projects } = useAppContext();

  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/project/${id}`)
  }

  return (
    <>

      {projects?.map((project, index) => (
        <div key={index} className="col-lg-4 col-md-6 col-sm-12">

          <div className="project-link" onClick={() => handleNavigate(project.id)} >
            <div className="project-card-component">
              <div className="card" >
                <div className="card-body">
                  <div className="row-title">
                    <h5 className="card-title">{project.title}</h5>
                    <Link className="card-link" to={project.demo_link}>
                      <IoIosLink />
                    </Link>
                  </div>
                  <div className="card-info">
                    <p className="card-text"> {project.description}</p>
                    <h1 className="card-date rounded-4 col-4 mb-3">{project.published} </h1>
                  </div>
                  <div className="card-footer">

                    {project.skills?.map((skill) => (
                      <Link
                        key={skill.id}

                        className="skill"
                        to="https://developer.mozilla.org/en-US/docs/Web/HTML"
                      >
                        <img src={skill.image} alt={skill.item} title={skill.item} loading="lazy" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
      }
    </>
  );
}

export default ProjectCard;

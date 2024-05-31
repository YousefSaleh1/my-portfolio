import "./ProjectCard.css";
import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { TProject } from "../../types/type";

function ProjectCard() {

  const [projects, setProjects] = useState<TProject[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/projects")
      .then((response) => {
        setProjects(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {projects.map((project,index) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
          <Link className="project-link" to={`/project/${project.id}`}>
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
                    {project.skills?.map((skill ,index )=> (
                      <Link
                        key={index}
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
          </Link>
        </div>
      ))
      }
    </>
  );
}

export default ProjectCard;

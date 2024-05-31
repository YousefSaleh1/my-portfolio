
import { HiCode } from "react-icons/hi";
import "./Project.css";
import { FaLink } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { TParams, TProject } from "../../types/type";

function Project() {

  const id = useParams<TParams>();

  const test = {
    id: 1,
    title: '',
    description: '',
    published: '',
    demo_link: '',
    github_link: '',
    project_photos: [
      {
        photo: ''
      }
    ],
    skills: [
      {
        id: 0,
        item: '',
        image: '',
      }
    ],
  }

  const [project, setProject] = useState<TProject>(test);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/project/${id.id}`)
      .then((response) => {
        setProject(response.data.data.project);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="project">
      <div id="ys-container" className="container">
        <section className="project-section">
          <div id="ys-container" className="container">
            <h3 className="project-title pt-md-3 pb-4">{project.title}</h3>
            <div className="project-info pb-4 mt-4">
              <div className="project-links mb-3">
                <a href={project.github_link} className="link">
                  <HiCode className="p-links-icon" />
                  <span className="p-link-info">GitHub</span>
                </a>
                <a href={project.demo_link} className="link">
                  <FaLink className="p-links-icon" />

                  <span className="p-link-info">Demo</span>
                </a>
              </div>
              <div className="project-technologies">
                {project.skills?.map((skill) => (
                  <a href="#" className="technology">
                    <div className="technology-info">
                      <img
                        src={skill.image}
                        alt={skill.item}
                        className="technology-image"
                        loading="lazy"
                      />
                      <span className="technology-name">
                        {skill.item}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="project-desc">
              <p>{project.description}</p>
            </div>
            <div className="row">
              {project.project_photos?.map((photo) => (
                <div
                  className="project-image col-lg-4 col-md-6 mb-3"
                >
                  <div className="overview">
                    <img src={photo.photo} alt={project.title} loading="lazy" />
                    <div className="overview-layer">
                      <FaEye />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Project;

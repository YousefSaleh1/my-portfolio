import "./ProjectCard.css";
import react from "../../assets/react.svg";
import bootstrap from "../../assets/bootstrap.svg";
import css from "../../assets/css.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import html from "../../assets/html.svg";
import js from "../../assets/js.svg";
import laravel from "../../assets/laravel.svg";
import php from "../../assets/PHP.svg";
import redux from "../../assets/redux.svg";
import typescript from "../../assets/typescript.svg";
import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";

function ProjectCard() {
  const dataProject = {
    title: "Recipes Website",
    description:
      " A recipe website is a platform where users discover diverse...",
    date: "Feb 26 2024",
    skills: ["react", "git", "js", "php"],
  };
  return (
    <div className="project-card-component">
      <div className="card" >
        <div className="card-body">
          <div className="row-title">
            <h5 className="card-title">{dataProject.title}</h5>
            <Link className="card-link" to="/project">
              <IoIosLink />
            </Link>
          </div>
          <div className="card-info">
            <p className="card-text"> {dataProject.description}</p>
            <h1 className="card-date rounded-4 col-4 mb-3">{dataProject.date} </h1>
          </div>
          <div className="card-footer">
            <Link
              className="skill"
              to="https://developer.mozilla.org/en-US/docs/Web/HTML"
            >
              <img src={react} alt="react" title="react" />
            </Link>
            <Link
              className="skill"
              to="https://developer.mozilla.org/en-US/docs/Web/HTML"
            >
              <img src={php} alt="php" />
            </Link>
            <Link
              className="skill"
              to="https://developer.mozilla.org/en-US/docs/Web/HTML"
            >
              <img src={js} alt="js" />
            </Link>
            <Link
              className="skill"
              to="https://developer.mozilla.org/en-US/docs/Web/HTML"
            >
              <img src={git} alt="git" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

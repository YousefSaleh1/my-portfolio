import './ProjectCard.css'
import react from '../../assets/react.svg';
import bootstrap from '../../assets/bootstrap.svg';
import css from '../../assets/css.svg';
import git from '../../assets/git.svg';
import github from '../../assets/github.svg';
import html from '../../assets/html.svg';
import js from '../../assets/js.svg';
import laravel from '../../assets/laravel.svg';
import php from '../../assets/PHP.svg';
import redux from '../../assets/redux.svg';
import typescript from '../../assets/typescript.svg';
import { IoIosLink } from "react-icons/io";

function ProjectCard() {
  const dataProject = 
    {
        title:"Card title",
        description:"E-Commerce website comes equipped with a range of features that...",
        date: "Feb 26 2024",
        skills: ["react" , "git" , "js" , "php"]
    }  
  return (
    <div className="projectcard">
      <div className="card" style={{width: "20rem"}}>
      <div className="card-body">
        <div className="row-title">
        <h5 className="card-title">{dataProject.title}</h5>
        <a className="link" href="https://google.com" ><IoIosLink /></a>
        </div>    
      <div className="card-info">
      <p className="card-text"> {dataProject.description}</p>
      <h1 className="card-date col-4">{dataProject.date} </h1>
      </div>
      <div className="card-footer">
      <a className="skill" href="https://developer.mozilla.org/en-US/docs/Web/HTML">      
      <img src={react} alt="react" title='react'/>
      </a>
      <a className="skill" href="https://developer.mozilla.org/en-US/docs/Web/HTML">      
      <img src={php} alt="react" /></a>
      <a className="skill" href="https://developer.mozilla.org/en-US/docs/Web/HTML">      
      <img src={js} alt="react" /></a>
      <a className="skill" href="https://developer.mozilla.org/en-US/docs/Web/HTML">      
      <img src={git} alt="react" /></a>
      </div>
    </div>
  </div>
  </div>

 
  )
}

export default ProjectCard
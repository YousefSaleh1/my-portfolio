// import { Link } from "react-router-dom";
// import certificate from "./../../assets/certificate.jpg";
// import focal_logo from "./../../assets/focal_logo.jfif";
import "./Home.css";
// import OneSkill from "../../components/OneSkill/OneSkill";
// import bootstrap from "./../../assets/bootstrap.svg";
// import html from "./../../assets/html.svg";
// import css from "./../../assets/css.svg";
// import php from "./../../assets/php-1.svg";
// import git from "./../../assets/git.svg";
// import js from "./../../assets/js.svg";
// import redux from "./../../assets/redux.svg";
// import laravel from "./../../assets/laravel-2.svg";
// import mysql from "./../../assets/mysql-1.svg";
// import typescript from "./../../assets/typescript.svg";
// import react from "./../../assets/react.svg";
import aboutImage from "./../../assets/about-me.svg";
import ContactForm from "../../components/ContactForm/ContactForm";
// import ProjectCard from "../../components/ProjectCard/ProjectCard";
import WhyMeCard from "../../components/WhyMeCard/WhyMeCard";
import React, { useRef } from "react";
import TrainingElement from "../../components/TrainingElement/TrainingElement";
import EducationElement from "../../components/EducationElement/EducationElement";
import Hero from "../../components/Hero/Hero";
import Skills from "../../components/Skills/Skills";
function Home() {
  const projectRef = useRef(null);
  const data = [
    {
      img: "https://abdalrhman80.github.io/My-Portfolio/assets/images/Search.svg",
      title: " Continuous learning",
      sub: "I obsess over every pixel and detail, ensuring seamless user experiences , honed to perfection in every project.",
    },
    {
      img: "https://abdalrhman80.github.io/My-Portfolio/assets/images/Learning.svg",
      title: "Continuous learning",
      sub: "I'm trying to stay up-to-date with latest trends, technologies, and best practices in frontend development.",
    },
    {
      img: "https://abdalrhman80.github.io/My-Portfolio/assets/images/Responsive.svg",
      title: "Responsive design",
      sub: "I specialize in developing websites that seamlessly adapt across diverse screen sizes and devices.",
    },
    {
      img: "https://abdalrhman80.github.io/My-Portfolio/assets/images/Development.svg",
      title: "Web development",
      sub: "Now, I study Backend development, and I am excited to develop my skills in it, My journey in development continues.",
    },
  ];


  return (
    <div className="home-page">
      <section id="hero-section">
        <Hero />
      </section>
      <section id="about-section">
        <div className="container">
          <div className="section-title mb-5">
            <h1>About Me</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <img src={aboutImage} alt="vectote of person" />
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-container">
                <div className="quiz-title">
                  <h2>Who am I?</h2>
                </div>
                <div className="about-text">
                  <p>
                    Hello again! I am happy to see you here. My name is Ahmed
                    Mohammed, 25 years old, graduated from Al-Baath University,
                    i have bachelor degree in Information Technology. Passionate
                    about creating engaging user experiences, translates designs
                    into functional websites and applications with creativity
                    and expertise. Committed to staying updated with industry
                    trends.
                  </p>
                </div>
                <div className="hire-me">
                  <button>Hire Me</button>
                </div>
              </div>
            </div>
          </div>
          <div className="whyme-title">
            <h3>
              Why Me?
            </h3>
          </div>
          <div className="whyme-cards-container row mt-5 overflow-hidden">
            {data.map((data ,index) =>{
              return(
                <div className="col-md-4" key={index}>
                  <WhyMeCard img={data.img} title={data.title} des={data.sub} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section id="education-training-section">
        <div className="container">
          <div className="section-title mb-5">
            <h1>Education And Training</h1>
          </div>
          <div className="education-training-section-body">
            <div className="education-elements-container">
              <div className="title-with-line ">
                <div className="before-line"></div>
                <h2>Education</h2>
                <div className="after-line"></div>
              </div>
              <EducationElement />
            </div>
            <div className="training-container">
              <div className="title-with-line mb-4">
                <div className="before-line"></div>
                <h2>Training</h2>
                <div className="after-line"></div>
              </div>
              <div className="training-elements-container">
                
                <TrainingElement />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills-section">
        <Skills />
      </section>
      <section id="projects-section" ref={projectRef}>
        <div className="container">
          <div className="section-title mb-5">
            <h1>Projects</h1>
          </div>
          <div className="project-container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                {/* <ProjectCard /> */}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                {/* <ProjectCard /> */}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                {/* <ProjectCard /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact-section">
        <div className="container">
          <div className="section-title mb-5">
            <h1>Contact</h1>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="contact-container">
                <div className="contact-header">
                  <h2>Get in touch</h2>
                </div>
                <div className="contact-text">
                  <p>
                    I’m currently looking for any new opportunities, my inbox is
                    always open. Whether you have a question or just want to say
                    hi, I’ll try my best to get back to you!
                  </p>
                </div>
                <div className="contact-details">
                  <div className="my-name">
                    <h5>Ahmed Mohammed</h5>
                  </div>
                  <div className="my-phone">
                    <p>+963-992546813</p>
                  </div>
                  <div className="my-email">
                    <p>ahmedmhmmad021@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

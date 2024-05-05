import { Link } from "react-router-dom";
import certificate from "./../../assets/certificate.jpg";
import focal_logo from "./../../assets/focal_logo.jfif";
import "./Home.css";
import OneSkill from "../../components/OneSkill/OneSkill";
import bootstrap from "./../../assets/bootstrap.svg";
import html from "./../../assets/html.svg";
import css from "./../../assets/css.svg";
import php from "./../../assets/php-1.svg";
import git from "./../../assets/git.svg";
import js from "./../../assets/js.svg";
import redux from "./../../assets/redux.svg";
import laravel from "./../../assets/laravel-2.svg";
import mysql from "./../../assets/mysql-1.svg";
import typescript from "./../../assets/typescript.svg";
import react from "./../../assets/react.svg";
function Home() {
  return (
    <div className="home-page">
      <section id="skilles-section">
        <div className="container">
          <div className="section-title">
            <h1>Skills</h1>
          </div>
          <div className="skilles-tag">
            <div className="title-with-line">
              <div className="before-line"></div>
              <h2>Programming Languages</h2>
              <div className="after-line"></div>
            </div>
            <div className="row">
              <div className="col-lg-4  col-md-11 col-sm-11">
                <OneSkill skill_name="JavaScript" skill_image={js} />
              </div>
              <div className="col-lg-4  col-md-11 col-sm-11">
                <OneSkill skill_name="TypeScript" skill_image={typescript} />
              </div>
              <div className="col-lg-4  col-md-11 col-sm-11">
                <OneSkill skill_name="PHP" skill_image={php} />
              </div>
            </div>
          </div>
          <div className="skilles-tag">
            <div className="title-with-line">
              <div className="before-line"></div>
              <h2>Libraries</h2>
              <div className="after-line"></div>
            </div>
            <div className="row">
              <div className="col-lg-4  col-md-11 col-sm-11">
                <OneSkill skill_name="React" skill_image={react} />
              </div>
              <div className="col-lg-4  col-md-11 col-sm-11">
                <OneSkill skill_name="Redux" skill_image={redux} />
              </div>
            </div>
          </div>
          <div className="skilles-tag">
            <div className="title-with-line">
              <div className="before-line"></div>
              <h2>Frameworks</h2>
              <div className="after-line"></div>
            </div>
            <div className="row">
              <div className="col-lg-4  col-md-11 col-sm-11">
                <OneSkill skill_name="Bootstrap" skill_image={bootstrap} />
              </div>
              <div className="col-lg-4  col-md-11 col-sm-11">
                <OneSkill skill_name="Laravel" skill_image={laravel} />
              </div>
            </div>
          </div>
          <div className="skilles-tag">
            <div className="title-with-line">
              <div className="before-line"></div>
              <h2>Markup Languages</h2>
              <div className="after-line"></div>
            </div>
            <div className="row">
              <div className="col-lg-4  col-md-11 col-sm-11 ">
                <OneSkill skill_name="HTML" skill_image={html} />
              </div>
              <div className="col-lg-4  col-md-11 col-sm-11">
                <OneSkill skill_name="Css" skill_image={css} />
              </div>
            </div>
          </div>
          <div className="skilles-tag">
            <div className="title-with-line">
              <div className="before-line"></div>
              <h2>Database Management</h2>
              <div className="after-line"></div>
            </div>
            <div className="row">
              <div className="col-lg-4  col-md-11 col-sm-11">
                <OneSkill skill_name="MySQL" skill_image={mysql} />
              </div>
            </div>
          </div>
          <div className="skilles-tag">
            <div className="title-with-line">
              <div className="before-line"></div>
              <h2>Additional Skills</h2>
              <div className="after-line"></div>
            </div>
            <div className="row">
              <div className="col-lg-4  col-md-11 col-sm-11">
                <OneSkill skill_name="Git" skill_image={git} />
              </div>
            </div>
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
              <div className="education-body">
                <div className="row">
                  <div className="col-md-8">
                    <div className="certificate-title mt-4">
                      <h3>Bashelor's Degree In Information Technology</h3>
                    </div>
                    <div className="certificate-description">
                      <p>
                        I hold a degree in Information Technology Engineering,
                        which has equipped me with a solid foundation in
                        computer science and engineering principles. including ,
                        software development database management, network
                        engineering During my academic journey, I gained hands
                        on experience in coding, system design, and the
                        development of software applications. I honed my skills
                        in programming languages like Java, react, Html, css,
                        JavaScript, python, php, Laravel, C# and C++ allowing me
                        to create efficient and reliable software solutions My
                        educational background in information Technology
                        Engineering has not only equipped me with a strong
                        technical skill set but has also fostered problem
                        solving abilities and a commitment to staying updated
                        with the latest advancements in the IT field. I am eager
                        to apply my knowledge and skills to contribute
                        effectively to any technology related project or
                        organization .
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
            </div>
            <div className="training-container">
              <div className="title-with-line mb-4">
                <div className="before-line"></div>
                <h2>Training</h2>
                <div className="after-line"></div>
              </div>
              <div className="training-elements-container">
                <div className="trainig-element">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="training-title">
                        <h3>Frontend Beginners Cource</h3>
                      </div>
                      <div className="tarinig-company">
                        <h4>Focal X Agency</h4>
                      </div>
                      <div className="trainig-description">
                        <p>
                          I worked inI underwent a paid training program at
                          FOCAL X , spanning a period of four months. This
                          comprehensive training program focused on front end
                          development and provided me with valuable expertise in
                          web technologies. During the training, I acquired
                          hands on experience in building user interfaces using
                          Html, css, Bootstrap, JavaScript and React I mastered
                          the art of crafting responsive and visually appealing
                          web interfaces,
                        </p>
                      </div>
                      <div className="certificate-links">
                        <h6>
                          you can see the <Link to="/">Certificate here</Link>{" "}
                          and the <Link to="/">Recomendation letter</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="company-logo">
                        <Link to="https://www.focal-x.com/">
                          {" "}
                          <img src={focal_logo} alt="focal-x-logo" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="trainig-element">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="training-title">
                        <h3>Full Stack Diploma</h3>
                      </div>
                      <div className="tarinig-company">
                        <h4>Focal X Agency</h4>
                      </div>
                      <div className="trainig-description">
                        <p>
                          I worked inI underwent a paid training program at{" "}
                          <span className="strong"> FOCAL X </span>,spanning a
                          period of 4 months. This comprehensive training
                          program focused on frontend and backend development
                          and provided me with valuable expertise in web
                          technologies. During the training, I acquired hands on
                          experience in building user interfaces and backend
                          logic and database management using
                          <span className="strong">
                            {" "}
                            JavaScript, TypeScrpt, React, PHP, MySQL and Laravel{" "}
                          </span>{" "}
                          I mastered the art of crafting Websites from zero and
                          handle the dealing with Front, Back and Database.
                        </p>
                      </div>
                      <div className="certificate-links">
                        <h6>
                          you can see the <Link to="/">Certificate here</Link>{" "}
                          and the <Link to="/">Recomendation letter</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="company-logo">
                        <Link to="https://www.focal-x.com/">
                          {" "}
                          <img src={focal_logo} alt="focal-x-logo" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

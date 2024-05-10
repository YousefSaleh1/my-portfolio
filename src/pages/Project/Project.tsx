<<<<<<< HEAD
import { HiCode } from "react-icons/hi";
import "./Project.css";
import { FaLink } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import HTMLImage from "./../../assets/html.svg";
import CSSImage from "./../../assets/css.svg";
import TypeScriptImage from "./../../assets/typescript.svg";
import BootstrapImage from "./../../assets/bootstrap.svg";
import reactImage from "./../../assets/react.svg";

function Project() {
  const project = {
    title: "Fresh Cart",
    description:
      "E-Commerce website comes equipped with a range of features that include simplified user management (registration, login, and password reset), product browsing, product description viewing, adding and removing products from your cart, adding and removing products from your wishlist, and secure online payment transactions through an integrated payment gateway.",
    github_link: "https://github.com/abdalrhman80/Fresh-Cart-App",
    demo_link: "https://abdalrhman80.github.io/Fresh-Cart-App",
  };

  const skills = [
    {
      skill_item: "HTML",
      image: HTMLImage,
    },
    {
      skill_item: "CSS",
      image: CSSImage,
    },
    {
      skill_item: "TypeScript",
      image: TypeScriptImage,
    },
    {
      skill_item: "Bootstrap",
      image: BootstrapImage,
    },
    {
      skill_item: "Angular",
      image: reactImage,
    },
  ];

  const ProjectPhotos = [
    {
      photoLink:
        "https://abdalrhman80.github.io/My-Portfolio/assets/images/overview-Images/freshCart/freshCart1.png",
    },
    {
      photoLink:
        "https://abdalrhman80.github.io/My-Portfolio/assets/images/overview-Images/freshCart/freshCart2.png",
    },
    {
      photoLink:
        "https://abdalrhman80.github.io/My-Portfolio/assets/images/overview-Images/freshCart/freshCart3.png",
    },
    {
      photoLink:
        "https://abdalrhman80.github.io/My-Portfolio/assets/images/overview-Images/freshCart/freshCart4.png",
    },
    {
      photoLink:
        "https://abdalrhman80.github.io/My-Portfolio/assets/images/overview-Images/freshCart/freshCart5.png",
    },
    {
      photoLink:
        "https://abdalrhman80.github.io/My-Portfolio/assets/images/overview-Images/freshCart/freshCart6.png",
    },
    {
      photoLink:
        "https://abdalrhman80.github.io/My-Portfolio/assets/images/overview-Images/freshCart/freshCart7.png",
    },
  ];
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
                {skills.map((skill, index) => (
                  <a key={index} href="#" className="technology">
                    <div className="technology-info">
                      <img
                        src={skill.image}
                        alt=""
                        className="technology-image"
                      />
                      <span className="technology-name">
                        {skill.skill_item}
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
              {ProjectPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="project-image col-lg-4 col-md-6 mb-3"
                >
                  <div className="overview">
                    <img src={photo.photoLink} alt="" />
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

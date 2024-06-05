import { FaDownload, FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import SliderImage from "../Slider/SliderImage"; 
import { Link } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";


export default function Hero() {

  const { title, heroSliders } = useAppContext();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="my-name">
              <h1>X1 Team</h1>
            </div>
            <div className="my-prief">
              <h2>
                {title}
              </h2>
            </div>
            <div className="my-links mt-3">
              <a href="www.github.com/Ahmad-mh1999">
                <FaGithub />
              </a>
              <a href="www.linkedin.com/in/ahmed-mohammed-44a71a288">
                <FaLinkedin />
              </a>
              <a href="www.facebook.com/profile.php?id=100008629661043&mibextid=ZbWKwL">
                <FaFacebookSquare />
              </a>
              <a href="ahmedmhmad021@gmail.com">
                <MdAlternateEmail />
              </a>
              <a href="">
                <FaWhatsappSquare />
              </a>
            </div>
            <Link to='http://127.0.0.1:8000/api/download-cv' className="btn rounded-3 download-bottom" >
              <span>Download CV</span>
              <FaDownload />
            </Link>
          </div>
          <div className="col-lg-4 mt-3">
            <SliderImage heroSliders={heroSliders} />
          </div>
        </div>
      </div>
    </>
  );
}

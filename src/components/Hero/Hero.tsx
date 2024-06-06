import { FaDownload, FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import SliderImage from "../Slider/SliderImage";
import { Link } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";
import LeftAnimation from "../animation/LeftAnimation";
import ScaleAnimation from "../animation/ScaleAnimation";

export default function Hero() {
  const { title, heroSliders } = useAppContext();
  var delay: number = 0;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="my-name">
              <LeftAnimation delayValue={(delay = delay + 0.4)}>
                <h1>X1 Team</h1>
              </LeftAnimation>
            </div>
            <div className="my-prief">
              <LeftAnimation delayValue={(delay = delay + 0.4)}>
                <h2>{title}</h2>
              </LeftAnimation>
            </div>
            <LeftAnimation delayValue={(delay = delay + 0.4)}>
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
            </LeftAnimation>
            <LeftAnimation delayValue={(delay = delay + 0.4)}>
              <div className="btn-download-container">
                <Link
                  to="http://127.0.0.1:8000/api/download-cv"
                  className="btn rounded-3 download-bottom"
                >
                  <span>Download CV</span>
                  <FaDownload />
                </Link>
              </div>
            </LeftAnimation>
          </div>
          <div className="col-lg-4 mt-3">
            <ScaleAnimation delayValue={(delay = delay + 0.5)}>
              <SliderImage heroSliders={heroSliders} />
            </ScaleAnimation>
          </div>
        </div>
      </div>
    </>
  );
}

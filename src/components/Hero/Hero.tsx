import { FaDownload, FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import SliderImage from "../Slider/SliderImage";
import { useEffect, useState } from "react";
import axios from "axios";
import { THeroDate, THeroSlider } from "../../types/type";

// type THeroSlider = {
//   id: number;
//   photo_slide: string;
//   photo_title: string;
// }

// type THeroDate = {
//   title: string;
//   my_cv: string;
//   hero_sliders: THeroSlider[];
// }

export default function Hero() {

  const [title, setTitle] = useState('');
  const [heroSliders, setHeroSliders] = useState<THeroSlider[]>([]);

  useEffect(() => {
    axios.get<THeroDate>('http://127.0.0.1:8000/api/hero', {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => {
        const data = response.data.data;
        setTitle(data.title);
        setHeroSliders(data.hero_sliders);
      })
      .then(response => { console.log(response) })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="my-name">
              <h1>Ahmed Mohammed</h1>
            </div>
            <div className="my-prief">
              <h2>
                {title}
              </h2>
            </div>
            <div className="my-links mt-3">
              <a href="">
                <FaGithub />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
              <a href="">
                <FaFacebookSquare />
              </a>
              <a href="">
                <MdAlternateEmail />
              </a>
              <a href="">
                <FaWhatsappSquare />
              </a>
            </div>
            <a href='http://127.0.0.1:8000/api/download-cv' className="btn rounded-3 download-bottom" >
              <span>Download CV</span>
              <FaDownload />
            </a>
          </div>
          <div className="col-lg-4 mt-3">
            <SliderImage heroSliders={heroSliders} />
          </div>
        </div>
      </div>
    </>
  );
}

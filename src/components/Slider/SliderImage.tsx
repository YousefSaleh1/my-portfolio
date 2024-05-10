import './SliderImage.css'
import Slider from "react-slick";
import bootstrap from './../../assets/bootstrap.svg';
import html from './../../assets/html.svg';
import css from './../../assets/css.svg';
import git from './../../assets/git.svg';
import js from './../../assets/js.svg';
import typescript from './../../assets/typescript.svg';
import react from './../../assets/react.svg';
import php from "./../../assets/php-1.svg";
import redux from "./../../assets/redux.svg";
import laravel from "./../../assets/laravel-2.svg";
import mysql from "./../../assets/mysql-1.svg";
function SliderImage() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000
    
  };

  return (
    <div>
      <div className="slider" style={{ width: '300px', height: '300px' }}>
        <Slider {...settings}>
        <div className='slider-img'  >
          <img src={html} alt="html" />
          <p className='skill-name'>HTML</p>
        </div>
        <div className='slider-img'>
          <img src={css} alt="css" />
          <p className='skill-name'>Css</p>
        </div>
        <div className='slider-img'>
          <img src={js} alt="javascript" />
          <p className='skill-name'>JavaScript</p>
        </div>
        <div className='slider-img'>
          <img src={typescript} alt="typescript logo" />
          <p className='skill-name'>TypeScript</p>
        </div >
        <div className='slider-img'>
          <img src={react} alt="react logo" />
          <p className='skill-name'>React</p>
        </div>
        <div className='slider-img'>
          <img src={bootstrap} alt="bootstrap logo" />
          <p className='skill-name'>Bootstrap</p>
        </div>
        <div className='slider-img'>
          <img src={redux} alt="redux logo" />
          <p className='skill-name'>Redux</p>
        </div>
        <div className='slider-img'>
          <img src={php} alt="php logo" />
          <p className='skill-name'>PHP</p>
        </div>
        <div className='slider-img'>
          <img src={laravel} alt="laravel logo" />
          <p className='skill-name'>Laravel</p>
        </div>
        <div className='slider-img'>
          <img src={mysql} alt="mysql logo" />
          <p className='skill-name'>MySQL</p>
        </div>
      </Slider>
    </div>
    </div>
  )
}

export default SliderImage
import './SliderImage.css'
import Slider from "react-slick";
import bootstrap from './../../assets/bootstrap.svg';
import html from './../../assets/html.svg';
import css from './../../assets/css.svg';
import git from './../../assets/git.svg';
import js from './../../assets/js.svg';
import typescript from './../../assets/typescript.svg';
import react from './../../assets/react.svg';

function SliderImage() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
    
  };

  return (
    <div>
      <div className="slider" style={{ width: '300px', height: '300px' }}>
        <Slider {...settings}>
        <div className='slider-img'  >
          <img src={html} alt="" />
        </div>
        <div className='slider-img'>
          <img src={css} alt="" />
        </div>
        <div className='slider-img'>
          <img src={js} alt="" />
        </div>
        <div className='slider-img'>
          <img src={typescript} alt="" />
        </div>
        <div className='slider-img'>
          <img src={react} alt="" />
        </div>
        <div className='slider-img'>
          <img src={bootstrap} alt="" />
        </div>
        <div className='slider-img'>
          <img src={git} alt="" />
        </div>
      </Slider>
    </div>
    </div>
  )
}

export default SliderImage
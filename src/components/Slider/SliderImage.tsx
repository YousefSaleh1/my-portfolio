import { THeroSlider } from '../../types/type';
import './SliderImage.css'
import Slider from "react-slick";

function SliderImage({ heroSliders }: { heroSliders: THeroSlider[] }) {

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
          {heroSliders?.map((heroSlider) => (
            <div key={heroSlider.id} className='slider-img'  >
              <img src={heroSlider.photo_slide} alt={heroSlider.photo_title} loading="lazy"/>
              <p className='skill-name'>{heroSlider.photo_title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default SliderImage
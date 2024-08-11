import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container max-w-screen-lg mx-auto p-4">
      <Slider {...settings}>
        <div className="p-2">
          <img 
            src="/as" 
            alt="Image 1" 
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="p-2">
          <img 
            src="/as" 
            alt="Image 2" 
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="p-2">
          <img 
            src="/as" 
            alt="Image 3" 
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="p-2">
          <img 
            src="/as" 
            alt="Image 4" 
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="p-2">
          <img 
            src="/as" 
            alt="Image 5" 
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="p-2">
          <img 
            src="/as
            alt="Image 6" 
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="p-2">
          <img 
            src="/as" 
            alt="Image 7" 
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="p-2">
          <img 
            src="/as" 
            alt="Image 8" 
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;

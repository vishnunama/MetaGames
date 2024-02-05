import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000, // Set the speed for automatic sliding
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Set the autoplay interval (in milliseconds)
    pauseOnHover: false, // Set to false to continue sliding on hover
  };

  return (
    <Slider {...settings}>
      <div className="col-lg-6 ">
      <img className="cta-content-img" src="./assets/img/DSC_1129.jpg" alt />
    </div>
      <div className="col-lg-6 ">
      <img className="cta-content-img" src="./assets/img/fgh.jpg" alt />
    </div>
    <div className="col-lg-6 ">
      <img className="cta-content-img" src="./assets/img/DSC_1155.jpg" alt />
    </div>
      {/* <div>
        <img src="https://6valley-aster.6amtech.com/storage/app/public/banner/2023-06-11-6485a06bd15af.png" alt="Slide 3" />
      </div> */}
    </Slider>
  );
};

export default Carousel;

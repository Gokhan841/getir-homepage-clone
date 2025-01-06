import React from 'react';
import { useState, useEffect } from 'react';
import Banners from '../api/banners.json';
import Slider from "react-slick";
import Title from '../ui/Title';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Campaigns = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,


    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#f0f0f0" }}
        onClick={onClick}

      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#f0f0f0", color: "purple" }}
        onClick={onClick}
      />
    );
  }


  return (
    <div className='container mx-auto md:py-8'>
      <div className='hidden md:block'>
        <Title>Kampanyalar</Title>
      </div>

      <Slider {...settings}>
        {banners && banners.map((banner, index) => (
          <div key={index} className='sm:p-2'>
            <img className='block md:p-x-2 md:rounded-lg' src={banner.image} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Campaigns
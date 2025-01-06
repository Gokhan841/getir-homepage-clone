import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebookSquare } from "react-icons/fa";
import { useWindowSize } from 'react-use';

const HeroSection = () => {
  const { width } = useWindowSize();
  const [selectedCountry, setSelectedCountry] = useState('TR');
  const settings = {
    dots: false,
    infinite: true,
    speed: 500, // slaytın geçiş hizi
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,       // Otomatik kaydırmayı etkinleştir
    autoplaySpeed: 3000,  // Otomatik kaydırma hızı (milisaniye cinsinden, burada 3 saniye)
  };
  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+15'
  }


  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      {width > 768 && (
        <Slider {...settings}>
          <div>
            <img className='w-full h-[500px] object-cover' src='https://cdn.getir.com/getirweb-images/common/hero-posters/market-8.jpg' />
          </div>
          <div>
            <img className='w-full h-[500px] object-cover' src='https://cdn.getir.com/getirweb-images/common/hero-posters/market-1.jpg' />
          </div>
          <div>
            <img className='w-full h-[500px] object-cover' src='https://cdn.getir.com/getirweb-images/common/hero-posters/market-2.jpg' />
          </div>
        </Slider>
      )}
      <div className="md:container flex flex-row justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block">
          <img src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg' alt="Logo" />
          <h3 className='text-white font-semibold text-2xl xl:text-4xl mt-4'>
            Dakikalar içinde <br /> kapınızda
          </h3>
        </div>
        <div className=" w-full md:w-[400px] bg-gray-50 rounded-lg p-6 flex flex-col ">
          <h4 className='font-semibold text-center text-primary-brand-color mb-3 '>Giriş Yap veya Kayıt Ol</h4>
          <div className='grid gap-y-3'>
            <div className='flex gap-x-2'>
              <ReactFlagsSelect
                selected={selectedCountry}
                onSelect={(code) => setSelectedCountry(code)}
                countries={Object.keys(phones)} // Göstermek istediğim ülkeler
                showSelectedLabel={true} // Seçilen ülke kodunun yanında isim ya da kodu vs ne istiyosak görünsün.
                customLabels={phones} // bayrakların yanında ülke kodları da yazsın
                className='flagSelect'
              />
              <label className='flex-1 relative'>
                <input className='h-14 p-4 rounded-lg border-2 border-gray-200 w-full  hover:border-primary-brand-color  focus:border-primary-brand-color' />
              </label>
            </div>
            <button className='bg-brand-yellow h-12 w-full text-brand-color font-semibold text-sm flex items-center justify-center rounded-md hover:bg-brand-color hover:text-brand-yellow'>
              Telefon Numarası ile Devam et
            </button>
            <hr className='h-[1px] bg-gray-200 my-2'></hr>
            <button className='bg-blue-700 bg-opacity-10 text-blue-700 h-12 w-full font-semibold text-sm flex items-center justify-center rounded-md hover:bg-blue-700 hover:text-white'>
              <FaFacebookSquare size={18}></FaFacebookSquare> FaceBook ile Devam et
            </button>
          </div>
        </div>
      </div>

    </div >
  )
}

export default HeroSection

//Gradient kısmına biraz çalış
// tıkladığında inputtaki yazı üste kaysın kalsın altına  girelim numarayı
// son 5 dakikayı izle
// giriş yap ve altındaki kısım arası boşluk artsın




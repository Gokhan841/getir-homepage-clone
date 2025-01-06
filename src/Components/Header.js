import React from 'react';
import { CiGlobe } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";

const Header = () => {
  return (
    <div className='bg-brand-color' >
      <div className='container mx-auto h:16 md:h-11 flex items-center justify-center md:justify-between'>
        <img src="https://getir.com/assets/images/logo.svg" alt='L O G O' />

        <nav className='hidden md:flex gap-x-8 text-sm font-semibold'>
          <a href='#' className='text-white transition-all text-opacity-10 hover:text-opacity-100 flex items-center gap-x-2'>
            <CiGlobe size={20}></CiGlobe>
            Türkçe (TR)</a>
          <a href='#' className='text-white transition-all text-opacity-10 hover:text-opacity-100 flex items-center gap-x-2'>
            <FaRegUser size={20}></FaRegUser>
            Giriş Yap</a>
          <a href='#' className='text-white transition-all text-opacity-10 hover:text-opacity-100 flex items-center gap-x-2'>
            <FiUserPlus size={20}></FiUserPlus>
            Kayıt ol</a>
        </nav>
      </div>
    </div>
  )
}

export default Header

//<a href='#' className='text-white transition-all text-opacity-10 hover:text-opacity-100'>Türkçe (TR)</a> opacity çalışmıyo
// uygulamaya open-sans fontunu ekle
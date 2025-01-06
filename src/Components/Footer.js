import React from 'react';
import Menu from '../ui/Menu';
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";


const Footer = () => {
    const menus = [
        {
            title: 'Getir\'i Keşfedin',
            items: [
                {
                    title: 'Hakkımızda'
                },
                {
                    title: 'Kariyer'
                },
                {
                    title: 'İletişim'
                },
                {
                    title: 'COVID-19 Duyuru'
                },
                {
                    title: 'Sosyal Sorumluluk Projeleri'
                }
            ]
        },
        {
            title: 'Yardıma mı ihtiyacınız var?',
            items: [
                {
                    title: 'Hakkımızda'
                },
                {
                    title: 'Kariyer'
                },
                {
                    title: 'İletişim'
                },
                {
                    title: 'COVID-19 Duyuru'
                },
                {
                    title: 'Sosyal Sorumluluk Projeleri'
                }
            ]
        },
        {
            title: 'İş Ortağımız Olun',
            items: [
                {
                    title: 'Hakkımızda'
                },
                {
                    title: 'Kariyer'
                },
                {
                    title: 'İletişim'
                },
                {
                    title: 'COVID-19 Duyuru'
                },
                {
                    title: 'Sosyal Sorumluluk Projeleri'
                }
            ]
        }
    ];
   
    return (
        <div className='bg-white mt-8'>
            <div className='container mx-auto px-5 md:px:0'>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-y-6'>
                    <section >
                        <nav className='grid gap-y-4'>
                            <h6 className='text-brand-color text-lg'>Getir'i İndirin</h6>
                            <a className='transition-all hover:scale-105'>
                                <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'></img>
                            </a>
                            <a className='transition-all hover:scale-105'>
                                <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'></img>
                            </a>
                            <a className='transition-all hover:scale-105'>
                                <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'></img>
                            </a>
                        </nav>
                    </section>
                    {menus.map((menu, index) => (
                        <Menu key={index} menu={menu}></Menu>
                    ))}

                </div>
                <div className='border-t border-gray-300 flex justify-between items-center mt-6 p-5'>
                    <div className='flex gap-x-3'>
                        <span>2024 Getir</span>
                        <a href='#' className='text-brand-color hover:underline'>Bilgi Toplumu Hizmetleri</a>
                    </div>
                    <nav className='flex gap-x-3'>
                        <a href='#' className="w-18 h-18 text-gray-500 hover:text-brand-color items-center justify-center">
                            <FaFacebook size={22}></FaFacebook>
                        </a>
                        <a href='#' className="w-18 h-18 text-gray-500 hover:text-brand-color items-center justify-center">
                            <FaInstagramSquare size={22}></FaInstagramSquare>
                        </a>
                        <a href='#' className="w-18 h-18 text-gray-500 hover:text-brand-color items-center justify-center">
                            <FaTwitterSquare size={22}></FaTwitterSquare>
                        </a>
                        <a href='#' className="w-18 h-18 text-gray-500 hover:text-brand-color items-center justify-center flex gap-x-1">
                            <CiGlobe size={22}></CiGlobe>
                            <span className='font-semibold'>TR</span>
                        </a>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default Footer
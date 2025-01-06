import React from 'react'

const MobileApp = () => {
  return (
    <div className='bg-purple-image bg bg-primary-brand-color  mt-7 rounded-lg text-white items-center flex flex-col md:flex-row justify-between text-center md:text-left'>
      <div className='flex flex-col gap-y-3 p-10'>
        <h3 className='text-2xl font-bold'>Getir'i indir!</h3>
        <p className='font-semibold'>İstediğiniz ürünleri dakikalar içinde kapınıza <br></br> getirelim.</p>
        <nav className='mt-5 gap-x-3 flex flex-nowrap md:flex-wrap justify-center gap-2'>
          <a className='transition-all hover:scale-105'>
            <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg' className='md:h-8 lg:h-auto'></img>
          </a>
          <a className='transition-all hover:scale-105'>
            <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg' className='md:h-8 lg:h-auto'></img>
          </a>
          <a className='transition-all hover:scale-105'>
            <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg ' className='md:h-8 lg:h-auto'></img>
          </a>
        </nav>
      </div>
      <div className='hidden md:block self-end' >
        <img src='https://cdn.getir.com/getirweb-images/common/landing/marketPhoneLanding.png'></img>
      </div>

    </div>
  )
}

export default MobileApp
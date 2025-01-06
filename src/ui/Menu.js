import React, { useState } from 'react';

const Menu = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false); // Listeyi açıp kapamak için durum

  // Listeyi açma/kapatma işlevi
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <nav className='grid gap-y-4'>
        <h6 
          className='text-brand-color text-lg cursor-pointer md:hover:text-brand-color' // Sadece md ve daha büyük ekranlarda hover etkisi
          onClick={toggleMenu}
        >
          {menu.title}
        </h6>

        {/* 768px ve daha küçük ekranlarda listeyi açıp kapama */}
        <nav className='md:hidden'>
          {isOpen && (
            <ul className='grid gap-y-2'>
              {menu.items.map((item, index) => (
                <li key={index}>
                  <a href='#' className='text-sm hover:text-brand-color'>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>

        {/* 768px ve daha büyük ekranlarda liste her zaman görünür */}
        <nav className='hidden md:block'>
          <ul className='grid gap-y-2'>
            {menu.items.map((item, index) => (
              <li key={index}>
                <a href='#' className='text-sm hover:text-brand-color'>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </section>
  );
};

export default Menu;

import React from 'react';
import { useEffect, useState } from 'react';
import categoriesData from "../api/categories.json";
import Category from './Category';
import Title from '../ui/Title';
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // JSON verilerini state'e atıyoruz
    setCategories(categoriesData);
  }, []);

  return (
    <div className='bg-white py-4'>
      <div className='container mx-auto'>
        <Title>Kategoriler</Title>
        <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12' >
          { categories && categories.map((category,index)=>(
            <Category key={index} category={category}></Category>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories
//Eğer json dosyası src/api klasörü içinde ise, verileri fetch veya axios ile doğrudan dosya yolunu belirterek çekemezsiniz.
//Bunun sebebi, React uygulamalarında src klasörü içinde yer alan dosyaların sadece build işleminden sonra kullanılabilir hale gelmesidir. Bu durumda, JSON verilerini bir modül gibi içe aktarmak gerek.

//tekli kalınca sağ ve soldaki slider değiştirme okları kaybolsun
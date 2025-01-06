import React from 'react'

const Category = ({category}) => {
  return (
    <div className='p-4 group flex flex-col items-center text-center gap-y-2 transition hover:bg-purple-50'>
         <img src={category.image} className='rounded-sm h-12 w-12 border-gray-800 '/>
         <span className='text-sm font-semibold whitespace-nowrap text-gray-700 group-hover:text-brand-color'>{category.title}</span>
         
    </div>
  )
}

export default Category
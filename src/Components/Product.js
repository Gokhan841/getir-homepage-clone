import React from 'react';
import { FaPlus } from "react-icons/fa6";

const Product = ({product}) => {
  return (
    <div className='font-semibold text-sm flex flex-col items-center text-center gap-y-1 relative'>

        <button>
            <FaPlus className='absolute top-3 right-3 w-5 h-5 items-center justify-center border border-gray-300 text-brand-color rounded-lg hover:text-white hover:bg-brand-color'></FaPlus>
        </button>
        <img src={product.image} className='p-3'></img>
        <div className='text-brand-color'>{product.price} TL</div>
        <div className='text-gray-800'>{product.title}</div>       
        <div className='text-gray-500'>{product.alt}</div>
    </div>
  )
}

export default Product
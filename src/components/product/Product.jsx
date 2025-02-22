import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Plus, EyeIcon, ShoppingBag, View } from 'lucide-react';
import { CartContext } from '../cartFolder/CartFolder';

const Product = ({product}) => {
 

 const {id, image, category, title, price} = product;
 const {addToCart} = useContext(CartContext);
  return (
    <div className='px-4 '>
     <div className=" border-slate-300  mb-4 relative  group overflow-hidden transition bg-gradient-to-r from-neutral-500 to-purple-500  p-4  h-[450px]">

      <div className='w-full h-full flex flex-col justify-center items-center mb-5'>
       <div className='w-[200px] mx-auto flex  justify-center items-center'>
       <img className=' group-hover:scale-110 transition duration-300 bg-transparent w-full h-60 px-3' src={image} alt="" />
       </div>

       <div className=' z-50  mt-20'>
      <div className='text-sm capitalize text-gray-200'>{category}</div>
      <Link to={`/product/${id}`}>
      <h2 className='font-semibold mb-1 text-white'>{title}</h2>
      </Link>
      <div className='font-semibold text-red-400'>$ {price}</div>
     </div>
      </div>

      <div className='absolute top-6 -left-11 group-hover:left-3  p-2 flex flex-col justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-1000 '>
       <button onClick={() => addToCart(product, id)}>
        <div className='flex justify-center items-center text-white w-12 h-12 bg-green-700'>
         <ShoppingBag  className='text-3xl'/>

        </div>
       </button>
       <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center  drop-shadow-xl'><View /></Link>
      </div>

      
     </div>

     
    </div>
  )
}

export default Product
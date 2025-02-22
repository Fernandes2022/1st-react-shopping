import { ShoppingCartIcon } from 'lucide-react'
import React, {useContext} from 'react';
import { CartContext } from '../cartFolder/CartFolder';
import { Link } from 'react-router-dom'

const Header = () => {

  const {amount} = useContext(CartContext);

  return (
   <div className='flex justify-between p-5 bg-gradient-to-b  fixed right-0 left-0 top-0 z-50 mb-20 from-neutral-500 to-purple-500'>
   <div>
    <a href="/" className='tracking-wider text-xl  bg-gradient-to-r from-yellow-500 to-gray-100 bg-clip-text text-transparent '>SHOP<span className='text-sm'>CART</span></a>
   </div>  
   <div>
   <Link to={'/cartpage'} >
    
    <div className=''>
      <ShoppingCartIcon className='text-white'/>
    </div>
    <div className="absolute rounded-full right-6 top-1 text-white ">
      {amount}
    </div>
   </Link> 
   </div>
 </div>
  )
}

export default Header
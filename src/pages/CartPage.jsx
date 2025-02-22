import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/cartFolder/CartFolder';
import {  Minus, Plus, Trash } from 'lucide-react';
import { X } from 'lucide-react';


const CartPage = () => {
  const {cart, removeFromCart, clearCart, increaseCart, reduceCart, total} = useContext(CartContext);
  
  console.log(cart);
  return (
    <div>
      <section className='mb-2'>
        <div className="mt-32">
          <h1 className="text-3xl text-center font-semibold">
            Your cart items
          </h1>
        </div>
        <div className="container">
          <div className='flex flex-col mb-8 p-8 '>
            {cart.map((item) => (
               <div key={item.id} className='mb-6 mx-auto grid grid-cols-3 items-center sm:max-w-3xl border border-t-slate-300 p-4 bg-gradient-to-t from-neutral-500 to-purple-500'>
                
                <div>
                <Link to={`/product/${item.id}`}>
                <img className='w-3/4 h-3/4' src={item.image} alt="" />
                </Link>
                </div>

                <div className='flex flex-col gap-2'>
                
                <Link to={`/product/${item.id}`} className='hover:text-yellow-400 text-white'>
                <h1>{item.title}</h1>
                </Link>

                <div className='flex gap-1'>

                <div className="flex items-center p-1 gap-1 border border-gray-600 text-white">
                  <button onClick={() => reduceCart(item.id)}>
                    <Minus className='w-3 '/>                
                  </button>
                  <p>{item.amount}</p>
                  <button onClick={() => increaseCart(item.id)}>
                    <Plus className='w-3'/>
                  </button>
                </div>
                     
                <p className='text-red-400'>${(parseFloat(item.price)).toFixed(2)}</p>
                </div>
                </div>
                
                

                <div className='flex flex-col items-end gap-2'>
                  <button onClick={() => removeFromCart(item.id)}>
                    <X  className='w-6 text-red-400'/>
                  </button>
                  <p className='text-gray-200'>$ {parseFloat((item.price * item.amount).toFixed(2))}</p>
                </div>
               </div>
            ))}
          </div>
        </div>

        <div className=" flex bg-gradient-to-r from-neutral-500 to-purple-500 text-white justify-between p-4 ">
          <div className="flex gap-x-3 items-center ">
            <span className='font-semibold text-lg'>Total:</span>
            <span>$ {parseFloat((total).toFixed(2))}</span>
          </div>

          <div>
            <button onClick={() => clearCart()} className='bg-red-700 p-1 text-red-500 rounded-sm'>
              <Trash />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CartPage
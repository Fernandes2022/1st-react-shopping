import React, { useContext } from 'react'
import { ProductContext } from '../components/productContext/ProductContext'
import Product from '../components/product/Product'
import shopimg from '../assets/shop-img.jpg'

const Home = () => {

  const { products } = useContext(ProductContext);
  
  const filteredProducts = products.filter(item => {
    return (item.category === "men's clothing" || item.category === "women's clothing"

    );
  })
  
  return (
    
    <div>
      <div className='relative'>
        <div className='mt-14 '>
          <img className='h-80 w-full sm:h-full' src={shopimg} alt="" />
        </div>
      <div className="absolute z-50 top-20 left-16 sm:top-36 sm:left-36  justify-center flex flex-col text-blue-600 md:text-4xl">
        <div className='flex gap-x-2 items-center '>
          <div className='bg-blue-600 h-1 w-10'></div> <h1 className="font-semibold text-xl">NEW WEARS</h1>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl z-50 font-bold tracking-wider text-yellow-500">
            GOLDEN CLASSY SALES
          </h1>
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-wide">
            WOMEN
          </h1>
        </div>

        <div>
        <a href="#products" className='font-semibold underline'>
            DISCOVER MORE...
          </a>
        </div>
      </div>
      </div>
      <section  className='py-12 mt-8'>
      <div className="container mx-auto scroll-mt-20" id='products'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  gap-2 max-w-sm mx-auto sm:max-w-none md:mx-0'>
            {filteredProducts.map(product => {
                return <Product product={product} key={product.id} />
            })}
            </div>
          </div>
      </section>

        
    </div>  
  )
};

export default Home
import React, { useContext } from 'react'
import { ProductContext } from '../components/productContext/ProductContext'
import Product from '../components/product/Product'


const Home = () => {

  const { products } = useContext(ProductContext);
  
  const filteredProducts = products.filter(item => {
    return (item.category === "men's clothing" || item.category === "women's clothing"

    );
  })
  
  return (
    
    <div>
      <div>
      <div className="h-[75vh] bg-green-200 flex flex-col space-y-2 pt-36 pl-16 sm:pl-[13rem] md:pl-[18rem] lg:pl-[23rem]">
        <div className='flex gap-x-2 items-center '>
          <div className='bg-black h-1 w-10'></div> <h1 className="font-semibold text-xl">NEW TREND</h1>
        </div>

        <div>
          <h1 className="text-3xl tracking-wider">
            AUTUMN SALE STYLISH
          </h1>
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-wide">
            WOMENS
          </h1>
        </div>

        <div>
          <h1 className='font-semibold underline'>
            DISCOVER MORE
          </h1>
        </div>
      </div>
      </div>
      <section  className='py-16 mt-8'>
      <div className="container mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  gap-[30px] max-w-sm mx-auto sm:max-w-none md:mx-0'>
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
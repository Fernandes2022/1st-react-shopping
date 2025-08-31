import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../components/productContext/ProductContext';
import { CartContext } from '../components/cartFolder/CartFolder';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return <section className="flex h-screen items-center justify-center">Loading.....</section>;
  }

  // const {title, price, description, image} = product;
  return (
    <div className="container pb-[20rem]">
      <section className="mt-28">
        <div className="my-12 text-center">
          <h1 className="text-3xl font-semibold">Product Details</h1>
        </div>

        <div className="mx-auto mt-24 flex items-center justify-center gap-3 px-4">
          <div className="h-36 w-[500px]">
            <img src={product.image} alt="" />
          </div>

          <div className="flex flex-col gap-y-1">
            <h1 className="font-semibold">{product.title}</h1>

            <p className="text-sm">{product.description}</p>

            <p className="text-sm text-red-400">$ {product.price}</p>

            <button
              onClick={() => addToCart(product, product.id)}
              className="w-28 bg-black p-2 font-semibold text-white"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;

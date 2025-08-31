import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Plus, EyeIcon, ShoppingBag, View } from 'lucide-react';
import { CartContext } from '../cartFolder/CartFolder';

const Product = ({ product }) => {
  const { id, image, category, title, price } = product;
  const { addToCart } = useContext(CartContext);
  return (
    <div className="px-4">
      <div className="group relative mb-4 h-[450px] overflow-hidden border-slate-300 bg-gradient-to-r from-neutral-500 to-purple-500 p-4 transition">
        <div className="mb-5 flex h-full w-full flex-col items-center justify-center">
          <div className="mx-auto flex w-[200px] items-center justify-center">
            <img
              className="h-60 w-full bg-transparent px-3 transition duration-300 group-hover:scale-110"
              src={image}
              alt=""
            />
          </div>

          <div className="z-50 mt-20">
            <div className="text-sm capitalize text-gray-200">{category}</div>
            <Link to={`/product/${id}`}>
              <h2 className="mb-1 font-semibold text-white">{title}</h2>
            </Link>
            <div className="font-semibold text-red-400">$ {price}</div>
          </div>
        </div>

        <div className="absolute -left-11 top-6 flex flex-col justify-center gap-y-2 p-2 opacity-0 transition-all duration-1000 group-hover:left-3 group-hover:opacity-100">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex h-12 w-12 items-center justify-center bg-green-700 text-white">
              <ShoppingBag className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="flex h-12 w-12 items-center justify-center bg-white drop-shadow-xl"
          >
            <View />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;

import { useContext } from 'react';
import { ProductContext } from '../components/productContext/ProductContext';
import Product from '../components/product/Product';
import shopimg from '../assets/shop-img.jpg';

const Home = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return item.category === "men's clothing" || item.category === "women's clothing";
  });

  return (
    <div>
      <section className="relative mt-16">
        <img
          className="h-[24rem] w-full object-cover sm:h-[30rem]"
          src={shopimg}
          alt="Fashion collection hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
        <div className="absolute left-6 right-6 top-1/2 z-10 -translate-y-1/2 sm:left-16 sm:right-auto">
          <div className="flex items-center gap-x-2">
            <div className="h-1 w-10 bg-amber-300" />
            <h2 className="text-sm font-semibold tracking-widest text-amber-300">NEW ARRIVALS</h2>
          </div>
          <h1 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow sm:text-5xl">
            Elevate your wardrobe with timeless essentials
          </h1>
          <p className="mt-3 max-w-lg text-white/80 sm:mt-4">
            Discover curated picks from men&apos;s and women&apos;s collections. Quality, comfort, and style tailored for you.
          </p>
          <div className="mt-6">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-slate-900 shadow transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Shop the collection
            </a>
          </div>
        </div>
      </section>

      
      <section className="mt-12 py-12">
        <div className="container mx-auto scroll-mt-20 px-4 sm:px-6 lg:px-8" id="products">
          <div className="mb-6 flex items-end justify-between">
            <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">Featured Products</h3>
            <a href="#products" className="text-sm font-medium text-purple-700 hover:text-purple-800">
              View all
            </a>
          </div>
          <div className="mx-auto grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

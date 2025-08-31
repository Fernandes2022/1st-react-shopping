import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/cartFolder/CartFolder';
import { Minus, Plus, Trash } from 'lucide-react';
import { X } from 'lucide-react';

const CartPage = () => {
  const { cart, removeFromCart, clearCart, increaseCart, reduceCart, total } =
    useContext(CartContext);

  return (
    <div>
      <section className="mb-2">
        <div className="mt-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-3xl font-extrabold tracking-tight text-slate-900">
            Your Cart
          </h1>
          <p className="mt-2 text-center text-sm text-slate-600">
            Review your selections. Adjust quantities or remove items before checkout.
          </p>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 mt-6 flex flex-col gap-4">
            {cart.length === 0 && (
              <div className="mx-auto w-full max-w-2xl rounded-lg border border-dashed border-slate-300 bg-white/70 p-8 text-center">
                <p className="text-slate-700">Your cart is empty.</p>
                <Link
                  to="/"
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                >
                  Continue shopping
                </Link>
              </div>
            )}

            {cart.map((item) => (
              <div
                key={item.id}
                className="mx-auto w-full max-w-4xl rounded-xl border border-white/10 bg-gradient-to-r from-slate-900/80 to-purple-800/80 p-4 text-white shadow backdrop-blur"
              >
                <div className="grid grid-cols-3 items-center gap-3 sm:gap-4">
                  <Link to={`/product/${item.id}`} className="flex items-center justify-center">
                    <img className="h-28 w-28 rounded-md object-contain bg-white/10 p-2" src={item.image} alt={item.title} />
                  </Link>

                  <div className="flex flex-col gap-2">
                    <Link to={`/product/${item.id}`} className="line-clamp-2 text-sm font-medium text-white/90 hover:text-white">
                      {item.title}
                    </Link>

                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-2 py-1">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => reduceCart(item.id)}
                          className="rounded-full p-1 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-6 text-center text-sm font-semibold">{item.amount}</span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => increaseCart(item.id)}
                          className="rounded-full p-1 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <p className="text-sm text-rose-300">${parseFloat(item.price).toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      aria-label="Remove item"
                      onClick={() => removeFromCart(item.id)}
                      className="rounded-full p-1 text-rose-300 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    >
                      <X className="h-5 w-5" />
                    </button>
                    <p className="text-sm text-white/90">
                      ${' '}{parseFloat((item.price * item.amount).toFixed(2))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sticky bottom-0 z-40 border-t border-white/10 bg-gradient-to-r from-slate-900/80 to-purple-800/80 p-4 text-white backdrop-blur">
          <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-x-3">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-xl font-extrabold">${' '}{parseFloat(total.toFixed(2))}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => clearCart()}
                className="inline-flex items-center justify-center rounded-full border border-rose-300/50 bg-rose-600/90 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                <Trash className="mr-2 h-4 w-4" /> Clear cart
              </button>
              <button
                disabled={cart.length === 0}
                className="inline-flex items-center justify-center rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;

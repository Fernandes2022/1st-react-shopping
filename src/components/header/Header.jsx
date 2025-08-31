import { ShoppingCartIcon } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '../cartFolder/CartFolder';
import { Link } from 'react-router-dom';

const Header = () => {
  const { amount } = useContext(CartContext);

  return (
    <header
      role="banner"
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-gradient-to-r from-slate-900/80 to-purple-800/80 backdrop-blur shadow-sm"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          <span className="text-xl font-extrabold uppercase tracking-widest bg-gradient-to-r from-amber-300 via-rose-300 to-indigo-300 bg-clip-text text-transparent transition group-hover:opacity-90">
            Shop
          </span>
          <span className="text-xl font-extrabold uppercase tracking-widest text-white/90 transition group-hover:text-white">
            Cart
          </span>
        </Link>

        <Link
          to="/cartpage"
          aria-label="Open cart"
          className="relative inline-flex items-center justify-center rounded-full p-2 text-white/90 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
          {amount > 0 && (
            <span className="absolute -right-1 -top-1 inline-flex min-w-[1.25rem] items-center justify-center rounded-full bg-rose-500 px-1.5 py-0.5 text-[10px] font-bold leading-none text-white shadow ring-1 ring-white/40">
              {amount}
            </span>
          )}
          <span className="sr-only" aria-live="polite">
            {amount > 0 ? `${amount} items in cart` : 'Cart is empty'}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;

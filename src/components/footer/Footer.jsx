import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="mt-24 border-t border-white/10 bg-gradient-to-r from-slate-900/80 to-purple-800/80 backdrop-blur"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 py-6 text-center text-white/90 sm:flex-row sm:text-left">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <span className="text-lg font-extrabold uppercase tracking-widest bg-gradient-to-r from-amber-300 via-rose-300 to-indigo-300 bg-clip-text text-transparent transition group-hover:opacity-90">
              Shop
            </span>
            <span className="text-lg font-extrabold uppercase tracking-widest text-white/90 transition group-hover:text-white">
              Cart
            </span>
          </Link>

          <p className="text-sm text-white/70">© 2024 ShopCart. All rights reserved.</p>

          <a
            href="https://twitter.com/Timi_tech_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white/80 underline-offset-4 hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Designed by Timi-tech<span className="sr-only"> on X</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

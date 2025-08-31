import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductProvider from './components/productContext/ProductContext.jsx';
import CartProvider from './components/cartFolder/CartFolder.jsx';

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <ProductProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ProductProvider>
  </CartProvider>,
);

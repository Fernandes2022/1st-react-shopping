import React from 'react'
import useEffect from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import ProductDetails from './pages/ProductDetails'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const App = () => {
  React.useEffect(() => {
    AOS.init(
        {
          offset: 100,
          duration: 500,
          easing: "ease-in-sine",
          delay: 100, 
        }
    );
    AOS.refresh();
  });

  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cartpage' element={<CartPage />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
    <Footer />
      
    </BrowserRouter>
    </>
  )
}

export default App
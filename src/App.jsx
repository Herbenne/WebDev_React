import React, { useState } from 'react';
import Navbar from './sections/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import Categories from './sections/Categories/Categories';
import Shop from './sections/Shop/Shop';
import { CartProvider } from './sections/Shop/CartContext';
import Deal from './sections/Deal/Deal';
import Testimonial from './sections/Testimonial/Testimonial';
import Blog from './sections/Blog/Blog';
import Footer from './sections/Footer/Footer';
import Cart from './sections/Shop/Cart';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <main className='app'>
      <CartProvider>
        <Navbar toggleCart={toggleCart} />
        <Deal />
        <Hero />
        <Categories />
        <Shop />
        {isCartOpen && <Cart closeCart={() => setIsCartOpen(false)} />}
        <Footer />
      </CartProvider>
    </main>
  );
};

export default App;

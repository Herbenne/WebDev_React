import React, { useState, useContext } from 'react';
import './Shop.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from '../../constants/swiper.json';
import { RiEyeLine, RiHeartLine, RiShoppingCartLine, RiStarFill, RiStarLine } from 'react-icons/ri';
import { swiperSettings } from '../../constants';
import Cart from './Cart'; 
import { CartContext } from './CartContext'; 

const Shop = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { addToCart } = useContext(CartContext); 

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handleAddToCart = (item) => {
    
    const quantity = 1; 
    addToCart(item, quantity);
  };

  return (
    <section id="shop">
      <div className="shop-container container">
        <div className="title">
          <h2>Best Sellers</h2>
        </div>
        <Swiper {...swiperSettings}>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="item-card">
                <img src={card.imgURL} alt={card.name} />
                <h4>{card.name}</h4>
                <p>{card.category}</p>
                <div className="rating">
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarLine />
                </div>
                <div className="price">
                  <span>${card.price}</span>
                  <span className="old-price">{card.old}</span>
                </div>
                <div className="card-buttons">
                  <button className="btn" onClick={() => handleAddToCart(card)}>Add to cart</button>
                  <button className="btn">View details</button>
                </div>
                <div className="card-icons">
                  <RiHeartLine />
                  <RiEyeLine />
                  <RiShoppingCartLine onClick={toggleCart} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {isCartVisible && <Cart closeCart={toggleCart} />}
    </section>
  );
};

export default Shop;

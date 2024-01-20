import React, { useState, useContext } from 'react';
import './Navbar.css';
import { RiCloseFill, RiHeartFill, RiMenu3Fill, RiSearchLine, RiShoppingCartFill, RiUserFill } from 'react-icons/ri';
import Cart from '../Shop/Cart';
import { CartContext } from '../Shop/CartContext';

const Navbar = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Access the cart from CartContext
    const { cart } = useContext(CartContext);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    // Calculate the total number of items in the cart
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <header>
            <nav>
                {/* For Desktop */}
                <div className="tn-container container">
                    <a href="/" className="logo">Weight Shop</a>
                    <div className="search-box">
                        <input type="search" name="search" id="" placeholder='Search For Equipments' />
                        <div className="search-icon"><RiSearchLine /></div>
                    </div>
                    <div className="tn-icons">
                        <a href="/profile"><RiUserFill /></a>
                        <a className='fav-icon' href="/favorites"><RiHeartFill /><span className='count'>0</span></a>
                        <div className='cart-icon' onClick={toggleCart}>
                            <RiShoppingCartFill />
                            <span className='count'>{cartItemCount}</span> {/* Display cart item count */}
                        </div>
                    </div>
                </div>
                <hr />
                <div className="bn-container container">
                    <ul className="navlist">
                        <li><a href="#home">home</a></li>
                        <li><a href="#categories">categories</a></li>
                        <li><a href="#shop">shop</a></li>
                        <li><a href="#deal">deal</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul>
                </div>
                {/* For Mobile */}
                <div className="nm-nav">
                    <div className="nm-container container">
                        <a href="/" className="logo">Weight Shop</a>
                        <ul className="nav-menu" style={{ transform: menuOpened ? "translate(0%)" : "" }}>
                            <li><a href="#home">home</a></li>
                            <li><a href="#categories">categories</a></li>
                            <li><a href="#shop">shop</a></li>
                            <li><a href="#deal">deal</a></li>
                            <li><a href="#testimonial">testimonial</a></li>
                            <li><a href="#blog">blog</a></li>
                            <li><a href="#contact">contact</a></li>
                        </ul>
                        <div className="menu-btn">
                            {!menuOpened ?
                                <RiMenu3Fill size={30} onClick={() => setMenuOpened(true)} /> :
                                <RiCloseFill size={30} onClick={() => setMenuOpened(false)} />
                            }
                        </div>
                    </div>
                </div>
            </nav>
            {isCartOpen && <Cart closeCart={() => setIsCartOpen(false)} />}
        </header>
    );
}

export default Navbar;

import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';

const Cart = ({ closeCart }) => {
    const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

    const handleCheckout = () => {
        // Confirmation before clearing the cart
        if (window.confirm('Are you sure you want to checkout?')) {
            clearCart();
            alert('Checkout successful!');
            closeCart(); // Optional: Close the cart modal on successful checkout
        }
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart-modal">
            <button className="close-cart" onClick={closeCart}>Close</button>
            {cart.length === 0 ? (
                <p className="cart-empty">Your cart is empty</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {cart.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.imgURL} alt={item.name} className="cart-item-image"/>
                                <div className="cart-item-details">
                                    <h4>{item.name}</h4>
                                    <p>${item.price}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="remove-item">Remove</button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <p>Total: ₱{getTotalPrice().toFixed(2)}</p>
                        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;

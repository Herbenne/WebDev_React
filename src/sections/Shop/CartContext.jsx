import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const addToCart = (item, quantity = 1) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        let newCart;
        if (existingItem) {
            newCart = cart.map(cartItem => 
                cartItem.id === item.id 
                    ? { ...cartItem, quantity: cartItem.quantity + quantity } 
                    : cartItem
            );
        } else {
            newCart = [...cart, { ...item, quantity }];
        }
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    const removeFromCart = (itemId) => {
        const newCart = cart.filter(item => item.id !== itemId);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    const updateQuantity = (itemId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(itemId);
        } else {
            const newCart = cart.map(item => 
                item.id === itemId ? { ...item, quantity } : item
            );
            setCart(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart));
        }
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => {
            return total + (parseFloat(item.price.replace('$', '')) * item.quantity);
        }, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getTotalPrice, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

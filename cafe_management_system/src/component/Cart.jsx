import React, { useState, useCallback } from 'react';
import './Cart.css';

const Cart = ({ cart, setCart }) => {

  
  const increaseQty = useCallback((id) => {
    setCart(cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item));
  }, [cart, setCart]);

  const decreaseQty = useCallback((id) => {
    setCart(cart.map(item => item.id === id ? {...item, qty: Math.max(item.qty - 1, 1)} : item));
  }, [cart, setCart]);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <ul>
        {cart.length > 0 ? cart.map((item) => (
          <li key={item.id}>
            {item.name} - Rs.{item.price} x {item.qty}
            <button onClick={() => increaseQty(item.id)}>+</button>
            <button onClick={() => decreaseQty(item.id)} disabled={item.qty === 1}>-</button>
          </li>
        )) : <p>Your cart is empty.</p>}
      </ul>
      <p>Total: Rs.{totalPrice}</p>
    </div>
  );
}

export default Cart;

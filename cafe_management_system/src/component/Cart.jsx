import React from 'react';
import './Cart.css';

const Cart = ({ cart, setCart }) => {
  const increaseQty = (id) => {
    setCart(cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item => 
      item.id === id ? {...item, qty: item.qty - 1 > 0 ? item.qty - 1 : 1} : item
    ));
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <ul>
        {cart?.map((item, index) => (
          <li key={index}>
            {item.name} - Rs.{item.price} x {item.qty}
            <button onClick={() => increaseQty(item.id)}>+</button>
            <button onClick={() => decreaseQty(item.id)} disabled={item.qty === 1}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

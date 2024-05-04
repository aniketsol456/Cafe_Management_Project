import React from 'react';
import './Cart.css';
import useCart from './Usecart';  // Make sure the path is correct

const Cart = () => {
    const { cart, increaseQty, decreaseQty, removeItem, submitOrder } = useCart();

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            {cart.length > 0 ? (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.name} - Rs.{item.price} x {item.qty}
                            <button onClick={() => increaseQty(item.id)}>+</button>
                            <button onClick={() => decreaseQty(item.id)} disabled={item.qty === 1}>-</button>
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            ) : <p>Your cart is empty.</p>}
            <button onClick={submitOrder}>Submit Order</button>
        </div>
    );
}

export default Cart;

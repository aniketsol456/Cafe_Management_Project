import React, { useEffect, useState } from 'react';
import './Cart.css';
import { getFirestore, doc, getDoc, updateDoc, arrayRemove, arrayUnion } from 'firebase/firestore';

import app from '../firebaseconfig';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const db = getFirestore(app);

    useEffect(() => {
        const fetchCartData = async () => {
            const userId = localStorage.getItem("userId");
            if (!userId) {
                console.error("No user ID found, please ensure the user is logged in.");
                return;
            }

            const cartRef = doc(db, "carts", userId);
            try {
                const docSnap = await getDoc(cartRef);
                if (docSnap.exists()) {
                    setCartItems(docSnap.data().items || []);
                } else {
                    console.log("No such cart document!");
                    setCartItems([]);
                }
            } catch (error) {
                console.error("Error fetching cart data:", error);
            }
        };

        fetchCartData();
    }, [db]);

    const updateItemInCart = async (itemId, quantity) => {
        const userId = localStorage.getItem("userId");
        const cartRef = doc(db, "carts", userId);
        const item = cartItems.find(i => i.itemId === itemId);

        if (item) {
            await updateDoc(cartRef, {
                items: arrayRemove(item)
            });

            item.quantity = quantity;

            await updateDoc(cartRef, {
                items: arrayRemove(item),
                items: arrayUnion({...item, quantity}) // Adjust the quantity
            });

            // Update the local state
            setCartItems(cartItems.map(i => i.itemId === itemId ? { ...i, quantity: quantity } : i));
        }
    };

    const increaseQty = (itemId) => {
        const item = cartItems.find(i => i.itemId === itemId);
        if (item) {
            updateItemInCart(itemId, item.quantity + 1);
        }
    };

    const decreaseQty = (itemId) => {
        const item = cartItems.find(i => i.itemId === itemId);
        if (item && item.quantity > 1) {
            updateItemInCart(itemId, item.quantity - 1);
        }
    };

    const removeItem = async (itemId) => {
        const userId = localStorage.getItem("userId");
        const cartRef = doc(db, "carts", userId);
        const itemToRemove = cartItems.find(item => item.itemId === itemId);

        if (itemToRemove) {
            await updateDoc(cartRef, {
                items: arrayRemove(itemToRemove)
            });

            // Update the local state
            setCartItems(cartItems.filter(item => item.itemId !== itemId));
        }
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    if (!cartItems.length) {
        return <div><p>Your cart is empty.</p></div>;
    }

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.itemId}>
                        {item.name} - {item.quantity} x Rs.{item.price}
                        <button onClick={() => increaseQty(item.itemId)}>+</button>
                        <button onClick={() => decreaseQty(item.itemId)} disabled={item.quantity === 1}>-</button>
                        <button onClick={() => removeItem(item.itemId)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div>Total: Rs.{getTotalPrice()}</div>
        </div>
    );
};

export default Cart;

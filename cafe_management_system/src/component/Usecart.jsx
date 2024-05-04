import { useState, useCallback } from 'react';

const useCart = () => {
    const [cart, setCart] = useState([]);

    const addToCart = useCallback((product) => {
        setCart(currentCart => {
            const index = currentCart.findIndex(item => item.id === product.id);
            if (index !== -1) {
                const newCart = [...currentCart];
                newCart[index] = { ...newCart[index], qty: newCart[index].qty + 1 };
                return newCart;
            }
            return [...currentCart, { ...product, qty: 1 }];
        });
    }, []);

    const increaseQty = useCallback((id) => {
        setCart(cart => cart.map(item =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
        ));
    }, []);

    const decreaseQty = useCallback((id) => {
        setCart(cart => cart.map(item =>
            item.id === id ? { ...item, qty: Math.max(item.qty - 1, 1) } : item
        ));
    }, []);

    const removeItem = useCallback((id) => {
        setCart(cart => cart.filter(item => item.id !== id));
    }, []);

    const clearCart = useCallback(() => {
        setCart([]);
    }, []);

    const submitOrder = useCallback(() => {
        // Placeholder for order submission logic
        console.log("Order submitted", cart);
        clearCart();
    }, [cart, clearCart]);

    return {
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
        submitOrder
    };
};

export default useCart;

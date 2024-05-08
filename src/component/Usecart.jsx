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
        setCart(currentCart => currentCart.map(item =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
        ));
    }, []);

    const decreaseQty = useCallback((id) => {
        setCart(currentCart => currentCart.map(item =>
            item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
        ));
    }, []);

    const removeItem = useCallback((id) => {
        setCart(currentCart => currentCart.filter(item => item.id !== id));
    }, []);

    const getTotalPrice = useCallback(() => {
        return cart.reduce((total, item) => total + item.price * item.qty, 0);
    }, [cart]);

    return {
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        getTotalPrice,
    };
};

export default useCart;

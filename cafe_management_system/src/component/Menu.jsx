import React, { useEffect, useState } from "react";
import "./Menu.css";
import { getFirestore, collection, doc, setDoc, arrayUnion, getDocs } from "firebase/firestore";
import app from "../firebaseconfig";
import useCart from './Usecart';  // Import the useCart hook

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [menuItems, setMenuItems] = useState([]);
    const { addToCart } = useCart();  // Use the useCart hook
    const db = getFirestore(app);

    useEffect(() => {
        const fetchData = async () => {
            const menuRef = collection(db, "menu-items");
            const querySnapshot = await getDocs(menuRef);
            setMenuItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };

        fetchData();
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    const handleAddToCart = async (item) => {
        const userId = localStorage.getItem("userId");
        if (!userId) {
            console.error("No user ID found, please ensure the user is logged in.");
            alert("You must be logged in to add items to the cart.");  // Notify user to log in
            return;
        }
    
        const cartRef = doc(db, "carts", userId);
    
        try {
            // This will create the cart document if it does not exist, or update it if it does
            await setDoc(cartRef, {
                items: arrayUnion({
                    itemId: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: 1  // This can be dynamic based on your application logic
                })
            }, { merge: true });
    
            addToCart(item);  // Assuming this function is handling state/context updates
            alert(`${item.name} has been added to your cart.`);  // Alert the user that item has been added
        } catch (error) {
            console.error("Could not add item to cart", error);
            alert("Failed to add the item to the cart. Please try again.");  // Notify user of failure
        }
    };
    

    const filteredItems = selectedCategory === "All"
        ? menuItems
        : menuItems.filter(item => item.category === selectedCategory);

    return (
        <div className="Menu">
            <div className="title">
                <h1>------------Menu------------</h1>
            </div>
            <div className="Items">
                <ul>
                    <li onClick={() => handleCategoryClick("All")}>All</li>
                    <li onClick={() => handleCategoryClick("Pizza")}>Pizza</li>
                    <li onClick={() => handleCategoryClick("Sandwich")}>Sandwich</li>
                    <li onClick={() => handleCategoryClick("Colddrinks")}>Cold-Drink</li>
                    <li onClick={() => handleCategoryClick("Icecreams")}>Ice-Cream</li>
                </ul>
            </div>
            <div className="item-container">
                {filteredItems.map((item) => (
                    <div key={item.id} className="menu-item">
                        <img src={item.pictureURL} alt={item.name || "Menu item"} />
                        <h3>{item.name}</h3>
                        <p>Rs.{item.price}</p>
                        <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;

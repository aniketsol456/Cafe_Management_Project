import React, { useEffect, useState } from "react";
import "./Menu.css";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../firebaseconfig";
import useCart from './Usecart';  // Import the useCart hook

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [menuItems, setMenuItems] = useState([]);
    const { addToCart } = useCart();  // Use the useCart hook

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore(app);
            const menuRef = collection(db, "menu-items");
            const querySnapshot = await getDocs(menuRef);
            setMenuItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };

        fetchData();
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
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
                    <li onClick={() => handleCategoryClick("Sandwichs")}>Sandwiches</li>
                    <li onClick={() => handleCategoryClick("Colddrinks")}>Cold Drinks</li>
                    <li onClick={() => handleCategoryClick("Icecreams")}>Ice Creams</li>
                </ul>
            </div>
            <div className="item-container">
                {filteredItems.map((item) => (
                    <div key={item.id} className="menu-item">
                        <img src={item.pictureURL} alt={item.name || "Menu item"} />
                        <h3>{item.name}</h3>
                        <p>Rs.{item.price}</p>
                        <button onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;

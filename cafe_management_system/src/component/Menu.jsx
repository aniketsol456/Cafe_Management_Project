import React, { useState } from 'react';
import './Menu.css';
import Margherita from '../assets/images/16.jpeg';
import Burger from '../assets/images/1.jpeg';
import MasalaSandwich from '../assets/images/9.jpeg';
import CoolBar from '../assets/images/11.jpeg';
import Vanilla from '../assets/images/12.jpeg';
import { Link } from 'react-router-dom';

const Menu = ({ cart, setCart }) => {  // Ensure cart and setCart are passed as props
  const [selectedCategory, setSelectedCategory] = useState('All');

  const menuItems = [
    { id: 1, name: 'Margherita Pizza', category: 'Pizza', image: Margherita, price: 110 },
    { id: 2, name: 'Burger', category: 'Pizza', image: Burger, price: 120 },
    { id: 3, name: 'Masala Sandwich', category: 'Sandwiches', image: MasalaSandwich, price: 50 },
    { id: 4, name: 'Cool-Bar', category: 'Cold Drinks', image: CoolBar, price: 125 },
    { id: 5, name: 'Vanilla Ice Cream', category: 'Ice Creams', image: Vanilla, price: 45 },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const addToCart = (product) => {
    const exist = cart.find(item => item.id === product.id);
    if (exist) {
      setCart(cart.map(item => 
        item.id === product.id ? {...item, qty: item.qty + 1} : item
      ));
    } else {
      setCart([...cart, {...product, qty: 1}]);
    }
  };

  const filteredItems = selectedCategory === 'All' ? menuItems : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className='Menu'>
      <div className="title"><h1>------------Menu------------</h1></div>
      <div className="Items">
        <ul>
          <li onClick={() => handleCategoryClick('All')}>All</li>
          <li onClick={() => handleCategoryClick('Pizza')}>Pizza</li>
          <li onClick={() => handleCategoryClick('Sandwiches')}>Sandwiches</li>
          <li onClick={() => handleCategoryClick('Cold Drinks')}>Cold Drinks</li>
          <li onClick={() => handleCategoryClick('Ice Creams')}>Ice Creams</li>
        </ul>
      </div>
      <div className="item-container">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Rs.{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button> 
          </div>
        ))}
      </div>
      <div>
        <Link to="/Cart"><button className="view-cart-button">View Cart</button></Link>
      </div>
    </div>
  );
}

export default Menu;

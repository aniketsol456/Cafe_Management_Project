import React, { useState } from 'react';
import './Menu.css';
import Margherita from '../assets/images/16.jpeg';
import Burger from '../assets/images/1.jpeg';
import Masalasandwich from '../assets/images/9.jpeg';
import coolbar from '../assets/images/11.jpeg';
import Vanilla from '../assets/images/12.jpeg';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const menuItems = [
    { id: 1, name: 'Margherita Pizza', category: 'Pizza', image: Margherita, price: 110 },
    { id: 2, name: 'Burger', category: 'Pizza', image: Burger, price: 120 },
    { id: 3, name: 'Masala Sandwich', category: 'Sandwichs', image: Masalasandwich, price: 50 },
    { id: 4, name: 'Cool-Bar', category: 'Colddrinks', image:coolbar , price: 125 },
    { id: 5, name: 'Vanilla Ice Cream', category: 'Icecreams', image:Vanilla, price: 45 },
    // Add more items here
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = selectedCategory === 'All' ? menuItems : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className='Menu'>
      <div className="title">
        <h1>------------Menu------------</h1>
      </div>
      <div className="Items">
        <ul>
          <li onClick={() => handleCategoryClick('All')}>All</li>
          <li onClick={() => handleCategoryClick('Pizza')}>Pizza</li>
          <li onClick={() => handleCategoryClick('Sandwichs')}>Sandwichs</li>
          <li onClick={() => handleCategoryClick('Colddrinks')}>Colddrinks</li>
          <li onClick={() => handleCategoryClick('Icecreams')}>Icecreams</li>
        </ul>
      </div>
      <div className="item-container">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Rs.{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;

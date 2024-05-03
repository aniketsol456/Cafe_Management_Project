import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../Admin/Menumanage.css';

const Menumanage = () => {
    return (
        <>
            <div className="menumanage">
                <Sidebar />
                <div className="main-content">
                    <h1>Menu Management</h1>
                    <form className="menu-form">
                        <div className="form-group">
                            <label htmlFor="item_name">Item Name:</label>
                            <input type="text" id="item_name" name="item_name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="item_picture">Item Picture:</label>
                            <input type="file" id="item_picture" name="item_picture" accept="image/*" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="item_price">Item Price (in Rupees):</label>
                            <input type="number" id="item_price" name="item_price" min="0" />
                        </div>
                        <button type="submit">Add Item</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Menumanage;

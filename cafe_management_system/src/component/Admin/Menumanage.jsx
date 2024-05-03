import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../Admin/Menumanage.css";
import app from "../../firebaseconfig";

const Menumanage = () => {
  const [itemCategory, setItemCategory] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemPicture, setItemPicture] = useState(null);
  const [itemPrice, setItemPrice] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleItemPictureChange = (e) => {
    if (e.target.files[0]) {
      setItemPicture(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!itemPicture) {
      console.error("Please select an item picture.");
      return;
    }

    const db = getFirestore(app);
    const storage = getStorage(app);

    try {
      setUploading(true);

      const storageRef = ref(storage, `item_pictures/${itemPicture.name}`);
      await uploadBytes(storageRef, itemPicture);

      const downloadURL = await getDownloadURL(storageRef);

      // Add item information to Firestore collection
      await addDoc(collection(db, "menu-items"), {
        category: itemCategory,
        name: itemName,
        pictureURL: downloadURL,
        price: itemPrice,
      });

      setItemCategory("");
      setItemName("");
      setItemPicture(null);
      setItemPrice("");
    } catch (error) {
      console.error("Error adding item:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <div className="menumanage">
        <Sidebar />
        <div className="main-content">
          <h1>Menu Management</h1>
          <form className="menu-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="item_category">Item Category:</label>
              <select
                id="item_category"
                name="item_category"
                value={itemCategory}
                onChange={(e) => setItemCategory(e.target.value)}
              >
                <option value="pizza">Pizza</option>
                <option value="sandwich">Sandwich</option>
                <option value="ice-creams">Ice-Creams</option>
                <option value="cold-drinks">Cold Drinks</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="item_name">Item Name:</label>
              <input
                type="text"
                id="item_name"
                name="item_name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="item_picture">Item Picture:</label>
              <input
                type="file"
                id="item_picture"
                name="item_picture"
                accept="image/*"
                onChange={handleItemPictureChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="item_price">Item Price (in Rupees):</label>
              <input
                type="number"
                id="item_price"
                name="item_price"
                min="0"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
              />
            </div>
            <button type="submit" disabled={uploading}>
              {uploading ? "Uploading..." : "Add Item"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menumanage;

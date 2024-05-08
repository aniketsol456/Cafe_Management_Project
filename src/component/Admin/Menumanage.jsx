import React, { useEffect, useState } from "react";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
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
  const [menuItems, setMenuItems] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(app);
      const menuRef = collection(db, "menu-items");
      const querySnapshot = await getDocs(menuRef);
      setMenuItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchData();
  }, []);

  const handleItemPictureChange = (e) => {
    if (e.target.files[0]) {
      setItemPicture(e.target.files[0]);
    }
  };

  const handleDelete = async (itemId) => {
    const db = getFirestore(app);
    try {
      await deleteDoc(doc(db, "menu-items", itemId));
      setMenuItems(menuItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleEdit = (itemId) => {
    const itemToEdit = menuItems.find(item => item.id === itemId);
    if (itemToEdit) {
      setItemCategory(itemToEdit.category);
      setItemName(itemToEdit.name);
      setItemPrice(itemToEdit.price);
      setEditingItemId(itemId);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getFirestore(app);
    const storage = getStorage(app);

    try {
      setUploading(true);
      let downloadURL;

      if (itemPicture) {
        const storageRef = ref(storage, `item_pictures/${itemPicture.name}`);
        await uploadBytes(storageRef, itemPicture);
        downloadURL = await getDownloadURL(storageRef);
      }

      const itemData = {
        category: itemCategory,
        name: itemName,
        price: itemPrice,
        pictureURL: downloadURL,
      };

      if (editingItemId) {
        const itemRef = doc(db, "menu-items", editingItemId);
        await updateDoc(itemRef, itemData);
      } else {
        await addDoc(collection(db, "menu-items"), itemData);
      }

      setItemCategory("");
      setItemName("");
      setItemPrice("");
      setItemPicture(null);
      setEditingItemId(null);
    } catch (error) {
      console.error("Error handling the item:", error);
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
              {uploading ? "Processing..." : editingItemId ? "Update Item" : "Add Item"}
            </button>
          </form>
          <div className="item-container">
            <table>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {menuItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>Rs.{item.price}</td>
                    <td><button onClick={() => handleEdit(item.id)}>Edit</button></td>
                    <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menumanage;

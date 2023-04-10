import React from "react";
import { useEffect, useState } from "react";
import Book from "../Book/Book";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = books.find(book => book.id === id);
      if (addedProduct) {
        addedProduct.quantity = storedCart[id];
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [books]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exist = cart.find(book => book.id === selectedProduct.id);
    if (!exist) {
        selectedProduct.quantity = 1;
        newCart = [...cart, selectedProduct];      
    }
    else {
      const rest = cart.filter(book => book.id !== selectedProduct.id);
      exist.quantity += 1;
      newCart = [...rest, selectedProduct];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };
  return (
    <div className="grid grid-cols-5">
      <div className="grid col-span-4 grid-cols-3 gap-6 m-10">
        {books.map((book) => (
          <Book 
          key={book.id} 
          book={book} 
          handleAddToCart={handleAddToCart}
          
          ></Book>
        ))}
      </div>
      <div className="bg-purple-600 grid cols-end-2">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Books;

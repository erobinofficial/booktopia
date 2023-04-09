import React from "react";
import { useEffect, useState } from "react";
import Book from "../Book/Book";
import Cart from "../Cart/Cart";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="grid grid-cols-5">
      <div className="grid col-span-4 grid-cols-3 gap-6 m-10">
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
      <div className="bg-purple-600 grid cols-end-2">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Books;

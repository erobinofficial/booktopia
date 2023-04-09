import React from "react";

const Cart = () => {
  return (
    <div className="sticky top-0">
      <div>
        <h1 className="m-6 text-center text-2xl font-bold">Added books</h1>
      </div>
      <div className="m-10">
        <p>Selected items: </p>
        <p>Price: </p>
        <p>Tax: </p>
        <p>Subtotal: </p>
      </div>
    </div>
  );
};

export default Cart;

import React, { useEffect, useState } from "react";
import { removeFromDb } from "../../utilities/fakedb";

const Cart = ({cart}) => {

  const handleRemoveCart = () => {
    const exist = cart.find(product => product.id);
    removeFromDb(exist);
  };

  let total = 0;
  let shipping =0;
  let quantity = 0;
  for(const product of cart){
    quantity += product.quantity;
    total += product.price*product.quantity;
  }
  const tax = parseFloat((total*0.05).toFixed(2));
  const subTotal = total + shipping + tax;

  return (
    <div className="sticky top-0">
      <div>
        <h1 className="m-6 text-center text-2xl font-bold">Added books</h1>
      </div>
      <div className="m-10">
        <p>Selected items: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Tax: ${tax}</p>
        <p>Subtotal: ${subTotal}</p>
      </div>
      <div className="flex justify-center items-center">
        <button onClick={()=> handleRemoveCart()} className="btn">Remove all</button>
      </div>
    </div>
  );
};

export default Cart;

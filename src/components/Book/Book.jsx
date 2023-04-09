import React from "react";

const Book = ({ book }) => {
  const { image, name, writer } = book;
  return (
    <div className="card card-side bg-purple-900 shadow-xl text-white">
      <figure className="p-8 h-96 w-72">
        <img className="object-contain"
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Writer: {writer}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-purple-600 hover:bg-purple-950">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default Book;

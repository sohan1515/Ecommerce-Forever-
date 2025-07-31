import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  console.log("ProductItem ID:", id);
  return (
    <Link to={`/product/${id}`}>
      <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 min-h-[300px]"> 
        <img src={image} alt={`Product: ${name}`} className="w-full h-70 object-cover" />

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
          <p className="text-gray-600 font-bold mt-2">${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;

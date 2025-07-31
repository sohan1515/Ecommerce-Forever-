import React, { createContext } from 'react';
import { products } from '../assets/assets';


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  // Example: get first 5 products as latest
const bestSellers = products.filter(p => p.bestseller);
const latestCollections = products
  .sort((a, b) => b.date - a.date)
  .slice(0, 5);


  const value = {
    products,
    latestCollections,
    bestSellers,
    currency,
    delivery_fee,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

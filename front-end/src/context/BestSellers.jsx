import React, { useState, useContext,useEffect } from 'react';
import { ShopContext } from '../context/ShopContextProvider.jsx';
import Title from '../context/Title';
import ProductItem from '../components/ProductItem.jsx';


const BestSellers = () => {
  const { products } = useContext(ShopContext);
  const [bestseller,setBestseller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item)=> item.bestseller);
    setBestseller(bestProducts.slice(0, 5));
  }, []);

  return (
     <div className = 'my-10'>
      <div className='text-center py-8 text-3xl '>
        <Title text1="BEST" text2="SELLERS" />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Discover our top-selling products that our customers love the most.
        </p>
      </div>

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {bestseller.map((item, index) => (
        <ProductItem key={index} id={item.id}  name={item.name} image={item.image} price={item.price}/>
      
      ))}
    </div>
    </div>
   
  );
};

export default BestSellers;

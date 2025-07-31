import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContextProvider.jsx';
import Title from '../context/Title';
import ProductItem from '../components/ProductItem.jsx';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="flex-flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t-">
      {/* Section Title */}
      <div className="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;

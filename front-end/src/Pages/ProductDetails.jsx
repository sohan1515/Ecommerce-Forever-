import React from 'react';
import { useParams } from 'react-router-dom';

const dummyProducts = [
  {
    id: '1',
    name: 'Cool T-Shirt',
    image: '/images/product1.jpg',
    reviews: 34,
    price: 29.99,
    description: 'A comfortable and stylish t-shirt.',
    longDescription: 'This is a long description about the t-shirt.',
  },
  {
    id: '2',
    name: 'Blue Hoodie',
    image: '/images/product2.jpg',
    reviews: 12,
    price: 49.99,
    description: 'Warm and cozy hoodie.',
    longDescription: 'This hoodie is great for winter and keeps you warm.',
  },
];

const SizeSelector = () => (
  <div className="flex gap-2">
    {['S', 'M', 'L', 'XL'].map(size => (
      <button key={size} className="px-3 py-1 border rounded hover:bg-gray-200">
        {size}
      </button>
    ))}
  </div>
);

const RelatedProducts = () => (
  <div className="text-center text-gray-500">No related products to show.</div>
);

const ProductDetail = () => {
  const { id } = useParams();
  const product = dummyProducts.find((item) => item.id === id);

  if (!product) {
    return <div className="text-center py-10 text-red-600 font-bold">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1">
          <img src={product.image} alt={product.name} className="w-full h-[500px] object-cover rounded-lg" />
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="text-yellow-500">★★★★★ <span className="text-gray-500">({product.reviews})</span></div>
          <p className="text-2xl font-semibold">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>

          <div>
            <h4 className="font-semibold mb-2">Select Size</h4>
            <SizeSelector />
          </div>

          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">Add to Cart</button>

          <div className="text-sm text-gray-500 pt-4">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16 border-t pt-6">
        <div className="flex space-x-6 font-semibold text-lg border-b">
          <button className="pb-2 border-b-2 border-black">Description</button>
          <button className="pb-2 text-gray-500">Reviews ({product.reviews})</button>
        </div>
        <p className="mt-4 text-gray-700">{product.longDescription}</p>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-center mb-6">Related <span className="text-primary">Products</span></h2>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetail;

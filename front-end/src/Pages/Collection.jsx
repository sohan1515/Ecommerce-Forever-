import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContextProvider';
import ProductItem from '../components/ProductItem';
import Ourpolicy from '../components/Ourpolicy';
import { FiSearch } from 'react-icons/fi';


const Collection = () => {
  const { products } = useContext(ShopContext);


  const [showFilter, setShowFilter] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortBy, setSortBy] = useState('relevant');
  const [query, setQuery] = useState('');
  
  // New state - controls visibility of search input
  const [searchVisible, setSearchVisible] = useState(false);

  // You can keep this if you want search to show based on location
  // but now searchVisible controls visibility on icon click
  // const showSearch = location.state?.showSearch || false;

  // Filter and sort logic remains the same
  const filterAndSortProducts = () => {
    let filtered = products || [];
    if (searchVisible && query.trim() !== '') {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    filtered = filtered.filter((product) => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.subCategory);
      return categoryMatch && typeMatch;
    });
    if (sortBy === 'low-to-high') {
      filtered = filtered.slice().sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high-to-low') {
      filtered = filtered.slice().sort((a, b) => b.price - a.price);
    }
    return filtered;
  };

  // Handlers remain the same
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleTypeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedTypes((prev) => [...prev, value]);
    } else {
      setSelectedTypes((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="px-6 pt-10">

      {/* Search icon button to toggle search input visibility */}
      <div className="flex justify-end p-4">
        <button
  onClick={() => setSearchVisible((prev) => !prev)}
  aria-label="Toggle search bar"
  className="text-gray-600 hover:text-black text-2xl p-2 rounded-full hover:bg-gray-100 transition"
>
  <FiSearch />
</button>
      </div>

      {/* Conditionally render search input only if searchVisible is true */}
      {searchVisible && (
  <div className="p-4 flex justify-center">
    <div className="w-full max-w-md">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-6 py-2 border border-gray-400 rounded-md outline-none placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-gray-300"
        aria-label="Search products"
      />
    </div>
  </div>
)}


      {/* Heading */}
      <div className="text-center mt-6 mb-10">
        <h2 className="text-3xl md:text-4xl text-gray-600">
          ALL <span className="text-gray-800 font-bold">Collections</span>
        </h2>
        <hr className="w-16 border-t-2 border-gray-400 mx-auto mt-2" />
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* FILTERS SECTION */}
        <div className="min-w-60">
          <p
            className="text-xl font-semibold flex items-center cursor-pointer gap-2 mb-4"
            onClick={() => setShowFilter(!showFilter)}
          >
            Filters {showFilter ? '▲' : '▼'}
          </p>
          <div
            className={`border border-gray-200 rounded-md p-4 bg-white shadow-sm ${
              showFilter ? '' : 'hidden'
            }`}
          >
            {/* Categories */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-2">CATEGORIES</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {['Men', 'Women', 'Kids'].map((cat) => (
                  <li key={cat}>
                    <input
                      className="w-3 mr-1"
                      type="checkbox"
                      id={cat.toLowerCase()}
                      value={cat}
                      onChange={handleCategoryChange}
                      checked={selectedCategories.includes(cat)}
                    />
                    <label htmlFor={cat.toLowerCase()}>{cat}</label>
                  </li>
                ))}
              </ul>
            </div>
            {/* Types */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-2">TYPE</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (
                  <li key={type}>
                    <input
                      className="w-3 mr-1"
                      type="checkbox"
                      id={type.toLowerCase()}
                      value={type}
                      onChange={handleTypeChange}
                      checked={selectedTypes.includes(type)}
                    />
                    <label htmlFor={type.toLowerCase()}>{type}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

    {/* PRODUCTS SECTION */}
<div className="flex-1">
  {/* Sort Dropdown */}
  <div className="flex justify-end mb-4">
    <select
      value={sortBy}
      onChange={handleSort}
      className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none"
    >
      <option value="relevant">Sort by: Relevant</option>
      <option value="low-to-high">Sort by: Low to High</option>
      <option value="high-to-low">Sort by: High to Low</option>
    </select>
  </div>

  {/* Product Grid */}
  {filterAndSortProducts().map(({ _id, name, image, price }) => {
  console.log("Rendering Product:", { _id, name, image, price });

  return (
    <ProductItem
      key={_id}
      id={_id}
      name={name}
      image={image}
      price={price}
    />
  );
})}

</div>

      </div>

      <Ourpolicy />
    </div>
  );
};

export default Collection;

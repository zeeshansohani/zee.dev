import React, { useState } from "react";

const SearchWithFilter = () => {
  // Sample data for cards with prices and companies
  const initialData = [
    { id: 1, name: "Apple MacBook Pro", company: "Apple", price: 1299 },
    { id: 2, name: "Samsung Galaxy S21", company: "Samsung", price: 799 },
    { id: 3, name: "Sony WH-1000XM4", company: "Sony", price: 349 },
    { id: 4, name: "Google Pixel 6", company: "Google", price: 599 },
    { id: 5, name: "Amazon Kindle", company: "Amazon", price: 89 },
    { id: 6, name: "Microsoft Surface Pro", company: "Microsoft", price: 999 },
    { id: 7, name: "Apple AirPods Pro", company: "Apple", price: 249 },
    { id: 8, name: "Fitbit Charge 5", company: "Fitbit", price: 179 },
    { id: 9, name: "Dell XPS 13", company: "Dell", price: 999 },
    { id: 10, name: "GoPro Hero 9", company: "GoPro", price: 399 },
    { id: 11, name: "Canon EOS R6", company: "Canon", price: 2499 },
    { id: 12, name: "DJI Mavic Air 2", company: "DJI", price: 799 },
    { id: 13, name: "Apple iPad Pro", company: "Apple", price: 1099 },
    { id: 14, name: "Sony PlayStation 5", company: "Sony", price: 499 },
    { id: 15, name: "Samsung Galaxy Watch 4", company: "Samsung", price: 279 },
    { id: 16, name: "Google Nest Hub", company: "Google", price: 99 },
    { id: 17, name: "Amazon Echo Dot", company: "Amazon", price: 49 },
    { id: 18, name: "Canon PowerShot G7", company: "Canon", price: 649 },
    { id: 19, name: "DJI Osmo Pocket", company: "DJI", price: 349 },
    { id: 20, name: "Dell Inspiron 15", company: "Dell", price: 649 },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState(""); // "low-to-high" or "high-to-low"
  const [companyFilter, setCompanyFilter] = useState(""); // Filter by company

  // Function to filter cards based on search term, price filter, and company filter
  const filteredData = initialData
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!companyFilter || item.company === companyFilter)
    )
    .sort((a, b) => {
      if (priceFilter === "low-to-high") {
        return a.price - b.price;
      } else if (priceFilter === "high-to-low") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Search with Filter Simulation
      </h2>
      <p className="mb-6 text-gray-600 text-lg">
        This is a simulation of a search functionality with filters. Use the
        search bar or the filters below to find the relevant items.
      </p>

      {/* Search Bar */}
      <input
        type="text"
        className="border p-3 w-full mb-6 rounded-lg focus:outline-none focus:border-blue-400 shadow-sm"
        placeholder="🔍 Search for a gadget..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Filter Options */}
      <div className="flex space-x-6 mb-6">
        {/* Price Filter */}
        <select
          className="border p-3 w-1/3 rounded-lg focus:outline-none focus:border-blue-400 shadow-sm"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>

        {/* Company Filter */}
        <select
          className="border p-3 w-1/3 rounded-lg focus:outline-none focus:border-blue-400 shadow-sm"
          value={companyFilter}
          onChange={(e) => setCompanyFilter(e.target.value)}
        >
          <option value="">Filter by Company</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Sony">Sony</option>
          <option value="Google">Google</option>
          <option value="Amazon">Amazon</option>
          <option value="Microsoft">Microsoft</option>
          <option value="Dell">Dell</option>
          <option value="Canon">Canon</option>
          <option value="DJI">DJI</option>
        </select>
      </div>

      {/* Cards displaying filtered data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-500 mb-2">{item.company}</p>
              <p className="text-lg font-bold text-gray-800">${item.price}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No items match your search.</p>
        )}
      </div>
    </div>
  );
};

export default SearchWithFilter;

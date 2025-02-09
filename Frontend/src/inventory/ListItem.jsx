import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListItem = () => {
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getitemdata");
        setItems(response.data);
      } catch (err) {
        setError("Failed to fetch items");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const filteredItems = items.filter((item) =>
    item.productName?.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">Items Inventory</h1>

      <input
        type="text"
        placeholder="Search items..."
        className="w-full max-w-md p-3 mb-6 rounded-md bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {loading && <p className="text-gray-400">Loading items...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="w-full text-left border-collapse bg-gray-800 rounded-md">
            <thead className="bg-gray-700 text-gray-300">
              <tr>
                <th className="px-4 py-3">Item Name</th>
                <th className="px-4 py-3">Shape</th>
                <th className="px-4 py-3">Weight</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <tr
                    key={item._id || index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                    } hover:bg-gray-600 transition-colors`}
                  >
                    <td className="px-4 py-3">{item.productName || "N/A"}</td>
                    <td className="px-4 py-3">{item.shape || "N/A"}</td>
                    <td className="px-4 py-3">{item.weight || "N/A"}</td>
                    <td className="px-4 py-3">{item.quantity || "N/A"}</td>
                    <td className="px-4 py-3">{item.price || "N/A"}</td>
                    <td className="px-4 py-3">
                      <Link
                        to={`/itemcalculation`}
                        state={{ itemData: item }} // Correct way to pass state
                        className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600 transition"
                      >
                        Open Calculation
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-4 py-3 text-center text-gray-400">
                    No items found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListItem;

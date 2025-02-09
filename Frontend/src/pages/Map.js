import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Map() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const product = queryParams.get("product");
  const quantity = queryParams.get("quantity");

  return (
    <div className="w-full h-full bg-gray-950">
    <Navbar />
      <div className="p-6 max-w-5xl mx-auto text-white  min-h-screen pt-32">
        <h1 className="text-3xl font-bold mb-4">Product: {product}</h1>
        <h2 className="text-2xl mb-6">Quantity: {quantity}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Seller Address Form */}
          <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Seller Address</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-3 border rounded bg-gray-700 text-white"
                required
              />
              <input
                type="text"
                placeholder="Street Address"
                className="w-full p-3 border rounded bg-gray-700 text-white"
                required
              />
              <input
                type="text"
                placeholder="City"
                className="w-full p-3 border rounded bg-gray-700 text-white"
                required
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full p-3 border rounded bg-gray-700 text-white"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border rounded bg-gray-700 text-white"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded bg-gray-700 text-white"
                required
              />
              <select
                className="w-full p-3 border rounded bg-gray-700 text-white"
                disabled
              >
                <option>India</option>
              </select>
            </div>
          </form>

          {/* Receiver Address Form */}
          <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Receiver Address</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-3 border rounded bg-gray-700 text-white"
                required
              />
              <input
                type="text"
                placeholder="Street Address"
                className="w-full p-3 border rounded bg-gray-700 text-white"
                required
              />
              <input
                type="text"
                placeholder="City"
                className="w-full p-3 border rounded bg-gray-700 text-white"
                required
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full p-3 border rounded bg-gray-700 text-white"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border rounded bg-gray-700 text-white"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded bg-gray-700 text-white"
                required
              />
              <select
                className="w-full p-3 border rounded bg-gray-700 text-white"
                disabled
              >
                <option>India</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Map;

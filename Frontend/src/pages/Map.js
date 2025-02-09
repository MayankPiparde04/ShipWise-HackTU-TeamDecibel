import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AddressForm({ title }) {
  const [formData, setFormData] = useState({
    company: 'Thapar University',
    street: 'Thapar Institute of Engineering and Technology',
    city: 'Patiala',
    postalCode: '147004',
    phone: '0175-2393001',
    email: 'info@thapar.edu'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShipClick = () => {
    window.location.href = 'https://www.google.com'; // Redirect to Google
  };

  return (
    <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full p-3 border rounded bg-gray-700 text-white"
          readOnly
        />
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          placeholder="Street Address"
          className="w-full p-3 border rounded bg-gray-700 text-white"
          readOnly
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          className="w-full p-3 border rounded bg-gray-700 text-white"
          readOnly
        />
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          placeholder="Postal Code"
          className="w-full p-3 border rounded bg-gray-700 text-white"
          readOnly
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full p-3 border rounded bg-gray-700 text-white"
          readOnly
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-3 border rounded bg-gray-700 text-white"
          readOnly
        />
        <select className="w-full p-3 border rounded bg-gray-700 text-white" disabled>
          <option>India</option>
        </select>
        <button
          type="button"
          onClick={handleShipClick}
          className="w-full p-3 mt-4 bg-blue-600 text-white rounded"
        >
          Ship
        </button>
      </div>
    </form>
  );
}

function Map() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const product = queryParams.get('product');
  const quantity = queryParams.get('quantity');

  return (
    <div className="w-full h-full bg-gray-950">
      <Navbar />
      <div className="p-6 max-w-5xl mx-auto text-white min-h-screen pt-32">
        <h1 className="text-3xl font-bold mb-4">Product: {product}</h1>
        <h2 className="text-2xl mb-6">Quantity: {quantity}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AddressForm title="Seller Address" />
          <AddressForm title="Receiver Address" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Map;

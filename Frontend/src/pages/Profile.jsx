import React, { useState, useEffect } from 'react';
import { FaEdit, FaSave, FaCamera } from 'react-icons/fa'; // React Icons for Edit, Save, and Camera

function Profile() {
  const [userData, setUserData] = useState({
    ownerName: '',
    organizationName: '',
    pfp: '',
    address: {
      country: 'India',
      state: '',
      city: '',
      addressLine: '',
      pinCode: '',
    },
    email: '',
    number: '',
  });
  const [isEditable, setIsEditable] = useState(false);

  // Fetch user data from API
  useEffect(() => {
    fetch('http://localhost:5000/api/userdata', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData({
          ...data,
          address: {
            ...data.address,
            country: 'India', // Fixed country
          },
        });
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in userData.address) {
      setUserData({
        ...userData,
        address: { ...userData.address, [name]: value },
      });
    } else {
      setUserData({
        ...userData,
        [name]: value,
      });
    }
  };

  // Save changes (this could include API call to update data)
  const handleSave = () => {
    // Send updated data to server (example API endpoint)
    fetch('http://localhost:5000/api/updateProfile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Profile updated successfully:', data);
      })
      .catch((error) => console.error('Error updating profile:', error));
    
    setIsEditable(false); // Disable editing after save
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-6 bg-gray-800 border rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Profile</h2>

        <div className="flex items-center justify-center mb-6">
          <img
            src={userData.pfp || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mr-4 border-4 border-gray-500"
          />
          {isEditable && (
            <button className="text-blue-500 hover:text-blue-700 flex items-center space-x-2 mt-2">
              <FaCamera />
              <span>Change Picture</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="ownerName" className="block text-sm font-medium text-gray-400">
              Owner Name
            </label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={userData.ownerName}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
              disabled={!isEditable}
            />
          </div>

          <div className="form-group">
            <label htmlFor="organizationName" className="block text-sm font-medium text-gray-400">
              Organization Name
            </label>
            <input
              type="text"
              id="organizationName"
              name="organizationName"
              value={userData.organizationName}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
              disabled={!isEditable}
            />
          </div>

          <div className="form-group">
            <label htmlFor="state" className="block text-sm font-medium text-gray-400">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={userData.address.state}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
              disabled={!isEditable}
            />
          </div>

          <div className="form-group">
            <label htmlFor="city" className="block text-sm font-medium text-gray-400">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={userData.address.city}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
              disabled={!isEditable}
            />
          </div>

          <div className="form-group">
            <label htmlFor="addressLine" className="block text-sm font-medium text-gray-400">
              Address Line
            </label>
            <input
              type="text"
              id="addressLine"
              name="addressLine"
              value={userData.address.addressLine}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
              disabled={!isEditable}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pinCode" className="block text-sm font-medium text-gray-400">
              Pin Code
            </label>
            <input
              type="text"
              id="pinCode"
              name="pinCode"
              value={userData.address.pinCode}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
              disabled={!isEditable}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
              disabled
            />
          </div>

          <div className="form-group">
            <label htmlFor="number" className="block text-sm font-medium text-gray-400">
              Phone Number
            </label>
            <input
              type="text"
              id="number"
              name="number"
              value={userData.number}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
              disabled={!isEditable}
            />
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            {isEditable ? (
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                <FaSave className="inline mr-2" />
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEditable(true)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
              >
                <FaEdit className="inline mr-2" />
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ItemCalculation = () => {
  const { state } = useLocation();
  const { productName, shape, weight, quantity, price, dimensions } =
    state.itemData;

  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const [itemData, setItemData] = useState({
    productName: productName,
    length:
      dimensions.length || dimensions.radius * 2 || dimensions.side || null,
    breadth:
      dimensions.breadth || dimensions.radius * 2 || dimensions.side || null,
    height:
      dimensions.height || dimensions.radius * 2 || dimensions.side || null,
    weight: weight,
    quantity: quantity,
  });
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  console.log(itemData);

  // Static carton data
  const cartons = [
    { length: 12, breadth: 12, height: 12, max_weight: 50, quantity: 87 },
    { length: 24, breadth: 24, height: 24, max_weight: 100, quantity: 72 },
    { length: 36, breadth: 36, height: 36, max_weight: 200, quantity: 84 },
    { length: 48, breadth: 48, height: 48, max_weight: 300, quantity: 92 },
    { length: 60, breadth: 60, height: 60, max_weight: 400, quantity: 107 },
    { length: 120, breadth: 60, height: 60, max_weight: 500, quantity: 120 },
  ];

  const renderDimensions = () => {
    if (!dimensions) return null;

    const { side, length, breadth, height, radius } = dimensions;
    switch (shape.toLowerCase()) {
      case "cube":
        return (
          side && (
            <p>
              <span className="font-semibold">Side:</span> {side}
            </p>
          )
        );

      case "cuboid":
        return (
          <>
            {length && (
              <p>
                <span className="font-semibold">Length:</span> {length}
              </p>
            )}
            {breadth && (
              <p>
                <span className="font-semibold">Breadth:</span> {breadth}
              </p>
            )}
            {height && (
              <p>
                <span className="font-semibold">Height:</span> {height}
              </p>
            )}
          </>
        );

      case "cylinder":
        return (
          <>
            {radius && (
              <p>
                <span className="font-semibold">Radius:</span> {radius}
              </p>
            )}
            {height && (
              <p>
                <span className="font-semibold">Height:</span> {height}
              </p>
            )}
          </>
        );

      case "sphere":
        return (
          radius && (
            <p>
              <span className="font-semibold">Radius:</span> {radius}
            </p>
          )
        );

      case "cone":
        return (
          <>
            {radius && (
              <p>
                <span className="font-semibold">Radius:</span> {radius}
              </p>
            )}
            {height && (
              <p>
                <span className="font-semibold">Height:</span> {height}
              </p>
            )}
          </>
        );

      default:
        return <p>Dimensions not available</p>;
    }
  };

  const handleQuantityChange = (e) => {
    const value = Math.min(Math.max(e.target.value, 0), quantity); // Ensure value is within valid range
    setSelectedQuantity(value);
  };

  const handleSubmit = async () => {
    setError(null);
    if (parseInt(itemData.quantity) < 1) {
      setError("Quantity must be at least 1.");
      return;
    }

    const data = {
      product: {
        length: parseFloat(
          itemData.length || itemData.radius * 2 || itemData.side || null
        ),
        breadth: parseFloat(
          itemData.breadth || itemData.radius * 2 || itemData.side || null
        ),
        height: parseFloat(
          itemData.height || itemData.radius * 2 || itemData.side || null
        ),
        weight: parseFloat(itemData.weight),
        quantity: parseInt(selectedQuantity),
      },
      cartons,
    };
    console.log(itemData);
    try {
      const response = await axios.post(
        "http://127.0.0.1:5500/api/optimal-packing",
        data
      );
      setResults(response.data);
    } catch (err) {
      setError(err.response ? err.response.data.msg : "An error occurred.");
    }
  };

  const getOrientation = (orientation) => {
    switch (orientation) {
      case 0:
        return "Front Facing";
      case 1:
        return "Side Facing";
      case 2:
        return "Horizontal Lay Down";
      default:
        return "Front Facing";
    }
  };

  const getCartonSize = (index) => {
    const cartonSizes = [
      "12*12*12 in",
      "24*24*24 in",
      "36*36*36 in",
      "48*48*48 in",
      "60*60*60 in",
      "120*60*60 in",
    ];

    return cartonSizes[index] || "Unknown Size"; // Return the appropriate size or "Unknown Size" if index is invalid
  };
  // const handleCheckout = () => {
  //   navigate("/map", selectedQuantity);
  // };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen p-6 pt-24">
      <Link
        to="/dashboard/listitems"
        className="text-cyan-400 font-semibold hover:underline mb-4 inline-block"
      >
        ← Back to Items
      </Link>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
        Calculation for {productName}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section: Item Data */}
        <div className="space-y-4 p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold text-cyan-400">Item Details</h3>
          <p>
            <span className="font-semibold">Name:</span> {productName}
          </p>
          <p>
            <span className="font-semibold">Shape:</span> {shape}
          </p>
          <p>
            <span className="font-semibold">Weight:</span> {weight}
          </p>
          <p>
            <span className="font-semibold">Quantity Available:</span>{" "}
            {quantity}
          </p>
          <p>
            <span className="font-semibold">Per Item Price:</span> {price}
          </p>
          <p>
            <span className="font-semibold">Total Price:</span>{" "}
            {price * selectedQuantity}
          </p>
          {renderDimensions()}
          <div>
            <label className="block text-sm font-semibold">
              Select Quantity
            </label>
            <input
              type="number"
              value={selectedQuantity}
              onChange={handleQuantityChange}
              min="0"
              max={quantity}
              className="mt-2 w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md"
              placeholder={`${0}-${quantity}`}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Calculate
          </button>
        </div>

        {/* Right Section: Results */}
        <div>
          {results && (
            <div className="w-2/3 flex flex-wrap gap-4">
              <h2 className="text-xl font-bold text-blue-400 mb-4 w-full">
                Results:
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {results.packing_results.map((result, index) => (
                  <div
                    key={index}
                    className="w-full bg-gray-700 p-4 rounded-md text-gray-100 shadow-lg hover:shadow-2xl transition duration-300"
                  >
                    <h3 className="text-lg font-semibold text-blue-300 mb-2">
                      Carton {result.carton_index} (
                      {getCartonSize(result.carton_index)})
                    </h3>

                    <p>Total Cartons Used: {result.cartons_used}</p>
                    <p>Fit Breadthwise: {result.fit_breadthwise}</p>
                    <p>Fit Heightwise: {result.fit_heightwise}</p>
                    <p>Fit Lengthwise: {result.fit_lengthwise}</p>
                    <p>Orientation: {getOrientation(result.orientation)}</p>
                    <p>Total Items: {result.total_items}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 w-full">
                <p className="font-medium text-green-400">
                  Remaining Quantity: {results.remaining_quantity}
                </p>
                <p className="font-medium text-green-400">
                  Success: {results.success ? "Yes" : "No"}
                </p>
              </div>
            </div>
          )}
          <div>
            {/* <button
              className="p-2 bg-blue-700 rounded-xl"
              onClick={() => handleCheckout()}
            >
              Checkout
            </button> */}
            <Link
              to={`/map?product=${itemData.productName}&quantity=${selectedQuantity}`}
              className="p-2 bg-blue-700 rounded-xl"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCalculation;

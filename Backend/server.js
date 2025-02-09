const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: "./config/config.env" }); // Load environment variables

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded requests

// CORS and logging for development
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: process.env.CLIENT_URL })); // Allow requests from the client
  app.use(morgan("dev")); // Log HTTP requests
}

// Route Imports
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const itemRouter = require("./routes/item-Routes");
const boxRouter = require("./routes/box-Routes");
const removeItemRouter = require("./routes/removeitem-Routes");
const removeBoxRouter = require("./routes/removebox-Routes");
const optimalPackingRouter = require("./routes/optimalpacking-Routes");
const packingRoutes = require("./routes/packing-route");

// Mount Routes
app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api", itemRouter);
app.use("/api", boxRouter);
app.use("/api", removeItemRouter);
app.use("/api", removeBoxRouter);
app.use("/api", optimalPackingRouter);
app.use("/api", packingRoutes);

// Handle 404 Errors
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");

const ipRoutes = require("./routes/ip");
const swaggerSpec = require("./swagger");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger documentation
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
    customSiteTitle: "IP Encryption API Documentation",
  })
);

// Optional: Access raw Swagger JSON
app.get("/api-docs.json", (req, res) => {
  res.json(swaggerSpec);
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) =>
    console.error("MongoDB connection error:", err)
  );

// API routes
app.use("/api", ipRoutes);

// Basic health check
app.get("/", (req, res) => {
  res.send("IP Encryption Check API is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

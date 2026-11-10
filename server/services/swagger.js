
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "IP Encryption Check API",
      version: "1.0.0",
      description:
        "API documentation for the IP Encryption Check application.",
      contact: {
        name: "API Support",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local development server",
      },
      {
        url: process.env.PRODUCTION_API_URL,
        description: "Production server",
      },
    ],
  },

  // Automatically scan route files for Swagger documentation
  apis: [require("path").join(__dirname, "routes", "*.js")],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;

// keys.js

module.exports = {
  // API keys and credentials
  API_KEY: process.env.API_KEY || 'default-api-key',
  API_SECRET: process.env.API_SECRET || 'default-api-secret',

  // Database configuration
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || 27017,
  DB_NAME: process.env.DB_NAME || 'mydatabase',

  // Other configuration
  APP_PORT: process.env.APP_PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'your-jwt-secret',
};

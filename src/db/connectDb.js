const mongoose = require('mongoose');
require('dotenv').config();

const establishDatabaseConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('Database connected');
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

module.exports = establishDatabaseConnection;

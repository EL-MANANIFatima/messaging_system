const mongoose = require('mongoose');


module.exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('the Database is connected...');   
      
  } catch (error) {
    console.error(error.message);
  }
};
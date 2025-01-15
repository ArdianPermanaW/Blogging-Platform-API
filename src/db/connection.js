const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
    try {
         // Connect to MongoDB Atlas using the connection string from .env
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;

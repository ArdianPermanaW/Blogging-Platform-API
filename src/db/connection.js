const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const connectDB = async () => {
    const uri = process.env.MONGO_URI;
    if (!uri) {
        throw new Error("MongoDB URI is not defined in the .env file.");
    }
    
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
      
    try {
        // Connect the client to the server	
        await client.connect();
        console.log("Connected to MongoDB Atlas!");
    } catch(error) {
        console.error("Error connection to mongoDB Atlas:", error);
    }
};
module.exports = connectDB;
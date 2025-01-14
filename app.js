require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/db/connection');
const postRoutes = require('./src/routes/postRoutes');

const app = express();
app.use(bodyParser.json());

// Connect to database
connectDB();

// Routes
app.use('/posts', postRoutes);

// local testing
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

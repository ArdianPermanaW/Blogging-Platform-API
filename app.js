require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/db/connection');
const postRoutes = require('./src/routes/postRoutes');

const app = express();
app.use(bodyParser.json());

connectDB();// Connect to database
app.use('/posts', postRoutes); // Routes

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});





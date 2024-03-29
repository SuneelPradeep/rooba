// app.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/route');
const loggerMiddleware = require('./middleware/logger');
require('dotenv').config()


const app = express();
app.use(require('body-parser').json())
app.use(require('cors')())
const PORT = process.env.PORT || 3010;
const MONGODB_URI = process.env.MONGO_URL;

app.use(loggerMiddleware) 

mongoose.connect(MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

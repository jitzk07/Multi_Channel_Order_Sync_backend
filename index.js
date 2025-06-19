const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
// Connect to MongoDB
connectDB();

const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(cors({
  origin: ['http://localhost:5173','https://multi-channel.netlify.app']
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/api/orders', orderRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



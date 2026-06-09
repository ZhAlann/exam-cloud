// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const logger = require('./logger');

const app = express();
connectDB();

app.use(cors({
    origin: ["http://localhost:3000",
        "https://exam-cloud-frontend.onrender.com"
    ],
    credentials: true
}));
app.use(express.json());
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => logger.info(`Serveur en écoute sur le port ${PORT}`));

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK'
    });
});
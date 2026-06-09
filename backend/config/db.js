const mongoose = require('mongoose');
require('dotenv').config();
const logger = require('../logger');

const connectDB = async () => {
    try {
        logger.info(`Connexion MongoDB : ${process.env.MONGO_URI}`);

        await mongoose.connect(process.env.MONGO_URI);

        logger.info('MongoDB connecté');
    } catch (err) {
        logger.error(`Erreur MongoDB : ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
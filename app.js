const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const urlRoutes = require('./routes/urlRoutes');

// Configurations
dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/url', urlRoutes);

module.exports = app;
const express = require('express');

const app = express();

// Manage app settings
//
// Authentication, Authorization
// Compression
// Security
// Helmet
// Static assets
// Https
// More middlewares...

app.use('/api/graphql');

module.exports = app;

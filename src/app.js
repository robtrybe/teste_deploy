const express = require('express');
const app = express();

app.get('/',(_req, res) => {
    res.status(200).json({ name: process.env.MYSQLDATABASE });
});

module.exports = app; 
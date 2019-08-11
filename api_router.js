const express = require('express');
const api_router = express.Router();
const api_data = require('./api_data');

api_router.get('/', (req, res) => {
    try {
        const latestAPI = api_data[0];
        res.send(latestAPI);
    } catch (error) {
        res.status(400).send("Error ", error);
    }
});

module.exports = api_router;
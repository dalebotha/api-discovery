const express = require('express');
const devDebud = require('debug')("app:dev");
//const api_data = require('./api_data');
const api_router = require('./api_router');
const helmet = require('helmet');

const app = new express();

app.use(helmet());
//app.use(express.json());
app.use('/api',api_router);

const port = process.env.port || 3000;

app.listen(port, () => {
    devDebud(`Listening on port ${port}`);
})



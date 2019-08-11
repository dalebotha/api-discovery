const Joi = require('@hapi/joi')
const express = require('express');
const api_router = express.Router();
const api_data = require('./api_data');
const _ = require('lodash');

const vers = [];

for (el of api_data) {
    vers.push(el.version);
};

checkVersionNumber = (req, res, next) => {
    const verSchema = {
        ver: Joi.string().valid(vers)
    };
    
    const result = Joi.validate({ver: req.params.ver}, verSchema);

    if(!result.error) next();
    else res.status(400).send("Error: There is no such version number");
};

api_router.get('/disc', (req, res) => {
    try {
        const latestAPI = _.filter(api_data,{"isCurrent": true});
        res.send(latestAPI);
    } catch (error) {
        res.status(400).send("Error ", error);
    }
});

api_router.get('/disc/:ver', checkVersionNumber, (req,res) => {
    try {
        const versionedAPI = _.filter(api_data, {"version": req.params.ver});
        console.log(versionedAPI);
        res.send(versionedAPI);
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = api_router;
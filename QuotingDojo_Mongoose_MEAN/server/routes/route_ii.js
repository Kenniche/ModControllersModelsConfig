const express = require('express');
const Route_ii = express.Router();
const {Quote_ii} = require('./../controllers/quote_ii');

Route_ii
    .get('/', Quote_ii.landingPage);

Route_ii
    .post('/quotes', Quote_ii.saveQuote)
    .get('/quotes', Quote_ii.getQuotes);
    

module.exports = {Route_ii};
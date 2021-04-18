const express = require ('express');
const quranQuotesController = require('../controlers/quranQuotesController')

const router = express.Router();

router
.route('/')
.get(quranQuotesController.getQuotes)
.post(quranQuotesController.createQuote)

module.exports = router;
const Quote = require('../models/quranModel');


exports.getQuotes = async (req, res) =>{

    try {
        const quotes = await Quote.find()
        res.status(200).json({
          status: 'success',
          results: quotes.length,
          data: {
            quotes
          }
        });
        } catch (err) {
          res.status(404).json({
            status: 'fail',
            error: err
          })
        }
      
}
exports.createQuote = async (req, res) =>{
    try {
        const newQuote = await Quote.create(req.body);
        res.status(201).json({
            status: 'success',
            data: newQuote
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}
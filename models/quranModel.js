const mongoose = require('mongoose');

const quotesSchema = new mongoose.Schema({
    quote: {
            type: String,
            required: [true, 'A quote must have a title']
     },
     verse: {
        type: String,
        required: [true, 'A quote must have a verse']
    },
    user: {
        type: String,
        default: 'Guest',
    },

})

const Quote = mongoose.model('Quote', quotesSchema)

module.exports = Quote;
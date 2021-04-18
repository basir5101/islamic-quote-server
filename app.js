const express = require ('express');
const quranRouter = require('./routes/quranRoutes');
const cors = require('cors');

const app = express();
app.use(cors())

app.get('/', (req, res) =>{
    res.send('hello dear')
})

app.use(express.json())


app.use('/api/v1/quotes/quran-quotes', quranRouter)

module.exports = app;
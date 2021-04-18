const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require ('./app');

dotenv.config({ path: './config.env' })

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then( () => console.log('DB Connected'))

const port = process.env.PORT || 8000;

app.listen(port, (req, res) =>{
    res.send(`app running on port ${port}`)
})
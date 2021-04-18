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

const port = process.env.port || 8000;

app.listen(port, () =>{
    console.log(`app running on port ${port}`)
})
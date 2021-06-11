const mongoose = require('mongoose')
const DB = process.env.DATABASE

mongoose.connect(DB,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
})
.then(()=> {
    console.log("database connection success")
})
.catch(err => { console.log(err)})
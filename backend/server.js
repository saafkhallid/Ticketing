require('dotenv').config({ path: './.env' })
require('./database/db')

const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require('express')
const userRouter = require('./routes/userRouter')
const { clientAuth } = require('./middlewares/auth')

const app = express()

const corsOptions = {
    origin: 'http://localhost:3003', 
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.json())



//rotes 
app.use('/api', userRouter)
// app.use('*', clientAuth)





//listen server
const port = process.env.PORT
app.listen(port, () => console.log(`Example app listening on port ${port}`))
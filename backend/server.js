const express = require('express')
const app = express()

const mongoose = require('mongoose')
require('dotenv').config()
mongoose.set('strictQuery', false)

const PORT = 4000 || process.env.port

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log(`We are CONNECTED!`))
.catch((err) => console.log(err))


app.listen(PORT, () =>{
    console.log(`I am listening at the ${PORT}`)
})

//kseniya10081989
//1W3pJTdLrq7w68sq
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./mealRoutes')
const cors = require('cors')

require('dotenv').config()
mongoose.set('strictQuery', false)

const PORT = 4000 || process.env.port

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log(`We are CONNECTED!`))
.catch((err) => console.log(err))

app.use(router)


app.listen(PORT, () =>{
    console.log(`I am listening at the ${PORT}`)
})

//kseniya10081989
//1W3pJTdLrq7w68sq
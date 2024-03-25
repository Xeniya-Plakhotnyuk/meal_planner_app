const { kStringMaxLength } = require('buffer')
const mongoose = require('mongoose')
const { stringify } = require('querystring')

const mealSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Meal', mealSchema)
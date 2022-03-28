const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    test:{type: String},
    price:{type:String},
    
})

module.exports = mongoose.model('Therapies', testSchema)
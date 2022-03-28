const mongoose = require('mongoose');

const ExcellenceSchema = new mongoose.Schema({
    picture:{type: String},
    picture1:{type:String},
    picture2:{type:String},
    picture3:{type:String},
    main:{type :String},
    smallContent :{type :String},
    heading1:{type :String},
    content1:{type :String},
    heading2:{type :String},
    content2:{type:String}
})

module.exports = mongoose.model('Specialization', ExcellenceSchema)
const mongoose = require('mongoose');

const SpecializationSchema = new mongoose.Schema({
    specialization:{type: String},
    picture1:{type:String},
    doctor1:{type:String},
    picture2:{type:String},
    doctor2:{type:String},
    picture3:{type:String},
    doctor3:{type:String},
    picture4:{type:String},
    doctor4:{type :String},
    picture5:{type:String},
    doctor5 :{type :String},
})

module.exports = mongoose.model('Doctors', SpecializationSchema)
const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    name:{type: String},
    PhoneNumber:{type:String},
    date:{type:String},
    specialization:{type:String},
    doctorName:{type:String},
    timeSlot:{type:String},
})

module.exports = mongoose.model('Appointment', AppointmentSchema)
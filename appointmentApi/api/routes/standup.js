const appointment = require('../../model/standup')
const Appointment = require('../../model/standup')
// const standup = require('../../model/standup')
module.exports = function(router){


 // post data
    router.post('/appointment', function (req,res){
        let note = new Appointment(req.body)
        note.save(function (err,note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })

//get data which we posted
    
    router.get('/appointment',function(req,res){
        Appointment.find({},(err,appointment)=>{
            if(err){
                res.json({success:false, message :err});
            }else{
                if(!appointment){
                    res.json({success:false, message:'no standup found'});
                }
                else{
                    //res.json({success:true,standup:standup});
                    res.json(appointment)

                }
            }
        })
    })

    
    //specific get
    router.get('/appointment/:_id', async(req,res)=>{
        try{
            const post = await Appointment.findById(req.params._id);
            res.json(post);
        }
        catch(err){
            res.json({message:err});
        }
    })




    //update data which we posted  put verb

    router.put('/updateAppointment/:_id',(req,res)=>{
        // check if id was provided
        if(!req.body._id){
            res.json({success:false,message:'No standup id provided'}); //return error message
        }else{
            //check if it's exist in database
            Appointment.findOne({_id:req.body._id},(err,appointment)=>{
                //check if id is a valid ID
                if(err){
                    res.json({success:false,message:'not a valid standupid'});
                } else{
                    appointment.name = req.body.name;
                    appointment.PhoneNumber = req.body.PhoneNumber;
                    appointment.date= req.body.date;
                    appointment.specialization = req.body.specialization;
                    appointment.doctorName = req.body.doctorName;
                    appointment.timeSlot = req.body.timeSlot;
                    appointment.save((err) => {
                        if(err){
                            res.json({success:false,message:err});
                        }else{
                            res.json({success:true,message :'standup updated'});
                        }
                    })
                }
            }
            )
        }
    })

    // delete data
    
    router.delete('/deleteappointment/:_id',(req,res) => {
        //check if id was provided in parameters
        if(!req.params._id){
            res.json({ success:false,message:'No id provided'}); //return error message
        } else {
            //check id id is found in database
            Appointment.findOne({_id: req.params._id},(err,appointment) => {
                //check if error was found
                if (err) {
                    res.json({success:false,message:'Invalid id'}); // return error message
                } else {
                    //remove the standup from database
                    appointment.remove((err) => {
                        if(err) {
                            res.json({ success: false,message:err}); //return error message
                        } else{
                            res.json({success:true,message:'Standup deleted!'}); //return success message
                        }
                    });
                }
            });
        }
    });

}
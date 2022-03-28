const doctors = require('../../model/standup')
const Doctors = require('../../model/standup')
// const standup = require('../../model/standup')
module.exports = function(router){


 // post data
    router.post('/doctors', function (req,res){
        let note = new Doctors(req.body)
        note.save(function (err,note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })

//get data which we posted
    
    router.get('/doctors',function(req,res){
        Doctors.find({},(err,doctors)=>{
            if(err){
                res.json({success:false, message :err});
            }else{
                if(!doctors){
                    res.json({success:false, message:'no standup found'});
                }
                else{
                    //res.json({success:true,standup:standup});
                    res.json(doctors)

                }
            }
        })
    })

    
    //specific get
    router.get('/doctors/:_id', async(req,res)=>{
        try{
            const post = await Doctors.findById(req.params._id);
            res.json(post);
        }
        catch(err){
            res.json({message:err});
        }
    })




    //update data which we posted  put verb

    router.put('/updatedoctor/:_id',(req,res)=>{
        // check if id was provided
        if(!req.body._id){
            res.json({success:false,message:'No standup id provided'}); //return error message
        }else{
            //check if it's exist in database
            Doctors.findOne({_id:req.body._id},(err,doctors)=>{
                //check if id is a valid ID
                if(err){
                    res.json({success:false,message:'not a valid standupid'});
                } else{
                    doctors.specialization = req.body.specialization;
                    doctors.picture1 = req.body.picture1;
                    doctors.doctor1= req.body.doctor1;
                    doctors.picture2 = req.body.picture2;
                    doctors.doctor2 = req.body.doctor2;
                    doctors.picture3 = req.body.picture3;
                    doctors.doctor3 = req.body.doctor3;
                    doctors.picture4 = req.body.picture4;
                    doctors.doctor4 = req.body.doctor4;
                    doctors.picture5 = req.body.picture5;
                    doctors.doctor5 = req.body.doctor5;
                    doctors.save((err) => {
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
    
    router.delete('/deletedoctors/:_id',(req,res) => {
        //check if id was provided in parameters
        if(!req.params._id){
            res.json({ success:false,message:'No id provided'}); //return error message
        } else {
            //check id id is found in database
            Doctors.findOne({_id: req.params._id},(err,doctors) => {
                //check if error was found
                if (err) {
                    res.json({success:false,message:'Invalid id'}); // return error message
                } else {
                    //remove the standup from database
                    doctors.remove((err) => {
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
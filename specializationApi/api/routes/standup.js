const specialization = require('../../model/standup')
const Specialization = require('../../model/standup')
// const standup = require('../../model/standup')
module.exports = function(router){


 // post data
    router.post('/specialization', function (req,res){
        let note = new Specialization(req.body)
        note.save(function (err,note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })

//get data which we posted
    
    router.get('/specialization',function(req,res){
        Specialization.find({},(err,specialization)=>{
            if(err){
                res.json({success:false, message :err});
            }else{
                if(!specialization){
                    res.json({success:false, message:'no standup found'});
                }
                else{
                    //res.json({success:true,standup:standup});
                    res.json(specialization)

                }
            }
        })
    })

    
    //specific get
    router.get('/specialization/:_id', async(req,res)=>{
        try{
            const post = await Specialization.findById(req.params._id);
            res.json(post);
        }
        catch(err){
            res.json({message:err});
        }
    })




    //update data which we posted  put verb

    router.put('/updatespecialization/:_id',(req,res)=>{
        // check if id was provided
        if(!req.body._id){
            res.json({success:false,message:'No standup id provided'}); //return error message
        }else{
            //check if it's exist in database
            Specialization.findOne({_id:req.body._id},(err,specialization)=>{
                //check if id is a valid ID
                if(err){
                    res.json({success:false,message:'not a valid standupid'});
                } else{
                    specialization.picture = req.body.picture;
                    specialization.picture1= req.body.picture1;
                    specialization.picture2 = req.body.picture2;
                    specialization.picture3 = req.body.picture3;
                    specialization.main = req.body.main;
                    specialization.smallContent = req.body.smallContent;
                    specialization.heading1 = req.body.heading1;
                    specialization.content1 = req.body.content1;
                    specialization.heading2 = req.body.heading2;
                    specialization.content2 = req.body.content2;
                    specialization.save((err) => {
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
    
    router.delete('/deletespecialization/:_id',(req,res) => {
        //check if id was provided in parameters
        if(!req.params._id){
            res.json({ success:false,message:'No id provided'}); //return error message
        } else {
            //check id id is found in database
            Specialization.findOne({_id: req.params._id},(err,specialization) => {
                //check if error was found
                if (err) {
                    res.json({success:false,message:'Invalid id'}); // return error message
                } else {
                    //remove the standup from database
                    specialization.remove((err) => {
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
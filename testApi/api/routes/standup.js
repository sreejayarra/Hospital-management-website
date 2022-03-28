const therapies = require('../../model/standup')
const Therapies = require('../../model/standup')
// const standup = require('../../model/standup')
module.exports = function(router){


 // post data
    router.post('/therapies', function (req,res){
        let note = new Therapies(req.body)
        note.save(function (err,note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })

//get data which we posted
    
    router.get('/therapies',function(req,res){
        Therapies.find({},(err,therapies)=>{
            if(err){
                res.json({success:false, message :err});
            }else{
                if(!therapies){
                    res.json({success:false, message:'no standup found'});
                }
                else{
                    //res.json({success:true,standup:standup});
                    res.json(therapies)

                }
            }
        })
    })

    
    //specific get
    router.get('/therapies/:_id', async(req,res)=>{
        try{
            const post = await Therapies.findById(req.params._id);
            res.json(post);
        }
        catch(err){
            res.json({message:err});
        }
    })




    //update data which we posted  put verb

    router.put('/updatetherapies/:_id',(req,res)=>{
        // check if id was provided
        if(!req.body._id){
            res.json({success:false,message:'No standup id provided'}); //return error message
        }else{
            //check if it's exist in database
            Therapies.findOne({_id:req.body._id},(err,therapies)=>{
                //check if id is a valid ID
                if(err){
                    res.json({success:false,message:'not a valid standupid'});
                } else{
                    therapies.test = req.body.test;
                    therapies.price = req.body.price;
                    therapies.save((err) => {
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
    
    router.delete('/deletetherapies/:_id',(req,res) => {
        //check if id was provided in parameters
        if(!req.params._id){
            res.json({ success:false,message:'No id provided'}); //return error message
        } else {
            //check id id is found in database
            Therapies.findOne({_id: req.params._id},(err,therapies) => {
                //check if error was found
                if (err) {
                    res.json({success:false,message:'Invalid id'}); // return error message
                } else {
                    //remove the standup from database
                    therapies.remove((err) => {
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
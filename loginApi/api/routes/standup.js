const login = require('../../model/standup')
const Login = require('../../model/standup')
// const standup = require('../../model/standup')
module.exports = function(router){


 // post data
    router.post('/login', function (req,res){
        let note = new Login(req.body)
        note.save(function (err,note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })

//get data which we posted
    
    router.get('/login',function(req,res){
        Login.find({},(err,login)=>{
            if(err){
                res.json({success:false, message :err});
            }else{
                if(!login){
                    res.json({success:false, message:'no standup found'});
                }
                else{
                    //res.json({success:true,standup:standup});
                    res.json(login)

                }
            }
        })
    })

    
    //specific get
    router.get('/login/:_id', async(req,res)=>{
        try{
            const post = await Login.findById(req.params._id);
            res.json(post);
        }
        catch(err){
            res.json({message:err});
        }
    })




    //update data which we posted  put verb

    router.put('/updatelogin/:_id',(req,res)=>{
        // check if id was provided
        if(!req.body._id){
            res.json({success:false,message:'No standup id provided'}); //return error message
        }else{
            //check if it's exist in database
            Login.findOne({_id:req.body._id},(err,login)=>{
                //check if id is a valid ID
                if(err){
                    res.json({success:false,message:'not a valid standupid'});
                } else{
                    login.test = req.body.test;
                    login.price = req.body.price;
                    login.save((err) => {
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
    
    router.delete('/deletelogin/:_id',(req,res) => {
        //check if id was provided in parameters
        if(!req.params._id){
            res.json({ success:false,message:'No id provided'}); //return error message
        } else {
            //check id id is found in database
            Login.findOne({_id: req.params._id},(err,login) => {
                //check if error was found
                if (err) {
                    res.json({success:false,message:'Invalid id'}); // return error message
                } else {
                    //remove the standup from database
                    login.remove((err) => {
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
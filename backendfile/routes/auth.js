const express = require("express");
const router = express.Router(); 
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const fetchUser = require("../middleware/FetchUser");

const jwt_Sign= "G4X4T4#DW";




// route to create a new user in our application endpoint:/api/users/createuser
router.post("/createuser",[

    body('fname','enter a valid name').isLength({min:3}),
    body('lname','enter a valid name').isLength({min:3}),
    body('email','enter a valid email').isEmail(),
    body("password",'enter a password, having 3 character minimum').isLength({min:5}),
],
async (req,res)=>{
  let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
     
    
        try
        { let user = await User.findOne({email: req.body.email});

        if(user){
            res.status(400).json({err:"Email is already used try another one!"})
        }
        const salt = await bcrypt.genSalt(10);
        const sec_Password = await bcrypt.hash(req.body.password,salt);
        
        
        user = await User.create({
                fname: req.body.fname,
                lname: req.body.lname,
                password: sec_Password,
                email: req.body.email,
                age: req.body.age,
                gender: req.body.gender,
            })

            const data = {
                user:{
                    id:user.id
                }
            }

           const authtoken = jwt.sign(data, jwt_Sign);
           success= true;

            res.json({authtoken,success})
            // console.log(user);
            
        }catch(error){
            console.log(error);
            res.json({error:"some error occured"})
        } 
    })


// route to login a user in our application endpoint:/api/users/login

router.post('/login',[
    body('email', 'enter a valid email').isEmail(),
    body('password',"Password can't be blank").exists(),
  ], async (req,res)=>{

    let success = false;
    // if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()});
    }
  
    // const {email, password } = req.body;
    try{
      let user = await User.findOne({email:req.body.email});
      if(!user){
        return res.status(400).json({error:"Plz try to login with correct credentials"});
      }
      
      const passwordCompare = await bcrypt.compare( req.body.password,user.password);
      if(!passwordCompare){
        return res.status(400).json({success, error:"Plz try to login with correct credentials"});
      }
  
      const data ={
        user:{
          id: user.id
        }
       }
        const authtoken = jwt.sign(data, jwt_Sign);
        success = true;
        res.json({authtoken,success})
        
      }catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
      }
  
    })

    router.post('/getuser',fetchUser, async (req, res)=>{
        try{
          let userId = req.user.id;
          const user = await User.findById(userId).select("-password")
          res.send(user);
        }catch(error){
             console.error(error.message);
             res.status(500).send("Internal server error");
        }
      } ) 


module.exports = router;

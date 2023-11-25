const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');

require("../db/conn");
const User = require("../model/userSchema");

//Storing data in database using async await
router.post("/register", async (req,res) =>{
    
    const { name, email, password} = req.body;
    if(!name || !email || !password){
        return res.status(422).json({error:"Please fill all the details"});
    }

    try {
        const userExists = await User.findOne({email: email});
        if(userExists){
            return res.status(422).json({error:"Email already exists"});
        }  else{
            const user = new User({name, email, password});
            await user.save();
            res.status(201).json({message:"User registered successfully"});
        }

    } catch(err){
        console.log(err);
    }    
});

//Login Route
router.post("/", async(req,res) =>{

    try{
        const { email , password}= req.body;
        if(!email || !password){
            res.status(400).json({error:"Please fill all the details"});
        }

        // If email matches, then we will get entire object with data of the user in userLogin
        const userLogin = await User.findOne({email: email});
        
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await  userLogin.generateAuthToken();
            //console.log(token);

            res.cookie("jwtoken",token,{
                    expires:new Date(Date.now() + 25892000000),  //Expiry after 30 days
                    httpOnly: true
            });
    
            if(!isMatch){
                res.status(400).json({error:"User not found"});
            }else{
                //console.log(userLogin);
                res.json({message:"User signed in successfully"});
            }
        }else{
            res.status(400).json({error:"User not found"});
        }
        
    } catch(err){
        console.log(err);
    }
});

router.get('/dashboard', authenticate, (req,res) =>{
    res.send(req.rootUser);
});

router.get('/logout', (req,res) =>{
    res.clearCookie('jwtoken', {path: '/'});
    res.status(200).send("User logged out");
})

/*Storing data in database using promises
router.post("/register", (req,res) =>{
    
    const { name, email, password} = req.body;
    if(!name || !email || !password){
        return res.status(422).json({error:"Please fill all the details"});
    }

    
    User.findOne({email: email})
        .then((userExists) =>{
            if(userExists){
            return res.status(422).json({error:"Email already exists"});
            }   
        
        const user = new User({name, email, password});

        user.save().then(()=>{
            res.status(201).json({message:"User registered successfully"});
        }).catch((err) => res.status(500).json({message:"Failed to register user"}));
    }).catch(err => {console.log(err);});
}); */

module.exports = router;
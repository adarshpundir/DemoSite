const express= require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose=require('mongoose')
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var crypto = require("crypto");
const db ="mongodb+srv://adarsh_007:Goku007@cluster0-gqyuk.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(db, { useNewUrlParser: true },err=>{

    if(err)
    {
        console.log('Error'+err)
    }
    else
    {
        console.log('connected to mongodb')
    }
})
router.get('/',(req,res)=>
{
    res.send('from api route')
})
router.post('/register',async(req,res)=>
{
    let userData=req.body
    let username=req.body.username;
    let user=new User(userData)
    let searcheduser = await User.findOne({
        username
    });
    if (!searcheduser){
    user.save((error,registeredUser)=>
    {
        if(error)
        {
            console.log('Error :'+error)
        }
        else{
            res.status(200).send(registeredUser)
        }
    })
}
else
{
   res.status(400).send({message:"User Already Exists!"});
}
    

})
router.post(
    "/logIn",
   
    async (req, res) => {

        const secret = crypto.randomBytes(20).toString('hex');
        console.log(secret);
        token = '';
        const { username, password } = req.body;
        try {
            let user = await User.findOne({
                username
            });
            if (!user)
                return res.status(400).json({
                    message: "User Not Exist"
                });
                console.log(password,user.password);

             await bcrypt.compare(password,user.password,function(err,res)
            {
                if(err)
                {
                    console.log('password comparison error');
                    return res.status(400).json({
                        message: "Incorrect Password"
                    });

                }
            });
                
                const payload = {
                        user: {
                             username,
                             id: user.id
                         }
                     };

                 const  token=jwt.sign(
                         payload,
                         secret,
                         {
                             expiresIn: 3600
                         },
                         
                    );
                
                if(token){
                return res.status(200).json({ user,token });
                }
                     
            
            
        }
             catch (e) {
            console.error(e);
            res.status(500).json({
            message: "Server Error"
    });
}
    });

            




module.exports=router
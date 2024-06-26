const User = require('../models/User');

const createUser = async(res,resp)=>{
    const {username,email,password}=res.body;
    if(!username || !email || !password){
        return resp.status(422).json({error:"Please fill all the fields"})
    }
    
    const user = new User({
        username,
        email,
        password
    })

    const exists = await User.find({email});
    console.log(exists)
    if(exists.length > 0){
        return resp.status(422).json({error:"Email already in use"})
    }

    try{
        await user.save();
        resp.status(201).json({message:"User created successfully"})
    }catch(e){
        console.log(e)
        resp.status(500).json({error:"Failed to create user"})
    }
}

const loginUser =async(req,resp)=>{
    const {email,password}=req.body;    
    console.log(email,password)
    const user=await User.findOne({
        email
    });
    console.log(user)
    if(user.password!==password){
        return resp.status(422).json({error:"Invalid password"})
    }
    resp.status(200).json(user);
}

module.exports = {
    createUser,
    loginUser
}
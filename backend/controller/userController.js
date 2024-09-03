const User =require('../model/User')

const registration=async(req,res)=>{
 try{
        const {name,email,password}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:'User Already Exist'});
        }

        const newUser=new User({name,email,password});
        await newUser.save();
        return res.status(200).json({message:'User registered successfully'});
 }
 catch(error){
    console.error(error);
   return res.status(500).json({message:'Server Error'});
 }
}

const login=async(req,res)=>{
    try{
            const {email,password}=req.body;
            const user = await User.findOne({email,password});
            if(!user ){
                return res.status(400).json({message:'Invalid email or password'});
            }
            return res.status(200).json({message:'Login Successful',user: { name: user.name, email: user.email } });
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:'Server error'});
    }
}
module.exports = {
    registration,
    login
}
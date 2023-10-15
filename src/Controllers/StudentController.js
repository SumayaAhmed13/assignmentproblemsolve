const StudentModel=require("../Models/StudentsModel");
const OTPModel=require("../Models/OTPModel");
const jwt=require("jsonwebtoken");
const SendEmailUtility = require("../utility/SendEmailUtility");

const CreateStudent=async(req,res)=>{
    try{
     let reqBody=req.body
     let result=await StudentModel.create(reqBody);
     res.status(200).json({message:"Student Created Successfully",data:result});
    }
   catch(error){
    res.status(404).json({message:"Failed to Student Create",data:error});
   }


}
const UpdateStudent=async(req,res)=>{
    try{
        let id=req.params.id;
        let query={_id:id};
        let bodyData=req.body;
        let result=await StudentModel.updateOne(query,bodyData);
        res.status(200).json({message:"Student Update Successfully",data:result});

    }
    catch(error){
        res.status(404).json({message:"Failed to Student Update",data:error});
    }

} 
const GetAllStudent=async(req,res)=>{
    try{
    
        let result=await StudentModel.find();
        res.status(200).json({message:"Get All Student Successfully",data:result});

    }
    catch(error)
    {  res.status(404).json({message:"No Data Found",data:error});}
}
const DeleteStudent=async(req,res)=>{
    try{
        let id= req.params.id;
        let Query={_id:id};
        let result= await StudentModel.deleteOne(Query)
        res.status(200).json({message:"Student Delete Successfully",data:result});

    }
    catch(error)
    {  res.status(404).json({message:"No Data Found",data:error});}
}

const Login=async(req,res)=>{
    try{
      let reqBody=req.body;
      let result=await StudentModel.find(reqBody).count();
      if(result ===1){
        let Payload={
            expiresIn: '90d',
            data:reqBody['email']
            
        }
        let token=jwt.sign(Payload,"dffed334ersddc190422")
        res.status(200).json({message:"Token Created Successfully",data:token})
      }
        

    }
    catch(error){
        res.status(404).json({status:"fail",data:e})
    }


}

const RecoverVerifyEmail=async (req,res)=>{
    let email = req.params.email;
    let OTPCode = Math.floor(100000 + Math.random() * 900000);
    let EmailText="Your Verification Code is ="+OTPCode
    let EmailSubject="Task manager verification code"

    let result= await StudentModel.find({email:email}).count();
    if(result===1){
        // Verification Email
       await SendEmailUtility(email,EmailText,EmailSubject);
       await OTPModel.create({email:email,otp:OTPCode})
       res.status(200).json({status:"success",data:"6 Digit Verification Code has been send"})

    }
    else{
        res.status(200).json({status:"fail",data:"No Student Found"})
    }

}

const OTPRecoverVerify=async (req,res)=>{
    let email = req.params.email;
    let OTPCode = req.params.otp;
    let status=0;
    let statusUpdate=1;

    let result= await OTPModel.find({email:email,otp:OTPCode,status:status}).count();
    // Time Validation 2 min
    if(result===1){
        await OTPModel.updateOne({email:email,otp:OTPCode,status:status}, {status:statusUpdate})
        res.status(200).json({status:"success",data:"Verification Completed"})
    }
    else{
        res.status(200).json({status:"fail",data:"Invalid Verification"})
    }

}

const PassResetRecover=async (req,res)=>{

    let email = req.body['email'];
    let OTPCode = req.body['OTP'];
    let NewPass =  req.body['password'];
    let statusUpdate=1;

    let result= await OTPModel.find({email:email,otp:OTPCode,status:statusUpdate}).count();
    if(result===1){
        let result=await StudentModel.updateOne({email: email}, {password:NewPass})
        res.status(200).json({status:"success",data:"Password Reset Success"})
    }
    else{
        res.status(200).json({status:"fail",data:"Invalid Verification"})
    }
}

module.exports={
    CreateStudent,
    UpdateStudent,
    GetAllStudent,
    DeleteStudent,
    Login,
    RecoverVerifyEmail,
    OTPRecoverVerify,
    PassResetRecover

}
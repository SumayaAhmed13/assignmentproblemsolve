const StudentModel=require("../Models/StudentsModel");
const jwt=require("jsonwebtoken");

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
        let Token=jwt.sign(Payload,"dffed334ersddc190422")
        res.status(200).json({message:"Token Created Successfully",data:Token})
      }
        

    }
    catch(error){
        res.status(404).json({status:"fail",data:e})
    }


}


module.exports={
    CreateStudent,
    UpdateStudent,
    GetAllStudent,
    DeleteStudent,
    Login

}
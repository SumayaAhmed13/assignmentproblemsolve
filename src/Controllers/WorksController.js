const WorksModel=require("../Models/WorksModel");
const CreateWork=async(req,res)=>{
    try{
        let reqBody=req.body;
        reqBody.email=req.headers['email'];
        let result= await WorksModel.create(reqBody);
        res.status(200).json({message:"Work Add Successfully",data:result});


    }
    catch(error){
        res.status(401).json({status:"unauthorized",data:error});
    }

}
module.exports={
    CreateWork
}
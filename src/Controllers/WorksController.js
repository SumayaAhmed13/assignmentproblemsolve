const WorksModel=require("../Models/WorksModel");
const CreateWork=async(req,res)=>{
    try{
        let reqBody=req.body;
        reqBody.email=req.headers['email'];
        let result= await WorksModel.create(reqBody);
        console.log(result);
        res.status(200).json({message:"Work Add Successfully",data:result});
    }
    catch(error){
        res.status(401).json({status:"unauthorized",data:error});
    }

}
const UpdateWork=async(req,res)=>{
    try{
        let id=req.params.id;
        let Query={_id:id};
        let bodyData=req.body;
        let result=await WorksModel.updateOne(Query,bodyData);
        res.status(200).json({message:"Work Updated Successfully",data:result});

    }
    catch(error){
        res.status(401).json({status:"unauthorized",data:error});
    }

}
const GetAllWork= async(req,res)=>{
    try{
        let email=req.headers['email'];
        let result=await WorksModel.find({email:email});
        res.status(200).json({message:"Get Works Successfully",data:result});

    }
    catch(error){
        res.status(401).json({status:"unauthorized",data:error});
    }

}
const DeleteWork=async(req,res)=>{
     try{
        let id= req.params.id;
        let Query={_id:id};
        let result= await WorksModel.deleteOne(Query)
        res.status(200).json({message:"Delete Work Successfully",data:result})     
     }
     catch(error){
        res.status(401).json({status:"unauthorized",data:error});
    }

}

module.exports={
    CreateWork,
    UpdateWork,
    GetAllWork,
    DeleteWork
}
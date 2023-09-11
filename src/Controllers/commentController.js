const createComment= async(req,res)=>{
   res.status(200).json({status:"success", data: "Comment Created Successfully"});
}
const readComment=async(req,res)=>{
    
    res.status(200).json({status:"success", data: "Get All Comment"});
}
const updateComment=async(req,res)=>{
     res.status(200).json({status:"success", data: "Comment Updated Successfully"});
}

const deleteComment=async(req,res)=>{
  
    res.status(200).json({status:"success", data: "Comment Deleted Successfully"});
}
module.exports={
    createComment,
    readComment,
    updateComment,
    deleteComment
}
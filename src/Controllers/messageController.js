const createMessage= async(req,res)=>{
   res.status(200).json({status:"success", data: "Message Created Successfully"});

}
const readMessage=async(req,res)=>{
   res.status(200).json({status:"success", data: "Get All Message"});

}
const updateMessage=async(req,res)=>{
  res.status(200).json({status:"success", data: "Message Updated Successfully"});

}

const deleteMessage=async(req,res)=>{
    res.status(200).json({status:"success", data: "Message Deleted Successfully"});
}
module.exports={
    createMessage,
    readMessage,
    updateMessage,
    deleteMessage
}
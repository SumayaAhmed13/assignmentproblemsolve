const createMessage= async(req,res)=>{

    res.send('Message Created Successfully');

}
const readMessage=async(req,res)=>{
    
    res.send('Get All Message');

}
const updateMessage=async(req,res)=>{
    
    res.send('Message Updated Successfully');

}

const deleteMessage=async(req,res)=>{
    
    res.send('Message Deleted Successfully');

}
module.exports={
    createMessage,
    readMessage,
    updateMessage,
    deleteMessage
}
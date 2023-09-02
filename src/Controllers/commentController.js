const createComment= async(req,res)=>{

    res.send('Comment Created Successfully');

}
const readComment=async(req,res)=>{
    
    res.send('Get All Comment');

}
const updateComment=async(req,res)=>{
    
    res.send('Comment Updated Successfully');

}

const deleteComment=async(req,res)=>{
    
    res.send('Comment Deleted Successfully');

}
module.exports={
    createComment,
    readComment,
    updateComment,
    deleteComment
}
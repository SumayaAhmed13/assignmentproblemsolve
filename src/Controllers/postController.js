const createPost= async(req,res)=>{
    res.status(200).json({status:"success", data: "Post Created Successfully"});
  }
  const readPost=async(req,res)=>{
       res.status(200).json({status:"success", data: "Get All Post"});
  }
  const updatePost=async(req,res)=>{
      res.status(200).json({status:"success", data: "Post Updated Successfully"});
  }
  
  const deletePost=async(req,res)=>{
        res.status(200).json({status:"success", data: "Post Deleted Successfully"});
  }
  module.exports={
      createPost,
      updatePost,
      readPost,
      deletePost
     
  }
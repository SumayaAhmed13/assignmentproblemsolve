const createBlog= async(req,res)=>{
  res.status(200).json({status:"success", data: "Blog Created Successfully"});
}
const readBlog=async(req,res)=>{
     res.status(200).json({status:"success", data: "Get All Blog"});
}
const updateBlog=async(req,res)=>{
    res.status(200).json({status:"success", data: "Blog Updated Successfully"});
}

const deleteBlog=async(req,res)=>{
      res.status(200).json({status:"success", data: "Blog Deleted Successfully"});
}
module.exports={
    createBlog,
    updateBlog,
    readBlog,
    deleteBlog
}
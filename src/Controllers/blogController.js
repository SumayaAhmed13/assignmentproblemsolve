const createBlog= async(req,res)=>{

    res.send('Blog Created Successfully');

}
const readBlog=async(req,res)=>{
    
    res.send('Get All Blog');

}
const updateBlog=async(req,res)=>{
    
    res.send('Blog Updated Successfully');

}

const deleteBlog=async(req,res)=>{
    
    res.send('Blog Deleted Successfully');

}
module.exports={
    createBlog,
    updateBlog,
    readBlog,
    deleteBlog
}
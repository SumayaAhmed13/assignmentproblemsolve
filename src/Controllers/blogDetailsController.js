const createBlogDetail= async(req,res)=>{

    res.send('Blog Detail Created Successfully');

}
const readBlogDetail=async(req,res)=>{
    
    res.send('Get All Blog Detail');

}
const updateBlogDetail=async(req,res)=>{
    
    res.send('Blog Detail Updated Successfully');

}

const deleteBlogDetail=async(req,res)=>{
    
    res.send('Blog Detail Deleted Successfully');

}
module.exports={
    createBlogDetail,
    updateBlogDetail,
    readBlogDetail,
    deleteBlogDetail
}
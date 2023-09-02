const createProduct= async(req,res)=>{

    res.send('Product Created Successfully');

}
const readProduct=async(req,res)=>{
    
    res.send('Get All Product');

}
const updateProduct=async(req,res)=>{
    
    res.send('Product Updated Successfully');

}

const deleteProduct=async(req,res)=>{
    
    res.send('Product Deleted Successfully');

}
module.exports={
   createProduct,
   readProduct,
   updateProduct,
   deleteProduct
    
}
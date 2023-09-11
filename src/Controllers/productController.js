const createProduct= async(req,res)=>{
  res.status(200).json({status:"success", data: "Product Created Successfully"});

}
const readProduct=async(req,res)=>{
   res.status(200).json({status:"success", data: "Get All Product"});

}
const updateProduct=async(req,res)=>{
  res.status(200).json({status:"success", data: "Product Updated Successfully"});

}

const deleteProduct=async(req,res)=>{
     res.status(200).json({status:"success", data: "Product Deleted Successfully"});

}
module.exports={
   createProduct,
   readProduct,
   updateProduct,
   deleteProduct
    
}
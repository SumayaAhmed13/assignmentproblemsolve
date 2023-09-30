const createSubAdmin= async(req,res)=>{
    res.status(200).json({status:"success", data: "SubAdmin Created Successfully"});
  }
  const readSubAdmin=async(req,res)=>{
       res.status(200).json({status:"success", data: "Get All SubAdmin"});
  }
  const updateSubAdmin=async(req,res)=>{
      res.status(200).json({status:"success", data: "SubAdmin Updated Successfully"});
  }
  
  const deleteSubAdmin=async(req,res)=>{
        res.status(200).json({status:"success", data: "SubAdmin Deleted Successfully"});
  }
  module.exports={
      createSubAdmin,
      updateSubAdmin,
      readSubAdmin,
      deleteSubAdmin
     
  }
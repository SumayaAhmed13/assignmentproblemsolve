const createAdmin= async(req,res)=>{
    res.status(200).json({status:"success", data: "Admin Created Successfully"});
  }
  const readAdmin=async(req,res)=>{
       res.status(200).json({status:"success", data: "Get All Admin"});
  }
  const updateAdmin=async(req,res)=>{
      res.status(200).json({status:"success", data: "Admin Updated Successfully"});
  }
  
  const deleteAdmin=async(req,res)=>{
        res.status(200).json({status:"success", data: "Admin Deleted Successfully"});
  }
  module.exports={
      createAdmin,
      updateAdmin,
      readAdmin,
      deleteAdmin
     
  }